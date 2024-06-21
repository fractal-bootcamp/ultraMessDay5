
import { describe, it, expect, beforeAll, afterAll, vi } from "vitest";
import { getListOfFilms, searchDbForMovie } from "../controllers/moviesController";
import prisma from "../client";
import dotenv from 'dotenv';
import { Request, Response } from 'express';
import { mockMovies } from "../seed";
import { before } from "node:test";
import superRequest from "supertest"
import router from "../routes/moviesRoutes";
import app from "..";


dotenv.config({ path: '.env.dev' });

// describe("get list of films", () => {
//     beforeAll(async () => {
//         // Connect to the test database
//         await prisma.$connect();
//     });

//     afterAll(async () => {
//         // Disconnect from the test database
//         await prisma.$disconnect();
//     });

//     it("should return the list of films when called", async () => {
//         const req = {} as Request;
//         const res = {
//             json: (data: any) => data
//         } as unknown as Response;

//         // Mock the prisma client method to return mockMovies
//         vi.spyOn(prisma.movie, 'findMany').mockResolvedValue(mockMovies);

//         const result = await getListOfFilms(req, res);
//         expect(result).toEqual({ films: mockMovies });
//     });


//     it("should handle errors properly", async () => {
//         const req = {} as Request;
//         const res = {
//             json: (data: any) => data
//         } as unknown as Response;

//         // Mock the prisma client method to throw an error
//         vi.spyOn(prisma.movie, 'findMany').mockRejectedValue(new Error("Bad data"));

//         try {
//             await getListOfFilms(req, res);
//         } catch (error: any) {
//             expect(error.message).toEqual("Bad data");
//         }
//     });
// });

describe("Post a movies search query", () => {
    beforeAll(async () => {
        // Connect to the test database
        await prisma.$connect();

    });

    afterAll(async () => {
        // Disconnect from the test database
        await prisma.$disconnect();
    });

    // it("should find a movie that matches a valid searched title", async () => {
    //     // const response = await fetch("http://localhost:3000/movies/search?Inception")
    //     const res = await superRequest(app)
    //         .get("/api/movies?search=Inception")
    //         .expect('Content-Type', /json/)
    //         .expect(200)
    //         .expect(response => {
    //             if (!(response.body.movies.length > 0)) throw new Error("reponse.body.movies is length 0?!?!")
    //             if ((response.body.movies[0] === "Inception")) throw new Error("We didnt find Inception!?!")
    //         })
    // });

    it("should receive an error if the movie ist there", async () => {
        const res = await superRequest(app)
            .get('/api/movies?search=Inception')
            .expect('Content-Type', /json/)
            // .expect(404)
            .expect(response => {
                if (!response.body.error) throw new Error("No error on res body (but there is one here)")
            })
    })

    // })
    // it("should find a movie that matches an existing director", ...)
    // it
    //correctly find existing movie title
    //correctly find existing direcotr
    //..
    //return multiple matches for a director search if director is on  multiple movies
})





// describe("add new Movie to the Movie[] array", async () => {

//     const result = await addNewMovie(newMovie);
//     expect(result).toBe("")
// // })

// it("should error when called with bad data", async () => {
//     try {
//         await addNewMovie(newMovie);
//     } catch (error: any) {
//         expect(error.message).toBe(error.message);
//     }

// })