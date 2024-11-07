"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pokemon_1 = require("../controller/pokemon");
const router = (0, express_1.Router)();
router.get('/', pokemon_1.getPokemon);
router.get('/:name', pokemon_1.getPokemonByName);
router.get('/:limit/:offset', pokemon_1.getPokemonByLimitAndtOffset);
exports.default = router;
//# sourceMappingURL=pokemon.js.map