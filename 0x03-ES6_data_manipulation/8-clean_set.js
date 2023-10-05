export default function cleanSet(set: Set<string>, startString: string): string {
  // Validate set and startString
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }

  let result = '';

  for (const value of set) {
    if (typeof value === 'string' && value.startsWith(startString)) {
      const valueSubStr = value.substring(startString.length);

      // Only add to the result if the value after removing the prefix is non-empty and different from the original value
      if (valueSubStr && valueSubStr !== value) {
        if (result) {
          result += '-';
        }
        result += valueSubStr;
      }
    }
  }

  return result;
}
