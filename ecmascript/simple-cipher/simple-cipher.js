const VALID_KEY = /^[a-z]+$/;

export default class Cipher {
  constructor(key) {
    if(!VALID_KEY.test(key)){
      throw new Error('Bad key');
    }
    this.key = key || 'aaaaaaaaaa';
  }

  encode(value) {
    return value;
  }

  decode(value) {
    return value;
  }
}