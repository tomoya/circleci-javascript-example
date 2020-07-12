function getTimezoneOffsetInHours() {
  const date = new Date();
  return date.getTimezoneOffset() / 60;
}
module.exports = getTimezoneOffsetInHours;
