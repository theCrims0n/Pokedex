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
exports.putPokemon = exports.postPokemon = exports.getPokemonByLimitAndtOffset = exports.getPokemonByName = exports.getPokemon = void 0;
const axios_1 = __importDefault(require("axios"));
const hostname = 'https://pokeapi.co/api/v2/pokemon';
const getPokemon = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield axios_1.default.get(`${hostname}`);
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Credentials", "true");
        res.setHeader("Access-Control-Max-Age", "1800");
        res.setHeader("Access-Control-Allow-Headers", "content-type");
        res.setHeader("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS");
        res.json({
            body: result.data
        });
    }
    catch (error) {
        res.json({ error: error });
    }
});
exports.getPokemon = getPokemon;
const getPokemonByName = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name } = req.params;
        const result = yield axios_1.default.get(`${hostname + '/' + name}`);
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Credentials", "true");
        res.setHeader("Access-Control-Max-Age", "1800");
        res.setHeader("Access-Control-Allow-Headers", "content-type");
        res.setHeader("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS");
        res.json({
            body: result.data
        });
    }
    catch (error) {
        res.json({ error: error });
    }
});
exports.getPokemonByName = getPokemonByName;
const getPokemonByLimitAndtOffset = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { limit, offset } = req.params;
        const result = yield axios_1.default.get(`${hostname + '?limit=' + limit + '&offset=' + offset}`);
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Credentials", "true");
        res.setHeader("Access-Control-Max-Age", "1800");
        res.setHeader("Access-Control-Allow-Headers", "content-type");
        res.setHeader("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS");
        res.json({
            body: result.data
        });
    }
    catch (error) {
        res.json({ error: error });
    }
});
exports.getPokemonByLimitAndtOffset = getPokemonByLimitAndtOffset;
const postPokemon = (req, res) => {
    const { body } = req;
    res.json({
        msge: 'postPokemon'
    });
};
exports.postPokemon = postPokemon;
const putPokemon = (req, res) => {
    const { id } = req.params;
    const { body } = req;
    res.json({
        msge: 'putPokemon'
    });
};
exports.putPokemon = putPokemon;
//# sourceMappingURL=pokemon.js.map