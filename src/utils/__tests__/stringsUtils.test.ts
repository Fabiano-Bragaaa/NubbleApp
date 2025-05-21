import {stringUtils} from '../stringsUtils';

test('capitalizeFirstLetter', () => {
  //escrever o meu teste

  stringUtils.capitalizeFirstLetter('Ana maria'); //Ana Maria
  stringUtils.capitalizeFirstLetter('ANA mArIa'); //Ana Maria

  const nome = stringUtils.capitalizeFirstLetter('ANA Eduarda');

  expect(nome).toBe('Ana Eduarda');
});
