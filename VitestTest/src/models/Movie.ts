









































// import { Movie, Favorite, MovieTag, User } from '@prisma/client';

// import dotenv from 'dotenv';
// dotenv.config({ path: '.env.dev' });

// let movies: Movie[]
// let favorites: Favorite[]


// export const addMovie = ({ id, title, year, director, description, imageUrl }: Movie) => {
//     const newMovie: Movie = { id, title, year, director, description, imageUrl }
//     movies.push(newMovie);
// };


// // Function to check if a string is in any element of the array
// export function findMovieTitleByString(movies: Movie[], searchString: string): string | null {

//     const lowerCaseSearchString = searchString.toLowerCase();


//     for (const movie of movies) {

//         if (
//             movie.title.toLowerCase().includes(lowerCaseSearchString) ||
//             movie.year.toString().includes(lowerCaseSearchString) ||
//             movie.director.toLowerCase().includes(lowerCaseSearchString) ||
//             movie.description.toLowerCase().includes(lowerCaseSearchString)
//         ) {

//             return movie.title;
//         }
//     }


//     return null;
// }

// export const getFavorites = (): Favorite[] => favorites;

// export const addMovieFavorite = (movie: Movie, user: User): void => {

//     //get the user's ID
//     //get the movie's ID
//     //create a new favorite
//     //insert user, userId, movie, and movieId in the new favorite
//     //push the favorite into the array of Favorites
//     const userID = user.id;
//     const movieId = movie.id;

//     //So a new Favorite establishes the relations only through the ids
//     const newFavorite: Favorite = {
//         userId: user.id,
//         movieId: movie.id,
//     }

//     const favoritesArray = getFavorites();
//     favoritesArray.push(newFavorite)
// }


// export const getUserFavorites = (userId: User["id"], favorites: Favorite[]): Favorite | undefined => {

//     //go to the Favorites array
//     //find the Favorite object where the userId is
//     //render the favorite list of movie.title
//     const list = favorites.find(obj => obj.userId === userId);
//     return list;

// };


// export const getMovieTags = (): MovieTag[] => tags;

// export const userCreatesATag = (userId: number, newTagName: string) => {

//     const newTag: any[] = [];
//     const tags: any[] = getMovieTags();

//     const newTagCreated = newTag.push(newTagName);
//     const newTagInMovieTagsArray = tags.push(newTagCreated);
//     return newTagInMovieTagsArray;

// }

// export const userTagsAMovie = (user: User, tag: Tag, movie: Movie): MovieTags | undefined => {

//     //user tags a movie
//     //
// }









// for future rendering

// const renderUserFavorites = () => {
//     // Call getUserFavorites function to get favorites for the userId
//     const userFavorites = getUserFavorites(userIdToFind, favoritesArray);

//     // Get the div where we will render the list
//     const favoritesListDiv = document.getElementById("favoritesList");

//     // Create an unordered list element
//     const ulElement = document.createElement("ul");

//     // Loop through each favorite and create list items for movie titles
//     userFavorites.forEach(favorite => {
//         const liElement = document.createElement("li");
//         liElement.textContent = favorite.movie.title;
//         ulElement.appendChild(liElement);
//     });

//     // Append the unordered list to the div
//     favoritesListDiv.appendChild(ulElement);
// };

// // Call the function to render the list
// renderUserFavorites();


// export const updateMovie = (id: number, updatedMovie: Movie): void => {
//     const index = movies.findIndex(movie => movie.id === id);
//     if (index !== -1) { //the -1 here is a convention in coding for presenting a condition that must exist but it's impossible
//         movies[index] = updatedMovie;
//     }
// }

// export const deleteMovie = (id: number): void => {
//     movies = movies.filter(movie => movie.id !== id);
// }

// Define the Movie interface



