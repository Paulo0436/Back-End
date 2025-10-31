const supertest = require("supertest");
const app = require('../app');
const Test = require("supertest/lib/test");
const request = supertest(app);
const { novoToken } = require('./usuariosRenovar.test');
let token;


describe("TESTES" , () =>{
    test("GET/produtos  401" , async()=>{
        const response = await request.get('/produtos');
        expect(response.status).toBe(401);
        expect(response.body.msg).toBe("Não Autorizado");
        expect(response.headers['content-type']).toMatch(/json/)
    });
    test('deve retornar 401 e JSON com msg "Token inválido"', async () => {
        const response = await request(app)
          .get('/produtos')
          .set('authorization', '123456789'); 
    
        expect(response.status).toBe(401);
        expect(response.headers['content-type']).toMatch(/json/);
        expect(response.body).toHaveProperty('msg', 'Token inválido');
      });
    test('deve retornar 200 e um JSON contendo a propriedade token', async () => {
    const response = await request(app)
      .post('/usuarios/login')
      .send({
        usuario: 'pades@gmail.com',
        senha: 'abcd1234'
      })
      .set('Accept', 'application/json');

    expect(response.status).toBe(200);
    expect(response.headers['content-type']).toMatch(/json/);
    expect(response.body).toHaveProperty('token');
  });  
  test('deve retornar 200 e conteúdo JSON', async () => {
    const response = await request(app)
      .get('/produtos')
      .set('authorization', token); 
    expect(response.status).toBe(200);
    expect(response.headers['content-type']).toMatch(/json/);
  });
  test('deve retornar 200 e um JSON contendo a propriedade token', async () => {
    const response = await request(app)
      .post('/usuarios/renovar')
      .set('authorization', token);
    expect(response.status).toBe(200);
    expect(response.headers['content-type']).toMatch(/json/);
    expect(response.body).toHaveProperty('token');
  });
  test('deve retornar 200 e conteúdo JSON', async () => {
    const response = await request(app)
      .get('/produtos')
      .set('authorization', novoToken); 

  
    expect(response.status).toBe(200);
    expect(response.headers['content-type']).toMatch(/json/);
  });




});

