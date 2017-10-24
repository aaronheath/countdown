import { Component, OnInit } from '@angular/core';
import { format } from 'date-fns';
import {ActivatedRoute} from "@angular/router";

export interface Countdown {
  when: [number];
  msg: string;
}

export interface Countdowns {
  [path: string]: Countdown;
}

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent implements OnInit {
  now;
  currentTime;
  countdown;
  daysLeft;
  weeksLeft;
  wrapperClasses;
  when;
  formattedWhen;
  dayOfWeek;
  dayPlural;
  weekPlural;
  links;

  countdowns: Countdowns = {
    sydney: {when: [2017, 10, 18], msg: 'Sydney'},
    pl: {when: [2017, 11, 1], msg: 'Port Lincoln'},
    anzac: {when: [2018, 3, 25], msg: 'ANZAC Day'},
    la: {when: [2018, 6, 22], msg: 'Los Angeles'},
    australia: {when: [2018, 10, 11], msg: 'Australia'},
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.setLinks();

    this.refreshNow();
    this.refreshCurrentTime();

    setInterval(() => {
      this.refreshNow();
      this.refreshCurrentTime();

      this.daysLeft = this.daysUntil(this.when);
      this.weeksLeft = Math.floor(this.daysLeft / 7);
    }, 1000);

    this.route.params.subscribe((data) => {
      this.wrapperClasses = `countdown ${data.countdown}`;
      this.countdown = this.countdowns[data.countdown];
      this.setWhen();
      this.daysLeft = this.daysUntil(this.when);
      this.dayPlural = 1 === Math.abs(this.daysLeft) ? 'day' : 'days';
      this.weeksLeft = Math.floor(this.daysLeft / 7);
      this.weekPlural = 1 === Math.abs(this.weeksLeft) ? 'week' : 'weeks';
    });
  }

  refreshNow() {
    this.now = new Date();
  }

  refreshCurrentTime() {
    this.currentTime = format(this.now, 'YYYY-MM-DD HH:mm:ss');
  }

  daysUntil(when) {
    const diff = when.getTime() - this.now.getTime();

    if(!diff) {
      return 0;
    }

    return Math.ceil((when.getTime() - this.now.getTime()) / (1000 * 3600 * 24));
  }

  setWhen() {
    const year = this.countdown.when[0] ? this.countdown.when[0] : undefined;
    const month = this.countdown.when[1] ? this.countdown.when[1] : undefined;
    const day = this.countdown.when[2] ? this.countdown.when[2] : undefined;
    const hour = this.countdown.when[3] ? this.countdown.when[3] : 23;
    const min = this.countdown.when[4] ? this.countdown.when[4] : 59;
    const sec = this.countdown.when[5] ? this.countdown.when[5] : 59;

    this.when = new Date(year, month, day, hour, min, sec);
    this.formattedWhen = format(this.when, 'D MMM YYYY');
    this.dayOfWeek = format(this.when, 'dddd');
  }

  setLinks() {
    this.links = Object.keys(this.countdowns).map((key) => {
      return {key, text: this.countdowns[key].msg};
    })
  }
}
