"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userTagCreation = exports.getUserListOfFavorites = exports.getAllFavorites = exports.addMovieToFavorites = exports.findMovieByString = exports.addNewMovie = void 0;
exports.getListOfFilms = getListOfFilms;
const Movie_1 = require("../models/Movie");
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
// export const getListMovies = (req: Request, res: Response): void => {
//     res.json(getMovies());
// };
function getListOfFilms() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const films = yield prisma.movie.findMany();
            return films;
        }
        catch (error) {
            console.error("Error fetching films: ", error);
            throw error;
        }
        finally {
            yield prisma.$disconnect();
        }
    });
}
//   // A possible use
//   getListOfFilms().then(films => {
//     console.log(films);
//   }).catch(error => {
//     console.error("Error: ", error);
//   });
const addNewMovie = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newMovie = req.body;
    try {
        const addedMovie = yield (0, Movie_1.addMovie)(newMovie);
        res.status(201).json(addedMovie);
    }
    catch (error) {
        res.status(500).json({ error: `Failed to add movie` });
    }
});
exports.addNewMovie = addNewMovie;
const findMovieByString = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // const queryMovie: Movie = req.query;
    // const searchInput: string = searchString
    const searchString = req.query.search;
    const prisma = new client_1.PrismaClient();
    try {
        // Fetch all movies from the database
        const movies = yield prisma.movie.findMany();
        // Find the movie title by the search string
        const movieTitle = (0, Movie_1.findMovieTitleByString)(movies, searchString);
        if (movieTitle) {
            res.json({ title: movieTitle });
        }
        else {
            res.status(404).json({ error: '404: nothing to see here' });
        }
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to search for movie' });
    }
});
exports.findMovieByString = findMovieByString;
const addMovieToFavorites = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newFavorite = req.body;
    const userFavver = req.body;
    const movieFavved = req.body;
    try {
        const addedFavorite = yield (0, Movie_1.addMovieFavorite)(movieFavved, userFavver);
        res.status(201).json(newFavorite);
    }
    catch (error) {
        res.status(500).json({ error: `Failed to add this film to Favorites` });
    }
});
exports.addMovieToFavorites = addMovieToFavorites;
const getAllFavorites = (req, res) => {
    res.json((0, Movie_1.getFavorites)());
};
exports.getAllFavorites = getAllFavorites;
const getUserListOfFavorites = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.body;
    try {
        // FETCH FAVORITES
        const listOfFavorites = yield prisma.favorite.findMany({
            where: {
                userId: userId
            },
            select: {
                movie: {
                    select: {
                        title: true,
                        year: true,
                        director: true
                    }
                }
            }
        });
        if (listOfFavorites.length > 0) {
            // MAP THE INFO TO BE DISPLAYED LATER IN FRONT END
            const formattedFavorites = listOfFavorites.map(favorite => ({
                title: favorite.movie.title,
                year: favorite.movie.year,
                director: favorite.movie.director
            }));
            res.json(formattedFavorites);
        }
        else {
            res.status(404).json({ error: 'No favorites found' });
        }
    }
    catch (error) {
        console.error('Error fetching favorites:', error);
        res.status(500).json({ error: 'No favorites yet :(' });
    }
    finally {
        yield prisma.$disconnect();
    }
});
exports.getUserListOfFavorites = getUserListOfFavorites;
/*
The userTagCreation endpoint expects a request body of shape (example)
{
    userId: number
    newTagName: string
}
*/
const userTagCreation = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //req user and tag information
    const newTag = req.body.tag;
    const userTagger = req.body.user;
    //res
    try {
        if (!userTagger || !newTag) {
            res.status(400).json({ error: 'User and tag must be provided' });
            return;
        }
        const tagCreated = yield (0, Movie_1.userCreatesATag)(userTagger, newTag);
        res.status(201).json(tagCreated);
    }
    catch (error) {
        res.status(500).json({ error: `Failed to create the tag ${error.message}` });
    }
});
exports.userTagCreation = userTagCreation;
// export const tagAMovieWithATag {
// }
// export const updateTodoById = (req: Request, res: Response): void => {
//     const id = parseInt(req.params.id);
//     const updatedTodo: Todo = req.body;
//     updateTodo(id, updatedTodo);
//     res.json(updatedTodo);
// };
// export const deleteTodoById = (req: Request, res: Response): void => {
//     const id = parseInt(req.params.id);
//     deleteTodo(id);
//     res.status(204).send();
// };
