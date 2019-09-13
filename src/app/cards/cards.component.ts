import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  newCardItem = "";

  todo =  [
    'get to work by 8:30',
    'wrap up with my slides by 1:30',
    'make sure the add function works before standups',
    'Talk to Joel'
  ];
  done = [
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Eat breakfast'
  ];
  inProgress =[
    'Practice on how to talk eloquent',
    'Read eat the frog',
    'trello-like clone'
  ] 

  constructor() { }

  ngOnInit() {
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
        moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    }else {
       transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

  addNewCardItem() {
    if ( this.newCardItem !== "" && this.newCardItem !== undefined){
      this.todo.push(this.newCardItem);
    }
    this.newCardItem = "";
  }
}