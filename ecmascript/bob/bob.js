/* eslint-disable no-unused-vars */
//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export default class Bob {
  hey(message) {
    const isShouting = message.toUpperCase() === message;
    const isQuestion = message.endsWith('?');
    if(isShouting){
      return 'Whoa, chill out!';
    }
    if(isQuestion){
      return 'Sure.';
    }
    return 'Whatever.';
  }
}
