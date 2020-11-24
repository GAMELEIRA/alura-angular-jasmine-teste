import { TestBed } from '@angular/core/testing';
import { TokenService } from './token.service';
import { UserService } from 'src/app/core/user/user.service';
describe('Caso de teste para TokenService', () => {

  let service: UserService;
  let tokenService;
  const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6ImZsYXZpbyIsImVtYWlsIjoiZmxhdmlvQGFsdXJhcGljLmNvbS5iciIsImlhdCI6MTYwNjE5MDY3NiwiZXhwIjoxNjA2Mjc3MDc2fQ.oF8K46QhkkTHEC686WeDre9ERE-_sinKKVtCk3d4UBc`;
  it('Válida se foi instanciado corretamente', () => {
    expect(service).toBeTruthy();
  });

  it('Deve atraves de um token, recuperar as informações de um usuário', () => {
    service.setToken(token);
    expect(service.isLogged()).toBeTruthy();
    expect(service.getUserName()).toEqual('flavio');
    service.getUser().subscribe(res => {
      expect(res.name).toBe("flavio");
    });
  });

  it('Deve limpar as informações no logout', () => {
   service.setToken(token);
   service.logout();
   expect(service.isLogged()).toBeFalsy();
   expect(service.getUserName()).toBeFalsy();
  })

  beforeEach(() => {
    //SIMULA A INSTANCIACAO DO SEU COMPONENT
    TestBed.configureTestingModule({
      providers: [UserService]
    })
    service = TestBed.get(UserService);
  });
})
