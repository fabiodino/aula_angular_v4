import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output()
  startGameEvent = new EventEmitter<number>();
  counter = 0;
  id: any;

  constructor() { }

  ngOnInit() {
  }

  startGame() {
    this.id = setInterval(() => {
      this.startGameEvent.emit(this.counter++);
    }, 1000);
  }

  stopGame() {
    clearInterval(this.id);
  }

}
