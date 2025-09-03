function calcularMediaAluno(a1,a2,a3){
    if(a1 === undefined || a2 === undefined) throw Error("Notas a1 ou a2 não informadas");
    if(a1 <= -1 || a2 <= -1 ) throw Error("Notas a1 ou a2 não podem ser negativos");
    if(a3 === undefined ) return(((a1 * 0.4) + (a2 * 0.6))/2);
    if(a3 <= -1 ) throw Error("Notas a3 não pode ser negativo");
    return (Math.max((((a3 * 0.4) + (a2 * 0.6))) ,((a1 * 0.4) + (a3 * 0.6))  ));

    
}
console.log((10 * 0.4) + (10 * 0.6))
module.exports = { calcularMediaAluno };