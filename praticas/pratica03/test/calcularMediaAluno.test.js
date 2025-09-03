const { calcularMediaAluno } = require ('../src/calcularMediaAluno');

test("O test ta funcionando? " , function(){
    expect(calcularMediaAluno).toBeDefined()
});

test(" a1 e a2 estão indefinidos?" , function(){
    expect(calcularMediaAluno).toBeDefined()
    expect(() => calcularMediaAluno(undefined,2,3)).toThrow("Notas a1 ou a2 não informadas")
    expect(() => calcularMediaAluno(1,undefined,3)).toThrow("Notas a1 ou a2 não informadas")
});
test(" a1 e a2 são negativos? " , function(){
    expect(calcularMediaAluno).toBeDefined()
    expect(() => calcularMediaAluno(-1,2,3)).toThrow("Notas a1 ou a2 não podem ser negativos")
    expect(() => calcularMediaAluno(1,-2,3)).toThrow("Notas a1 ou a2 não podem ser negativos")
});

test("a3 não é informada?" , function(){
    expect(calcularMediaAluno).toBeDefined()
    expect(calcularMediaAluno(6,9,undefined)).toBeCloseTo(3.9)


});

test(" a3 é negativo? " , function(){
    expect(calcularMediaAluno).toBeDefined()
    expect(() => calcularMediaAluno(1,2,-3)).toThrow("Notas a3 não pode ser negativo")
});

test(" qual a melhor combinação de a3? " , function(){
    expect(calcularMediaAluno).toBeDefined()
    expect(calcularMediaAluno(10,5,10)).toBeCloseTo(10)
    expect(calcularMediaAluno(5,10,10)).toBeCloseTo(10)
});



