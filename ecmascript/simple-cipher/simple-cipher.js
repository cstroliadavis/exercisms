// The following utility library would likely be created in a separate library
// and imported
// export default const util = {
const util = {
  arrToObject,
  loopShift,
  makeLoopShifter,
  charMapper
};

function arrToObject(list, valueAsKey = true){
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

function loopShift(min, max, index, amount = 0){
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

function makeLoopShifter(min, max){
  return (index, amount) => loopShift(min, max, index, amount);
}

function charMapper(text, mapper){
  return [...text].map(mapper).join('');
}


// This is where the current library would likely begin

// import util from './util';
const VALID_KEY = /^[a-z]+$/;
const NUM_TO_ALPHA = [...'abcdefghijklmnopqrstuvwxyz'];
const ALPHA_TO_NUM = util.arrToObject(NUM_TO_ALPHA);
console.log(ALPHA_TO_NUM);

function alphaShifter(index, amount){
  const max = NUM_TO_ALPHA.length - 1;
  return util.loopShift(0, max, index, amount);
}

function keyCoder(key, keyShifter, encodeMod = true){
  const mod = encodeMod? 1 : -1;
  return (c, i) => {
    const cNum = ALPHA_TO_NUM[c];
    const kNum = ALPHA_TO_NUM[key.charAt(keyShifter(i))] * mod;
    return NUM_TO_ALPHA[alphaShifter(cNum, kNum)];
  }
}

function generateRandomKey(size){
  return util.charMapper(
    ' '.repeat(size),
    () => NUM_TO_ALPHA[Math.floor(Math.random() * NUM_TO_ALPHA.length)]
  );
}

export default class Cipher {
  constructor(key) {
    if(!VALID_KEY.test(key)){
      throw new Error('Bad key');
    }
    this.key = key || generateRandomKey(100);
    this.keyEncoder = keyCoder(this.key, util.makeLoopShifter(0, this.key.length -1));
    this.keyDecoder = keyCoder(this.key, util.makeLoopShifter(0, this.key.length -1), false);
  }

  encode(value) {
    return util.charMapper(value, this.keyEncoder);
  }

  decode(value) {
    return util.charMapper(value, this.keyDecoder);
  }
}
