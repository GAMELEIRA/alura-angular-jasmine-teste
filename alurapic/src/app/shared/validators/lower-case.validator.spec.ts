import { isLowerCase } from "./lower-case.validator";

//CASO DE TESTE
describe('A função isLowerCase', () => {
  //DEFINICAO DO TESTE QUE VAMOS FAZER
  it('Deve confirmar quando recebe um texto em caixa baixa', () => {
    const valor = 'mario';
    const resultado = isLowerCase(valor);
    expect(resultado).toBeTruthy(); //AVALIACAO DE RESULTADO
  });

  it('Deve validar quando o valor enviado não for de caixa baixa', () => {
    const valor = "Mario";
    const resultado = isLowerCase(valor);
    expect(resultado).toBeFalsy();
  });

});
