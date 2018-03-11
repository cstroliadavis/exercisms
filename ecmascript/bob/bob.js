const CONTAINS_LETTERS = /[a-z]+/i;
const RESPONSES = {
  'SpeakingShouting': 'Whoa, chill out!',
  'SpeakingQuestion': 'Sure.',
  'SpeakingShoutingQuestion': 'Calm down, I know what I\'m doing!',
  'Speaking': 'Whatever.',
  '': 'Fine. Be that way!'
};

export default class Bob {
  hey(message) {
    const speaking = message ? 'Speaking' : '';
    const shouting = CONTAINS_LETTERS.test(message)
      && message.toUpperCase() === message
        ? 'Shouting'
        : '';
    const question = message.endsWith('?') ? 'Question' : '';
    const whatsHappening = `${speaking}${shouting}${question}`;
    return RESPONSES[whatsHappening];
  }
}
