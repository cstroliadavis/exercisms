export function arrToObject(list, valueAsKey = true){
  return list.reduce((acc, value, index) => {
      if(valueAsKey){
        acc[value] = index;
      }
      else {
        acc[index] = value;
      }
      return acc;
    }, {});
}

export function loopShift(min, max, index, amount = 0){
  let newIndex = index + amount;
  let shift = max - min + 1;
  while (newIndex < min){
    newIndex += shift;
  }
  while (newIndex > max){
    newIndex -= shift;
  }
  newIndex += min;
  return newIndex;
}

export function makeLoopShifter(min, max){
  return (index, amount) => loopShift(min, max, index, amount);
}

export function charMapper(text, mapper){
  return [...text].map(mapper).join('');
}

export function randomInt(size){
  return Math.floor(Math.random() * size);
}