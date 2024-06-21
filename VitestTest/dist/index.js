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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const moviesRoutes_1 = __importDefault(require("./routes/moviesRoutes"));
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
// const request = require('supertest');
const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send('Hello, World!');
});
app.use(body_parser_1.default.json());
app.use('/api', moviesRoutes_1.default);
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        // Your Prisma Client operations here
    });
}
main()
    .catch((e) => {
    console.error(e);
    process.exit(1);
})
    .finally(() => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.$disconnect();
}));
// request(app)
//     .get('/movies')
//     .expect('Content-Type', /json/)
//     .expect('Content-Length', '15')
//     .expect(200)
//     .end(function(err, res) {
//         if (err) throw err;
//     });
