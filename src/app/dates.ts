export interface Countdown {
  when: [number];
  msg: string;
}

export interface Countdowns {
  [path: string]: Countdown;
}

export const dates: Countdowns = {
  'wsw-melbourne': {when: [2018, 10, 23], msg: 'WSW Melbourne'},
  'ufc-adelaide': {when: [2018, 11, 2], msg: 'UFC ADL'},
  'ufc-234': {when: [2019, 1, 10], msg: 'UFC 234'},
  'r2': {when: [2019, 2, 30], msg: 'Rnd 2 v STK (Marvel)'},
  'r4': {when: [2019, 3, 13], msg: 'Rnd 4 v BL (MCG)'},
  'anzac': {when: [2019, 3, 19], msg: 'ANZAC Day'},
  'mormon': {when: [2019, 6, 13], msg: 'Book of Mormon'},
};
