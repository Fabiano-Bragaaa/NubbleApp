import {add, Duration, formatISO, sub} from 'date-fns';

import {dateUtils} from '../dateUtils';

const MOCKED_NOW = 1696573824333;

function getDateIso(duration: Duration, op?: 'sub' | 'add') {
  op = op || 'sub';
  const time =
    op === 'sub' ? sub(Date.now(), duration) : add(Date.now(), duration);

  const timeIso = formatISO(time);

  return dateUtils.formatRelative(timeIso);
}
describe('dateUtils', () => {
  describe('formatRelative', () => {
    beforeAll(() => {
      jest.spyOn(Date, 'now').mockImplementation(() => MOCKED_NOW);
    });

    afterAll(() => {
      jest.clearAllMocks();
    });
    it('should be displayed in seconds if less than 1 minute ago', () => {
      expect(getDateIso({seconds: 30})).toBe('30 s');
    });

    it('should be displayed in hours if less than 1 day ago', () => {
      expect(getDateIso({hours: 15})).toBe('15 h');
    });

    it('should be displayed in days if less than 7 day ago', () => {
      expect(getDateIso({days: 5})).toBe('5 d');
    });
    it('should be displayed in weeks if less than 4 weeks ago', () => {
      expect(getDateIso({weeks: 3, hours: 2})).toBe('3 sem');
    });

    it('should be displayed in minutes if less than 1 hour ago', () => {
      expect(getDateIso({minutes: 30})).toBe('30 m');
    });

    it('should be displayed in months if less than 12 months ago', () => {
      expect(getDateIso({months: 10})).toBe('10 mes');
    });
    it('should be displayed in dd/MM/yyyy if more than 12 months ago', () => {
      expect(getDateIso({months: 13})).toBe('06/09/2022');
    });

    it('should be displayed in dd/MM/yyyy if future date', () => {
      expect(getDateIso({days: 13}, 'add')).toBe('19/10/2023');
    });
  });
});
