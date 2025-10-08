// obj cliente do mongodb
const{ MongoClient } = require("mongodb");

// string de conexão
const url = "mongodb+srv://usrTarefas:gato12345@cluster0.zrxu9wg.mongodb.net/";

const client = new MongoClient(url);



async function conecta() {
    
    try{
      await client.connect();
      return client.db("agenda");    
    }catch(e){
       console.log("Erro ao conectar ao MongoDB", e.menssage);
    }
}

module.exports = conecta;