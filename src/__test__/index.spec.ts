import { sum } from '../index';
describe('basic-test', () => {
  it('should ', () => {
    const FIRST_PARAM = 1;
    const SECOND_PARAM = 3;
    const EXPECTED_RESULT = 4;
    const result = sum(FIRST_PARAM, SECOND_PARAM);
    expect(result).toBe(EXPECTED_RESULT);
  });
});
