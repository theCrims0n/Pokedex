import express, { Application } from 'express'
import useRoutes from '../routes/pokemon'
import cors from 'cors'

class Server {

    private app: Application;
    private port: string;
    private apiPaths = {
        pokemon: '/api/pokemon'
    }

    constructor() {

        this.app = express()
        this.port = process.env.PORT || '3001'
        this.routes()
        this.middlewares()
    }

    middlewares() {
        this.app.use(cors())
        this.app.use(express.json())
        this.app.use(express.static('public'))
    }

    routes() {
        this.app.use(this.apiPaths.pokemon, useRoutes)
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en el puerto ' + this.port)
        })
    }
}

export default Server