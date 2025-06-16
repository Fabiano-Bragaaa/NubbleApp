import { stringUtils } from '../stringsUtils';

test('Caitalize Fist Letter', () => {

  stringUtils.capitalizeFirstLetter('Ana maria');

  expect(stringUtils.capitalizeFirstLetter('Ana maria')).toBe('Ana Maria');
});
