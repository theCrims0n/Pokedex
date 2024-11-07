import { Router } from "express";
import { getPokemon, getPokemonByLimitAndtOffset, getPokemonByName } from "../controller/pokemon";

const router = Router()

router.get('/', getPokemon)
router.get('/:name', getPokemonByName)
router.get('/:limit/:offset', getPokemonByLimitAndtOffset)

export default router