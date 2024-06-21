// "use strict";
// var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
//     function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
//     return new (P || (P = Promise))(function (resolve, reject) {
//         function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
//         function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
//         function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
//         step((generator = generator.apply(thisArg, _arguments || [])).next());
//     });
// };
// var __generator = (this && this.__generator) || function (thisArg, body) {
//     var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
//     return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
//     function verb(n) { return function (v) { return step([n, v]); }; }
//     function step(op) {
//         if (f) throw new TypeError("Generator is already executing.");
//         while (g && (g = 0, op[0] && (_ = 0)), _) try {
//             if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
//             if (y = 0, t) op = [op[0] & 2, t.value];
//             switch (op[0]) {
//                 case 0: case 1: t = op; break;
//                 case 4: _.label++; return { value: op[1], done: false };
//                 case 5: _.label++; y = op[1]; op = [0]; continue;
//                 case 7: op = _.ops.pop(); _.trys.pop(); continue;
//                 default:
//                     if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
//                     if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
//                     if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
//                     if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
//                     if (t[2]) _.ops.pop();
//                     _.trys.pop(); continue;
//             }
//             op = body.call(thisArg, _);
//         } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
//         if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
//     }
// };
// Object.defineProperty(exports, "__esModule", { value: true });
// var client_1 = require("@prisma/client");
// var prisma = new client_1.PrismaClient();
// function main() {
//     return __awaiter(this, void 0, void 0, function () {
//         var movies, array, newMoviesList;
//         return __generator(this, function (_a) {
//             movies = [];
//             array = [{
//                     id: 1,
//                     title: "Stalker",
//                     year: 1979,
//                     director: "Andrei Tarkovsky",
//                     description: "The film tells the story of an expedition led by a figure known as the \"Stalker\" (Alexander Kaidanovsky), who guides his two clients\u2014a melancholic writer (Anatoly Solonitsyn) seeking inspiration, and a professor (Nikolai Grinko) seeking scientific discovery\u2014through a hazardous wasteland to a mysterious restricted site.",
//                     imageUrl: "https://en.wikipedia.org/wiki/Stalker_%281979_film%29#/media/File:Stalker_poster.jpg"
//                 },
//                 {
//                     id: 2,
//                     title: "Inception",
//                     year: 2010,
//                     director: "Christopher Nolan",
//                     description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.",
//                     imageUrl: "https://en.wikipedia.org/wiki/Inception_(film)#/media/File:Inception_(2010)_theatrical_poster.jpg"
//                 },
//                 {
//                     id: 3,
//                     title: "Pulp Fiction",
//                     year: 1994,
//                     director: "Quentin Tarantino",
//                     description: "The lives of two mob hitmen, a boxer, a gangster, and his wife intertwine in four tales of violence and redemption.",
//                     imageUrl: "https://en.wikipedia.org/wiki/Pulp_Fiction#/media/File:Pulp_Fiction_(1994)_theatrical_poster.jpg"
//                 },
//                 {
//                     id: 4,
//                     title: "The Matrix",
//                     year: 1999,
//                     director: "The Wachowskis",
//                     description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
//                     imageUrl: "https://en.wikipedia.org/wiki/The_Matrix#/media/File:The_Matrix_Poster.jpg"
//                 },
//                 {
//                     id: 5,
//                     title: "Parasite",
//                     year: 2019,
//                     director: "Bong Joon-ho",
//                     description: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
//                     imageUrl: "https://en.wikipedia.org/wiki/Parasite_(2019_film)#/media/File:Parasite_(2019_film).jpg"
//                 },
//                 {
//                     id: 6,
//                     title: "The Godfather",
//                     year: 1972,
//                     director: "Francis Ford Coppola",
//                     description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
//                     imageUrl: "https://en.wikipedia.org/wiki/The_Godfather#/media/File:Godfather_ver1.jpg"
//                 },
//                 {
//                     id: 7,
//                     title: "Spirited Away",
//                     year: 2001,
//                     director: "Hayao Miyazaki",
//                     description: "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, where humans are changed into beasts.",
//                     imageUrl: "https://en.wikipedia.org/wiki/Spirited_Away#/media/File:Spirited_Away_poster.JPG"
//                 }];
//             newMoviesList = array.concat(movies);
//             return [2 /*return*/];
//         });
//     });
// }
// main()
//     .catch(function (e) {
//     console.error(e);
//     process.exit(1);
// })
//     .finally(function () { return __awaiter(void 0, void 0, void 0, function () {
//     return __generator(this, function (_a) {
//         switch (_a.label) {
//             case 0: return [4 /*yield*/, prisma.$disconnect()];
//             case 1:
//                 _a.sent();
//                 return [2 /*return*/];
//         }
//     });
// }); });
