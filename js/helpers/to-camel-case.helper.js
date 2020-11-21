export const toCamelCase = function (str) {
  if (str === undefined) {
    // eslint-disable-next-line no-console
    console.error('toCamelCase: parameter "str" should be defined!');
    return str;
  }
  if (typeof str !== 'string') {
    // eslint-disable-next-line no-console
    console.error('toCamelCase: parameter "str" should be a string!');
    return str;
  }
  return str
    .replace(/\s(.)/g, $1 => $1.toUpperCase())
    .replace(/\s/g, '')
    .replace(/^(.)/, $1 => $1.toLowerCase());
};
