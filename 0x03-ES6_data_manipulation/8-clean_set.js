function cleanSet(set, startString) {
  if (startString === '' || typeof startString !== 'string') {
    return '';
  }

  let result = '';

  for (let item of set) {
    if (item.startsWith(startString)) {
      if (result.length !== 0) {
        result += '-';
      }
      result += item.replace(startString, '');
    }
  }

  return result;
}

export default cleanSet;
