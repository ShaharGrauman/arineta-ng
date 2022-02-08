import { Component, OnInit } from '@angular/core';

interface CountHistory {
  gap:number;
  sign:string;
  millis:number;
  counter:number;
}

@Component({
  selector: 'app-counter-ex',
  templateUrl: './counter-ex.component.3.html',
  styleUrls: ['./counter-ex.component.css']
})
export class CounterExComponent implements OnInit {

  counter:number = 0;
  gaps:number[] = [1, 2, 5, 10, 12, 15, 20];
  selectedGap:number = 1;
  sign:string = '+';
  milliseconds:number = 1000;
  isRunning:boolean = false;
  intervalId:number | undefined;

  countHistory:CountHistory[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  onStart() {
    this.isRunning = !this.isRunning;
    this.startCounting();
  }

  startCounting() {
    if(this.intervalId) clearInterval(this.intervalId);
    if(this.isRunning) {
      this.intervalId = window.setInterval(this.counting.bind(this), this.milliseconds);
    }
  }

  onClear() {
    this.counter = 0;
    this.selectedGap = 1;
    this.sign = '+';
    this.milliseconds = 1000;
    this.isRunning = false;
    if(this.intervalId) clearInterval(this.intervalId);
    this.countHistory = [];
  }

  onSignChange(inputSign:string) {
    this.sign = inputSign;
  }

  setGap(gap:string) {
    this.selectedGap = +gap;
  }

  counting() {
    this.counter += this.selectedGap * (this.sign === '+' ? 1 : -1);
    this.addHistory();
  }


  setMilliseconds(milliseconds:string) {
    this.milliseconds = +milliseconds;
    this.startCounting();
  }

  addHistory() {
    this.countHistory.unshift({gap: this.selectedGap, sign: this.sign, millis: this.milliseconds, counter: this.counter})
  }
}
