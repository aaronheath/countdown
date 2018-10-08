export interface Countdown {
  when: [number];
  msg: string;
}

export interface Countdowns {
  [path: string]: Countdown;
}

export const dates: Countdowns = {
  // 'la': {when: [2018, 6, 22], msg: 'Los Angeles'},
  // 'ukip': {when: [2018, 8, 3], msg: 'Nigel Farage'},
  // 'wwe': {when: [2018, 9, 6], msg: 'WWE Melbourne'},
  'laraconau': {when: [2018, 9, 17], msg: 'Laracon AU'},
  'settlement': {when: [2018, 10, 2], msg: 'Settlement'},
  'australia': {when: [2018, 10, 11], msg: 'Australia'},
  'wsw-melbourne': {when: [2018, 10, 23], msg: 'WSW Melbourne'},
  'anzac': {when: [2019, 3, 19], msg: 'ANZAC Day'},
  'mormon': {when: [2019, 6, 13], msg: 'Book of Mormon'},
};
