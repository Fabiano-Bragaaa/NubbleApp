import {stringUtils} from '../stringsUtils';

describe('StringUtils', () => {
  describe('capitalizeFirstLetter', () => {
    it('should capitalize the first letter of each word', () => {
      expect(stringUtils.capitalizeFirstLetter('fabiano braga')).toBe(
        'Fabiano Braga',
      );
      expect(stringUtils.capitalizeFirstLetter('fabiano Braga')).toBe(
        'Fabiano Braga',
      );
      expect(stringUtils.capitalizeFirstLetter('fabiano')).toBe('Fabiano');
      expect(stringUtils.capitalizeFirstLetter('faBianO')).toBe('Fabiano');
    });

    it('should remove leadingtrailing spaces', () => {
      expect(stringUtils.capitalizeFirstLetter(' fabiano')).toBe('Fabiano');
      expect(stringUtils.capitalizeFirstLetter('faBianO ')).toBe('Fabiano');
    });
  });
});
