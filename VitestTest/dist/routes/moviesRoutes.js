"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
// import { getMovies, addMovie } from '../models/Movie';
// import { findMovieByString } from '../models/Movie'
const moviesController_1 = require("../controllers/moviesController");
const router = (0, express_1.Router)();
router.get('/movies', moviesController_1.getListOfFilms);
router.post('/movies', moviesController_1.addNewMovie);
router.get('/movies?search', moviesController_1.findMovieByString);
router.post('/favorites', moviesController_1.addMovieToFavorites);
router.get('/user/:id/favorites', moviesController_1.getUserListOfFavorites);
router.post('/user/:id/tags', moviesController_1.userTagCreation);
// router.get('/movies/:id', tagAMovieWithATag)
// router.put('/movies/:id', updateMovie);
// router.delete('/movies/:id', deleteMovie);
exports.default = router;
