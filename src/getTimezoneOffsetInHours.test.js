const getTimezoneOffsetInHours = require('./getTimezoneOffsetInHours');
test('getTimezoneOffsetInHours return -9', () => {
  expect(getTimezoneOffsetInHours()).toBe(-9);
});
