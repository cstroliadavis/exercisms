const CONTAINS_LETTERS = /[a-z]+/i;
const RESPONSES = {
  'Shouting': 'Whoa, chill out!',
  'Question': 'Sure.',
  'ShoutingQuestion': 'Calm down, I know what I\'m doing!',
  '': 'Whatever.'
};

export default class Bob {
  hey(message) {
    const shouting = CONTAINS_LETTERS.test(message)
      && message.toUpperCase() === message
        ? 'Shouting'
        : '';
    const question = message.endsWith('?') ? 'Question' : '';
    const whatsHappening = `${shouting}${question}`;
    return RESPONSES[whatsHappening];
  }
}
