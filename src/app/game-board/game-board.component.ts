import { Component, OnInit } from '@angular/core';
import { Card } from '../model/card.model';
import { CardBoard } from '../model/cardBoard.model';
import { NumberGeneratorService } from '../service/number-generator/number-generator.service';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.scss']
})
export class GameBoardComponent implements OnInit {

  cardCount: number[] = [1, 2, 3, 4];
  lottoCardsArray = [] as CardBoard[];
  selectedCardsArray: number[][] = [];

  constructor(
    private numberGeneratorService: NumberGeneratorService
  ) {
  }

  ngOnInit(): void {
    this.initGamePlay();
  }

  clickTile(selectedCard: Card) {
    const clickedCard = this.lottoCardsArray[selectedCard.cardId - 1].card.find(card => card.id === selectedCard.id);
    clickedCard!.click = !clickedCard?.click
  }

  randomNumberGenerate(cardId: number) {
    this.clearCardBoard(cardId);
    const randomNumberSet = this.initRandomNumberArray(6);
    randomNumberSet.forEach(number => {
      const selectedCard = this.lottoCardsArray[cardId - 1].card.find(card => card.id === number);
      selectedCard!.click = !selectedCard?.click
    })
  }

  clearCardBoard(cardId: number) {
    this.lottoCardsArray[cardId - 1].card.forEach(card => {
      card.click = false;
    });
  }

  calculateResult() {
    this.selectedCardsArray = [];
    this.lottoCardsArray.forEach(cardboard => {
      let selectedCard = [] as Card[];
      selectedCard = cardboard.card.filter(card => card.click === true);
      this.selectedCardsArray.push(selectedCard.map(card => card.id))
    })
  }

  private initRandomNumberArray(number: number) {
    const randomNumberSet = new Set<number>();
    while (randomNumberSet.size < number) {
      randomNumberSet.add(this.numberGeneratorService.generateRandomNumber(1, 49));
    }
    return randomNumberSet;
  }

  private initGamePlay() {
    this.cardCount.forEach(number => {
      const cardBoard = {} as CardBoard;
      const card = [] as Card[];
      for (let index = 1; index < 50; index++) {
        card.push({ id: index, click: false, cardId: number });
      };
      cardBoard.card = card;
      this.lottoCardsArray.push(cardBoard);
    });
  }
}

