import {
  arrToObject,
  loopShift,
  makeLoopShifter,
  charMapper,
  randomInt,
} from './lib/utility';

const VALID_KEY = /^[a-z]+$/;
const NUM_TO_ALPHA = [...'abcdefghijklmnopqrstuvwxyz'];
const ALPHA_TO_NUM = arrToObject(NUM_TO_ALPHA);

function alphaShifter(index, amount){
  const max = NUM_TO_ALPHA.length - 1;
  return loopShift(0, max, index, amount);
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
  return charMapper(
    ' '.repeat(size),
    () => NUM_TO_ALPHA[randomInt(NUM_TO_ALPHA.length)]
  );
}

export default class Cipher {
  constructor(key) {
    if(!VALID_KEY.test(key)){
      throw new Error('Bad key');
    }
    this.key = key || generateRandomKey(100);
    this.keyEncoder = keyCoder(this.key, makeLoopShifter(0, this.key.length -1));
    this.keyDecoder = keyCoder(this.key, makeLoopShifter(0, this.key.length -1), false);
  }

  encode(value) {
    return charMapper(value, this.keyEncoder);
  }

  decode(value) {
    return charMapper(value, this.keyDecoder);
  }
}
