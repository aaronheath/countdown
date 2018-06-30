export interface Countdown {
  when: [number];
  msg: string;
}

export interface Countdowns {
  [path: string]: Countdown;
}

export const dates: Countdowns = {
  'la': {when: [2018, 6, 22], msg: 'Los Angeles'},
  'ukip': {when: [2018, 8, 3], msg: 'Nigel Farage'},
  'wwe': {when: [2018, 9, 6], msg: 'WWE Melbourne'},
  'laraconau': {when: [2018, 9, 17], msg: 'Laracon AU'},
  'australia': {when: [2018, 10, 11], msg: 'Australia'},
};
