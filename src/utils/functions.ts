export function pxToRem(value: number) {
  return value / 16 + 'rem';
}
export function getRndInteger(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getArrayOfRandomNumbers(min: number, max: number, lengthOfArray: number) {
  let result = [];
  for (let i = 0; i < lengthOfArray; i++) {
    result.push(getRndInteger(min, max))
  }
  return result
}