export interface Countdown {
  when: [number];
  msg: string;
}

export interface Countdowns {
  [path: string]: Countdown;
}

export const dates: Countdowns = {
  'ufc-234': {when: [2019, 1, 10], msg: 'UFC 234'},
  'wsw-adl-19': {when: [2019, 2, 7], msg: 'WSW'},
  'r2': {when: [2019, 2, 30], msg: 'Rnd 2 v STK (Marvel)'},
  'r4': {when: [2019, 3, 13], msg: 'Rnd 4 v BL (MCG)'},
  'anzac-al': {when: [2019, 3, 19], msg: 'ANZAC Annual Leave'},
  'anzac': {when: [2019, 3, 25], msg: 'ANZAC Day'},
  'r9': {when: [2019, 4, 18], msg: 'Rnd 9 v FRE (Marvel)'},
  'r11': {when: [2019, 5, 2], msg: 'Rnd 11 v CAR (MCG)'},
  'r13': {when: [2019, 5, 14], msg: 'Rnd 13 v HAW (Marvel)'},
  'r15': {when: [2019, 5, 27], msg: 'Rnd 15 v GWS (Marvel)'},
  'r16': {when: [2019, 6, 6], msg: 'Rnd 16 v SYD (MCG)'},
  'mormon': {when: [2019, 6, 13], msg: 'Book of Mormon'},
  'r18': {when: [2019, 6, 19], msg: 'Rnd 18 v ADL (AO)'},
  'r20': {when: [2019, 7, 3], msg: 'Rnd 20 v PA (Marvel)'},
  'r21': {when: [2019, 7, 10], msg: 'Rnd 21 v WB (Marvel)'},
};
