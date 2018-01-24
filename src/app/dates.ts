export interface Countdown {
  when: [number];
  msg: string;
}

export interface Countdowns {
  [path: string]: Countdown;
}

export const dates: Countdowns = {
  perth: {when: [2018, 1, 10], msg: 'UFC Perth'},
  njpwadl: {when: [2018, 1, 16], msg: 'NJPW Adelaide'},
  njpwmel: {when: [2018, 1, 17], msg: 'NJPW Melbourne'},
  wsw: {when: [2018, 2, 18], msg: 'World Series Wrestling'},
  anzac: {when: [2018, 3, 25], msg: 'ANZAC Day'},
  // r15: {when: [2018, 6, 1], msg: 'Round 15 v NM'},
  hoh: {when: [2018, 6, 12], msg: 'House of Hardcore'},
  la: {when: [2018, 6, 22], msg: 'Los Angeles'},
  laraconau: {when: [2018, 9, 17], msg: 'Laracon AU'},
  australia: {when: [2018, 10, 11], msg: 'Australia'},
};
