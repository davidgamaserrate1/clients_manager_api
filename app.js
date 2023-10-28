import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import routes from './routes/index.js'

const app = express()


app.use(
    cors({origin:'*'})    
)

app.use(
    bodyParser.json()
)

app.use(
   '/auth', routes.auth   
)
app.use(
    '/clientes', routes.clients
)


export default app