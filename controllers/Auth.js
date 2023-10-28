import user from "../models/User.js";
import dotenv from 'dotenv'
import jwt from "jsonwebtoken";

dotenv.config()

const SECRET = process.env.SECRET ;

async function make_login(req, res) {
    try {
        const {login, password} = req.body

        if (!login || !password) {
            return res.status(500).json({
                statusCode: 500,
                message: "Por favor, preencha o login e a senha"
            });
        }

        const foundUser = await user.findOne({ login: login, password: password }, { expiresIn: '1d' });

        if (!foundUser) {
            return res.status(401).send({ message: 'Login inválido' });
        }
      
        const token_user = jwt.sign({ login: login }, SECRET);

        res.status(200).send({ token: token_user });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            statusCode: 500,
            message: error.message
        });
    }
}

function tokenValidation(req, res, next){
    const tokeHeader =  req.headers["authorization"];
    const token = tokeHeader && tokeHeader.split(" ")[1];

    console.log(token)
 
    

    if(!token){
        res.status(401).json({
            statusCode:401,
            message: "Não autorizado"
        })
    }
    try{
        jwt.verify(token, SECRET)
        console.log(jwt.verify(token, SECRET))
        next();
    } catch{
        res.status(401).json({
            statusCode:401,
            message: "Token inválido."
        }) 
    }
}


export {
     make_login ,
     tokenValidation
}