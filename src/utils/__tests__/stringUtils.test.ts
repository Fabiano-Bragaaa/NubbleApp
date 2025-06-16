import {stringUtils} from '../stringsUtils';

describe('stringUtils', () => {
  describe('capitalizeFirstLetter', () => {
    it('should capitalize the first letter of each word', () => {
      stringUtils.capitalizeFirstLetter('Ana maria');

      expect(stringUtils.capitalizeFirstLetter('Ana maria')).toBe('Ana Maria');
      expect(stringUtils.capitalizeFirstLetter('ana maria')).toBe('Ana Maria');
      expect(stringUtils.capitalizeFirstLetter('anA MariA')).toBe('Ana Maria');
    });

    it('should remove leading/trailing spaces', () => {
      expect(stringUtils.capitalizeFirstLetter(' anA MariA')).toBe('Ana Maria');
      expect(stringUtils.capitalizeFirstLetter('anA MariA ')).toBe('Ana Maria');
    });
  });
});
