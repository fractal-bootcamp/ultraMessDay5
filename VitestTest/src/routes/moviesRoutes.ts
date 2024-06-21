import { Router } from 'express';
// import { getMovies, addMovie } from '../models/Movie';
// import { findMovieByString } from '../models/Movie'
import { getListOfFilms, searchDbForMovie, addMovieToFavorites, getUserListOfFavorites, tagAMovieWithATag, userTagCreation } from '../controllers/moviesController';
const router = Router();

import dotenv from 'dotenv';
dotenv.config({ path: '.env.dev' });

// app.get('/movies', getListOfFilms);


// app.post('/movies', addNewMovie);


router.get('/movies', async (req, res) => {
    console.log(`received movie search with query ${req.query.search}, querying Prisma....`)
    const resBody = await searchDbForMovie(req.query.search as string)
    console.log(`Processed query, yielded: ${res} with status ${res.status}, sending response`)
    return res.status(resBody.status).json(resBody.body)
})

// app.post('/favorites', addMovieToFavorites)
// app.get('/user/:id/favorites', getUserListOfFavorites)
// app.post('/user/:id/tags', userTagCreation)
// router.get('/movies/:id', tagAMovieWithATag)




// router.put('/movies/:id', updateMovie);
// router.delete('/movies/:id', deleteMovie);

export default router;