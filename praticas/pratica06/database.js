const{ MongoClient } = require("mongodb");

const url = "mongodb+srv://usrPratica:abcd1234@cluster0.zrxu9wg.mongodb.net/";

const client = new MongoClient(url);    

async function conectarDb() {
    
    try{
      await client.connect();
      console.log("teste")
      return client.db("agenda");    
    }catch(e){
       console.log("Erro ao conectar ao MongoDB", e.menssage);
    }
}

module.exports = conectarDb 



