const conecta  = require("./database");
const readline = require("readline-sync");

async function inserir(nomeTarefa) {
const db = await conecta();
//inserir dentro de uma coleção
const collection = await db.collection('tarefas');
const resultado =  await collection.insertOne({ nome:nomeTarefa ,
    concluida: false
});

console.log("Tarefa criaaada com sucesso meu patrão",resultado);
}
inserir();

async function buscar(nomeTarefa) {
    const db = await conecta();
    const collection = db.collection("tarefas")
    const resultado =  await collection.findOne({nome: nomeTarefa})
    console.log(resultado)
}
buscar();

async function alterar(nomeTarefa,nomeAltrado,concluidaAlterado){
    const db = await conecta();
    const collection = db.collection("tarefas")
    const resultado =  await collection.updateOne({nome: nomeTarefa}, {$set: {nome:nomeAltrado,concluida:concluidaAlterado}})
    console.log(resultado)
}
alterar();

async function remover(nomeTarefa){
    const db = await conecta();
    const collection = db.collection("tarefas")
    const resultado =  await collection.deleteOne({nome: nomeTarefa})
    console.log(resultado)
}
remover();


async function main(){
    while(true){
        console.log("Menu principal")
        console.log("1- Criar Tarefa")
        console.log("2- Buscar  Tarefa")
        console.log("3- Alterar  Tarefa")
        console.log("4- Remover  Tarefa")
        console.log("5- Sair ")
        const opcao = readline.question("Entre com sua opcao: ")
        switch(parseInt(opcao)){
            case 1 : {
                const nome = readline.question("informe o nome da Tarefa :  ");
                await inserir(nome);
                break
            }

            case 2 : {
                const nome = readline.question("informe o nome da Tarefa :  ");
                await buscar(nome);
                break
            }
            case 3 :  {
                const nomeBusca =  readline.question("informe o nome da Tarefa :  ");
                const nome = readline.question("informe outro nome da Tarefa :  ");
                const concluida = readline.question("informe outra situação da Tarefa :  ");
                await alterar(nomeBusca,nome,concluida);

                break
            }
            case 4 :  {
                const nome = readline.question("informe o nome da Tarefa :  ");
                await remover(nome);
                break
            }
            case 5 : process.exit(0)

        }

    }
}

main();