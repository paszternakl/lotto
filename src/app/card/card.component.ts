import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Card } from '../model/card.model';
import { CardBoard } from '../model/cardBoard.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() cardBoard!: CardBoard;
  @Output() clicked = new EventEmitter<Card>();
  @Output() cardIdEmitterForRandomGenerate = new EventEmitter<number>();
  @Output() cardIdEmitterForDelete = new EventEmitter<number>();
  cardId!: number;

  ngOnInit(): void {
    this.cardId = this.cardBoard.card[0].cardId;
  }

  clickedTile(card: Card) {
    this.clicked.emit(card)
  }

  randomNumberGenerate() {
    this.cardIdEmitterForRandomGenerate.emit(this.cardId);
  }

  deleteNumbers() {
    this.cardIdEmitterForDelete.emit(this.cardId); 
  }

}
