export function pxToRem(value: number) {
  return value / 16 + 'rem';
}
export function getRndInteger(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getArrayOfRandomNumbers(min: number, max: number, lengthOfArray: number) {
  let result: number[] = [];
  for (let i = 0; i < lengthOfArray; i++) {
    result.push(getRndInteger(min, max))
  }
  return result
}

export function getArrayOfDistinctRandomNumbers(min: number, max: number, lengthOfArray: number) {
  let result: number[] = [];
  let quantSorteada = 0;
  while (quantSorteada < lengthOfArray) {
    let randomNumber = getRndInteger(min, max)
    if (!result.includes(randomNumber)) {
      result.push(randomNumber)
      quantSorteada++
    }
  }
  return result
}