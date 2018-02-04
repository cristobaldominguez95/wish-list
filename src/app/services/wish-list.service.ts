import { Injectable } from '@angular/core';
import { ListItem } from '../classes/list-item';
import { List } from '../classes/lists';

@Injectable()
export class WishListService {

  constructor() {
  }
  
  getLists(): List[] {
    let list1 = new List('Compra del supermercado');
    let list2 = new List('Juegos que deseo');
    let list3 = new List('Cosas de la universidad');
    return [list1, list2, list3];    
  }

}