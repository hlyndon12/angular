import { Component, OnInit } from '@angular/core';
import animals from 'src/assets/animals.json';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  animals = animals
  constructor() { }

  ngOnInit(): void {
  }

}
