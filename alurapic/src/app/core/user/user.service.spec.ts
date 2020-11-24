import { TokenService } from '../token/token.service';

describe('O serviço token Service', () => {

  let token;

  let service;

  it('Deve ser instanciado', () => {
    const service = new TokenService();
    expect(service).toBeTruthy();
  });

  it('Deve guardar o token', () => {
    service.setToken(token);
    expect(service.hasToken()).toBeTruthy();
    expect(service.getToken()).toBe('testetoken');
  });

  it('deve remover um token', () => {
    service.setToken(token);
    service.removeToken();
    expect(service.hasToken()).toBeFalsy();
    expect(service.getToken()).toBeFalsy();
  });

  afterEach(() => {
    localStorage.clear();
  })

  beforeEach(() => {
    token = 'testetoken';
    service = new TokenService();
  })

});
