import {stringUtils} from '../stringsUtils';

describe('stringsUtils', () => {
  describe('capitalizeFirstLetter', () => {
    test('should capitalize the first letter of each word', () => {
      //escrever o meu teste

      stringUtils.capitalizeFirstLetter('Ana maria'); //Ana Maria
      stringUtils.capitalizeFirstLetter('ANA mArIa'); //Ana Maria

      expect(stringUtils.capitalizeFirstLetter('ANA Maria')).toBe('Ana Maria');

      expect(stringUtils.capitalizeFirstLetter('ANA MARIA')).toBe('Ana Maria');

      expect(stringUtils.capitalizeFirstLetter('maria')).toBe('Maria');

      expect(stringUtils.capitalizeFirstLetter('MARIA')).toBe('Maria');
    });

    it('should remove leadingtrailing spaces', () => {
      expect(stringUtils.capitalizeFirstLetter('ANA Maria ')).toBe('Ana Maria');
      expect(stringUtils.capitalizeFirstLetter(' MARIA')).toBe('Maria');
    });
  });
});
