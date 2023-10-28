import client from "../models/Clients.js";

// id: {type: String, required: false},
// name: {type: String, required: true},
// instagram: {type: String, required: true},
// organization: {type: String, required: true},


async function create_client(req, res){
    try{
       let new_client = new client(req.body)

       new_client.save((err)=>{
        if(err){
            res.status(500).send({ message: `${err.message} : Falha ao cadastrar cliente` })
        }
        res.status(200).send(new_client.toJSON())
       })

    }catch(error){

    }
}


export {
    create_client,

}