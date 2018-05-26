export interface Countdown {
  when: [number];
  msg: string;
}

export interface Countdowns {
  [path: string]: Countdown;
}

export const dates: Countdowns = {
  'njpw': {when: [2018, 5, 9], msg: 'Dominion, UFC 225 & Canadian GP'},
  'wsw-june': {when: [2018, 5, 24], msg: 'World Series Wrestling'},
  'r15': {when: [2018, 5, 30], msg: 'Round 15 v NM'},
  'hoh': {when: [2018, 6, 12], msg: 'House of Hardcore'},
  'la': {when: [2018, 6, 22], msg: 'Los Angeles'},
  'laraconau': {when: [2018, 9, 17], msg: 'Laracon AU'},
  'australia': {when: [2018, 10, 11], msg: 'Australia'},
};
