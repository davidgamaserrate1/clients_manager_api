import { create_client } from "../controllers/Clients.js";

import express from 'express'

const routerClients = express.Router()

routerClients.post('/adicionar', create_client)


export default routerClients