import express from 'express'
import "reflect-metadata"
import cookieParser from "cookie-parser"
import loadControllers from './helpers/loadControllers.js';
const app = express()
import cors from "cors"
import { getEnv } from 'helpers/env.js';
import swaggerDocs from "./openapi.json"
const port = 3000
import swaggerUi from "swagger-ui-express"
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
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