// Router
import { Request, Response } from 'express';
import {  findMovieTitleByString } from '../models/Movie';

// Database
import { Movie, User, Favorite } from '@prisma/client';
import prisma from "../client"

// Environment
import dotenv from 'dotenv';
// END IMPORTS

dotenv.config({ path: '.env.dev' });

// export const getListMovies = (req: Request, res: Response): void => {
//     res.json(getMovies());
// };





export async function getListOfFilms(req: Request, res: Response) {
    try {
        //we use the prisma client, in the cases from the past we were using
        // local databases, therefore we could use what we were doing
        //in Movie.ts (e.g>
        
// export const addMovie = ({ id, title, year, director, description, imageUrl }: Movie) => {
//     const newMovie: Movie = { id, title, year, director, description, imageUrl }
//     movies.push(newMovie);
// };

//         //)

        //we are working with prisma, so we invoke prisma


        const films = await prisma.movie.findMany();
        return res.json({films})
    } catch (error) {
        console.error("Error fetching movies", error);
        throw error;
    } finally {
        res.json({error: "Unexpectedly got here" })
    }
}
  
/**Takes get requests to /movie and uses their search query if any to search the db for a matching entry*/
export async function searchDbForMovie(search: string) {
    try {
        const searchString = search;
        if (typeof searchString !== "string") return {body: {error: "I dont know, the search wasnt a string or something?"}, status:400}
        //get an array of films that have fields which match search query
        const films = await prisma.movie.findMany({
            where: {
                OR: [
                {
                    title: {
                        contains: searchString,
                        mode: 'insensitive'
                    }
                },
                {
                    year: parseInt(searchString) 
                },
                {
                    director: {
                        contains: searchString,
                        mode: 'insensitive'
                    }
                },
                {
                    description: {
                        contains: searchString,
                        mode: 'insensitive'
                    }
                },

                ]
            }
        });
        

        if (films.length > 0) {
            return {body: {movies: films.map(film => film.title)}, status: 200};
        }
        return { error: "Movie not found", status:404 };

    } catch (error) {
        console.error("Error searching for movie", error);
        return { body: {error: "Internal server error"}, status:500 };
    }
}



    


//   // A possible use
//   getListOfFilms().then(films => {
//     console.log(films);
//   }).catch(error => {
//     console.error("Error: ", error);
//   });
  


// export const newMovie: Movie = {
//     id: 1,
//     title: "Stalker",
//     year: 1979,
//     director: "Tarkovsky",
//     description: `The film tells the story of an expedition led by a figure known as the "Stalker" (Alexander Kaidanovsky), who guides his two clients—a melancholic writer (Anatoly Solonitsyn) seeking inspiration, and a professor (Nikolai Grinko) seeking scientific discovery—through a hazardous wasteland to a mysterious restricted site`,
//     imageUrl: `https://en.wikipedia.org/wiki/Stalker_%281979_film%29#/media/File:Stalker_poster.jpg`
// };


// export const addNewMovie = async (req: Request, res: Response): Promise<void> => {
//     const newMovie: Movie = req.body;

//     try {
//         const addedMovie = await prisma.movie.create({
//             data: {
//                 ...newMovie
//             }
//         })

//         res.status(201).json(addedMovie);
//     } catch (error) {
//         res.status(500).json({ error: `Failed to add movie` });
//     }
// };


// export const findMovieByString = async (req: Request, res: Response): Promise<void> => {
//     // const queryMovie: Movie = req.query;
//     // const searchInput: string = searchString
//     const searchString: string = (req.query.search as string);

//     try {
//         // Fetch all movies from the database
//         const movies = await prisma.movie.findMany();

//         // Find the movie title by the search string
//         const movieTitle = findMovieTitleByString(movies, searchString);

//         if (movieTitle) {
//             res.json({ title: movieTitle });
//         } else {
//             res.status(404).json({ error: '404: nothing to see here' });
//         }
//     } catch (error) {
//         res.status(500).json({ error: 'Failed to search for movie' });
//     }
// };



// export const addMovieToFavorites = async (req: Request, res: Response): Promise<void> => {

//     const newFavorite: Favorite = req.body;
//     const userFavver: User = req.body;
//     const movieFavved: Movie = req.body;


//     try {
//         const addedFavorite = await addMovieFavorite(movieFavved, userFavver)

//         res.status(201).json(newFavorite);
//     } catch (error) {
//         res.status(500).json({ error: `Failed to add this film to Favorites` })
//     }

// };


// export const getAllFavorites = (req: Request, res: Response): void => {
//     res.json(getFavorites());
// }


// export const getUserListOfFavorites = async (req: Request, res: Response): Promise<void> => {

//     const { userId } = req.body as { userId: number };

//     try {
//         // FETCH FAVORITES
//         const listOfFavorites = await prisma.favorite.findMany({
//             where: {
//                 userId: userId
//             },
//             select: {
//                 movie: {
//                     select: {
//                         title: true,
//                         year: true,
//                         director: true
//                     }
//                 }
//             }
//         });

//         if (listOfFavorites.length > 0) {
//             // MAP THE INFO TO BE DISPLAYED LATER IN FRONT END
//             const formattedFavorites = listOfFavorites.map(favorite => ({
//                 title: favorite.movie.title,
//                 year: favorite.movie.year,
//                 director: favorite.movie.director
//             }));

//             res.json(formattedFavorites);
//         } else {
//             res.status(404).json({ error: 'No favorites found' });
//         }
//     } catch (error) {
//         console.error('Error fetching favorites:', error);
//         res.status(500).json({ error: 'No favorites yet :(' });
//     }
// };
// /*
// The userTagCreation endpoint expects a request body of shape (example)
// {
//     userId: number
//     newTagName: string
// }
// */
// export const userTagCreation = async (req: Request, res: Response): Promise<void> => {

//     //req user and tag information

//     const newTag = req.body.tag;
//     const userTagger = req.body.user;



//     //res


//     try {

//         if (!userTagger || !newTag) {
//             res.status(400).json({error: 'User and tag must be provided'});
//             return;
//         }

//         const tagCreated = await userCreatesATag(userTagger, newTag)

//         res.status(201).json(tagCreated);
//     } catch (error) {
//         res.status(500).json({ error: `Failed to create the tag ${error.message}` })
//     }

// }
// // export const tagAMovieWithATag {
    
// // }



// // export const updateTodoById = (req: Request, res: Response): void => {
// //     const id = parseInt(req.params.id);
// //     const updatedTodo: Todo = req.body;
// //     updateTodo(id, updatedTodo);
// //     res.json(updatedTodo);
// // };

// // export const deleteTodoById = (req: Request, res: Response): void => {
// //     const id = parseInt(req.params.id);
// //     deleteTodo(id);
// //     res.status(204).send();
// // };
