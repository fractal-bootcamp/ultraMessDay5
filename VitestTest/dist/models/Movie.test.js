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
const vitest_1 = require("vitest");
const moviesController_1 = require("../controllers/moviesController");
const newMovie = {
    id: 1,
    title: "Stalker",
    year: 1979,
    director: "Tarkovsky",
    description: `The film tells the story of an expedition led by a figure known as the "Stalker" (Alexander Kaidanovsky), who guides his two clients—a melancholic writer (Anatoly Solonitsyn) seeking inspiration, and a professor (Nikolai Grinko) seeking scientific discovery—through a hazardous wasteland to a mysterious restricted site`,
    imageUrl: `https://en.wikipedia.org/wiki/Stalker_%281979_film%29#/media/File:Stalker_poster.jpg`
};
(0, vitest_1.describe)("add new Movie to the Movie[] array", () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield (0, moviesController_1.addNewMovie)(newMovie);
    (0, vitest_1.expect)(result).toBe("");
}));
(0, vitest_1.it)("should error when called with bad data", () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, moviesController_1.addNewMovie)(newMovie);
    }
    catch (error) {
        (0, vitest_1.expect)(error.message).toBe(error.message);
    }
}));
// import { getListOfFilms } from "../controllers/moviesController"
// describe("get list of films", () => {
//     it("should return the list of films when called", async () => {
//         const result = await getListOfFilms();
//         // implement test
//         expect(result).toBe("")
//     })
//     it("should error when called with bad data", async () => {
//         try {
//             await getListOfFilms();
//         } catch (error: any) {
//             expect(error.message).toBe(error.message);
//         }
//     })
// })
