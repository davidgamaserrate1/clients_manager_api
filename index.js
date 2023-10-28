import app from './app.js';
import db from './config/dbConnect.js';

const port = process.env.API_PORT;;

db.on("error", console.log.bind(console, 'Conection Error :/'))
db.once("open", ()=>{
    console.log('DB Connected')
})
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});