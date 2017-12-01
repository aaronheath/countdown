export interface Countdown {
  when: [number];
  msg: string;
}

export interface Countdowns {
  [path: string]: Countdown;
}

export const dates: Countdowns = {
  wk: {when: [2018, 0, 4], msg: 'Wrestle Kingdom'},
  perth: {when: [2018, 1, 10], msg: 'UFC Perth'},
  wsw: {when: [2018, 2, 18], msg: 'WSW'},
  r1: {when: [2018, 2, 23], msg: 'Round 1 v ADL'},
  anzac: {when: [2018, 3, 25], msg: 'ANZAC Day'},
  r15: {when: [2018, 6, 1], msg: 'Round 15 v NM'},
  la: {when: [2018, 6, 22], msg: 'Los Angeles'},
  australia: {when: [2018, 10, 11], msg: 'Australia'},
};
