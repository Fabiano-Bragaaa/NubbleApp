import { stringUtils } from '../stringsUtils';

test('capitalizeFirstLetter', () => {
  const name = stringUtils.capitalizeFirstLetter('fabiano braga');

  expect(name).toBe('Fabiano Braga');
});
