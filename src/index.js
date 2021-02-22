module.exports = function check(str, bracketsConfig) {
  let lastStr = '';
  function bracketsDelete (str) {
  lastStr = str;
    for (brackets of bracketsConfig) {
      str = str.replace(brackets.join(''), '');
    }
  return (lastStr==str)? !str : bracketsDelete(str);
  }
  return bracketsDelete(str);
}
