import { Component } from '@angular/core';

interface Person {
  name      : string
  favorites : Favorite[]
}

interface Favorite {
  id  : number,
  name: string
}

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.css']
})
export class DynamicComponent {

  newGame:string = '';

  person: Person = {
    name: 'Kevin',
    favorites: [
      {
        id: 1,
        name: 'Metal Gear'
      },
      {
        id: 2,
        name: 'Mario Bros'
      },
      {
        id: 3,
        name: 'Fifa 2021'
      }
    ]
  }

  save() {
    console.log('Form print');
  }

  addNewGame(){
    const newGame: Favorite = {
      id: this.person.favorites.length + 1,
      name: this.newGame
    }

    this.person.favorites.push( {...newGame} );
    this.newGame = '';
  }

  deleteFavorite( itemIndex: number ) {
    this.person.favorites.splice(itemIndex, 1);
  }

}
