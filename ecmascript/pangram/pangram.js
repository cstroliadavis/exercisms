const HAS_LETTERS = [...'abcdefghijklmnopqrstuvwxyz'];

export default class Pangram {
  constructor(text){
    this.text = text;
  }

  isPangram(){
    return !!this.text &&
      HAS_LETTERS
        .every(l => this.text.toLowerCase().includes(l));
  }
}