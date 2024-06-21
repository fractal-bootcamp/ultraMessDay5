"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userTagsAMovie = exports.userCreatesATag = exports.getMovieTags = exports.getUserFavorites = exports.addMovieFavorite = exports.getFavorites = exports.addMovie = exports.youGetListOfFilms = void 0;
exports.findMovieTitleByString = findMovieTitleByString;
const client_1 = require("@prisma/client");
const moviesController_1 = require("../controllers/moviesController");
const prisma = new client_1.PrismaClient();
let movies;
let favorites;
let user;
const youGetListOfFilms = () => {
    const listOfFilms = (0, moviesController_1.getListOfFilms)();
    return listOfFilms;
};
exports.youGetListOfFilms = youGetListOfFilms;
const addMovie = ({ id, title, year, director, description, imageUrl }) => {
    const newMovie = { id, title, year, director, description, imageUrl };
    movies.push(newMovie);
};
exports.addMovie = addMovie;
// Function to check if a string is in any element of the array
function findMovieTitleByString(movies, searchString) {
    const lowerCaseSearchString = searchString.toLowerCase();
    for (const movie of movies) {
        if (movie.title.toLowerCase().includes(lowerCaseSearchString) ||
            movie.year.toString().includes(lowerCaseSearchString) ||
            movie.director.toLowerCase().includes(lowerCaseSearchString) ||
            movie.description.toLowerCase().includes(lowerCaseSearchString)) {
            return movie.title;
        }
    }
    return null;
}
const getFavorites = () => favorites;
exports.getFavorites = getFavorites;
const addMovieFavorite = (movie, user) => {
    //get the user's ID
    //get the movie's ID
    //create a new favorite
    //insert user, userId, movie, and movieId in the new favorite
    //push the favorite into the array of Favorites
    const userID = user.id;
    const movieId = movie.id;
    //So a new Favorite establishes the relations only through the ids
    const newFavorite = {
        userId: user.id,
        movieId: movie.id,
    };
    const favoritesArray = (0, exports.getFavorites)();
    favoritesArray.push(newFavorite);
};
exports.addMovieFavorite = addMovieFavorite;
const getUserFavorites = (userId, favorites) => {
    //go to the Favorites array
    //find the Favorite object where the userId is
    //render the favorite list of movie.title
    const list = favorites.find(obj => obj.userId === userId);
    return list;
};
exports.getUserFavorites = getUserFavorites;
const getMovieTags = () => tags;
exports.getMovieTags = getMovieTags;
const userCreatesATag = (userId, newTagName) => {
    const newTag = [];
    const tags = (0, exports.getMovieTags)();
    const newTagCreated = newTag.push(newTagName);
    const newTagInMovieTagsArray = tags.push(newTagCreated);
    return newTagInMovieTagsArray;
};
exports.userCreatesATag = userCreatesATag;
const userTagsAMovie = (user, tag, movie) => {
    //user tags a movie
    //
};
exports.userTagsAMovie = userTagsAMovie;
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
