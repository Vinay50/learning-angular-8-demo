import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Chhole Bhature', 'Recipe is deliciouse',
    'https://images.pexels.com/photos/1227520/pexels-photo-1227520.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'),
    new Recipe('Rajma Chawal', 'Recipe is good',
    'https://images.pexels.com/photos/1227520/pexels-photo-1227520.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'),
    new Recipe('Roti Dal', 'Recipe is very good',
    'https://images.pexels.com/photos/1227520/pexels-photo-1227520.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'),
    new Recipe('Paratha', 'Recipe is fine',
    'https://images.pexels.com/photos/1227520/pexels-photo-1227520.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'),
    new Recipe('Roti Sag', 'Recipe is very very good',
    'https://images.pexels.com/photos/1227520/pexels-photo-1227520.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')

  ];

  constructor() { }

  ngOnInit() {
  }

}
