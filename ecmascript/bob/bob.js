const RESPONSES = {
  'Shouting': 'Whoa, chill out!',
  'Question': 'Sure.',
  'ShoutingQuestion': 'Calm down, I know what I\'m doing!',
  '': 'Whatever.'
};

export default class Bob {
  hey(message) {
    let whatsHappening = '';
    whatsHappening += message.toUpperCase() === message ? 'Shouting' : '';
    whatsHappening += message.endsWith('?') ? 'Question' : '';
    return RESPONSES[whatsHappening];
  }
}
