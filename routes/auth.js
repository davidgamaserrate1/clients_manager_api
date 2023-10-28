import express from 'express'
import {make_login, tokenValidation} from '../controllers/Auth.js'
 

const routerAuth = express.Router()

routerAuth.post('/login', make_login)
routerAuth.post('/teste', tokenValidation)




export default routerAuth