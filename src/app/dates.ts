export interface Countdown {
  when: [number];
  msg: string;
}

export interface Countdowns {
  [path: string]: Countdown;
}

export const dates: Countdowns = {
  'settlement': {when: [2018, 10, 2], msg: 'Settlement'},
  'australia': {when: [2018, 10, 11], msg: 'Australia'},
  'wsw-melbourne': {when: [2018, 10, 23], msg: 'WSW Melbourne'},
  'ufc-adelaide': {when: [2018, 11, 2], msg: 'UFC'},
  'anzac': {when: [2019, 3, 19], msg: 'ANZAC Day'},
  'mormon': {when: [2019, 6, 13], msg: 'Book of Mormon'},
};
