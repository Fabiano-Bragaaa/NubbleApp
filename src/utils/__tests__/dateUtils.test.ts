import {formatISO, sub} from 'date-fns';

import {dateUtils} from '../dateUtils';

const MOCKED_NOW = 1696573824333;
describe('dateUtils', () => {
  describe('formatRelative', () => {
    beforeAll(() => {
      jest.spyOn(Date, 'now').mockImplementation(() => MOCKED_NOW);
    });

    afterAll(() => {
      jest.clearAllMocks();
    });
    it('should be displayed in seconds if less than 1 minute ago', () => {
      const time = sub(Date.now(), {seconds: 30});

      const timeIso = formatISO(time);

      expect(dateUtils.formatRelative(timeIso)).toBe('30 s');
    });

    it('another test', () => {
      const time = sub(Date.now(), {seconds: 30});

      const timeIso = formatISO(time);

      expect(dateUtils.formatRelative(timeIso)).toBe('30 s');
    });
  });
});
