import { UserService } from './../user/user.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';
describe('O serviço AuthService', () => {
  let service: AuthService;
  let testingController: HttpTestingController;
  let userService: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthService],
      imports: [HttpClientTestingModule]
    })
    service = TestBed.get(AuthService);
    testingController = TestBed.get(HttpTestingController);
    userService = TestBed.get(UserService);
  });

  it('Deve ser instanciado', () => {
    expect(service).toBeTruthy();
  })

  it('Deve validar instancia do HttpTesting', () => {
    expect(testingController).toBeTruthy();
  });

  it('Deve validar a instancia do UserService', () => {
    expect(userService).toBeTruthy();
  })

  it('Deve autenticar o usuário', () => {
    const fakeBody = {
      id: 1,
      nome: 'Alvoro',
      email: 'alvoro@alura.com'
    }

    spyOn(userService, 'setToken').and.returnValue(null);

    service.authenticate('alvoro', '1234').subscribe(res => {
      expect(res.body).toEqual(fakeBody);
      expect(res.headers.get('x-acess-token')).toBe('tokenTeste');
    });
    const request = testingController.expectOne((req) => {
      return req.method === 'POST';
    });

    request.flush(fakeBody, {
      headers: { 'x-acess-token': 'tokenTest' }
    })
  });

});
