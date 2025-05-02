import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{
  @Input()
  gameCover:string = ""
  @Input()
  gameLabel:string=""
  @Input()
  gameType: string = "Digital ps4"
  @Input()
  gamePrice:string = "120,00"

  constructor(){}
  
  ngOnInit(): void{

  }

}
