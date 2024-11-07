import axios from "axios"
import { json, Request, Response } from "express"

const hostname = 'https://pokeapi.co/api/v2/pokemon'

export const getPokemon = async (req: Request, res: Response) => {

    try {
        const result = await axios.get(`${hostname}`)

        res.setHeader("Access-Control-Allow-Origin", "*")
        res.setHeader("Access-Control-Allow-Credentials", "true");
        res.setHeader("Access-Control-Max-Age", "1800");
        res.setHeader("Access-Control-Allow-Headers", "content-type");
        res.setHeader("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS")

        res.json({
            body: result.data
        })

    } catch (error) {
        res.json({ error: error })
    }
}

export const getPokemonByName = async (req: Request, res: Response) => {
    try {

        const { name } = req.params

        const result = await axios.get(`${hostname + '/' + name}`)

        res.setHeader("Access-Control-Allow-Origin", "*")
        res.setHeader("Access-Control-Allow-Credentials", "true");
        res.setHeader("Access-Control-Max-Age", "1800");
        res.setHeader("Access-Control-Allow-Headers", "content-type");
        res.setHeader("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS")
        res.json({
            body: result.data
        })
    }
    catch (error) {
        res.json({ error: error })
    }
}

export const getPokemonByLimitAndtOffset = async (req: Request, res: Response) => {
    try {

        const { limit, offset } = req.params

        const result = await axios.get(`${hostname + '?limit=' + limit + '&offset=' + offset}`)

        res.setHeader("Access-Control-Allow-Origin", "*")
        res.setHeader("Access-Control-Allow-Credentials", "true");
        res.setHeader("Access-Control-Max-Age", "1800");
        res.setHeader("Access-Control-Allow-Headers", "content-type");
        res.setHeader("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS")

        res.json({
            body: result.data
        })
    }
    catch (error) {
        res.json({ error: error })
    }
}

export const postPokemon = (req: Request, res: Response) => {

    const { body } = req

    res.json({
        msge: 'postPokemon'
    })

}

export const putPokemon = (req: Request, res: Response) => {

    const { id } = req.params

    const { body } = req

    res.json({
        msge: 'putPokemon'
    })

}