import { Component } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-clock',
  standalone: true,
  imports: [CommonModule, DatePipe],
  templateUrl: './clock.html',
  styleUrls: ['./clock.css']
})
export class Clock {
  currentTime = new Date();
  private timer: any;

  ngOnInit() {
    this.timer = setInterval(() => {
      this.currentTime = new Date();
    }, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.timer);
    console.log('Clock stopped');
  }
}
