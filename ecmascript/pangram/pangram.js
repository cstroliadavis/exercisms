export default class Pangram {
  constructor(text){
    this.text = text;
  }

  isPangram(){
    return !!this.text && this.text.includes('x');
  }
}