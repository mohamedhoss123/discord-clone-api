import express from 'express'
import "reflect-metadata"
import cookieParser from "cookie-parser"
import loadControllers from './helpers/loadControllers.js';
const app = express()
import cors from "cors"
import { getEnv } from 'helpers/env.js';
const port = 3000


app.use(cors({credentials:true,allowedHeaders:getEnv("FRONTEND_URL")}))
app.use(cookieParser())
app.use(express.json())


async function bootstrap() {
    await loadControllers(app)
    app.listen(port, () => {
        console.log(`localhost:${port}`)
    })
}
bootstrap()