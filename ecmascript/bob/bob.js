const HAS_UPPER = /[A-Z]+/;
const RESPONSES = {
  ''                        : 'Fine. Be that way!',
  'Speaking'                : 'Whatever.',
  'SpeakingShouting'        : 'Whoa, chill out!',
  'SpeakingQuestion'        : 'Sure.',
  'SpeakingShoutingQuestion': 'Calm down, I know what I\'m doing!',
};

export default class Bob {
  hey(message) {
    const speaking = message.trim() ? 'Speaking' : '';
    const shouting = HAS_UPPER.test(message) && message.toUpperCase() === message
        ? 'Shouting'
        : '';
    const question = message.endsWith('?') ? 'Question' : '';
    const whatsHappening = `${speaking}${shouting}${question}`;

    return RESPONSES[whatsHappening];
  }
}
