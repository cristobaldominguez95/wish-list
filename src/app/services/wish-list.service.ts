import { Injectable } from '@angular/core';
import { ListItem } from '../classes/list-item';
import { List } from '../classes/lists';

@Injectable()
export class WishListService {

  constructor() { }
  
  getLists(): List[] {
    let jsonList = localStorage.getItem('lists');
    return JSON.parse(jsonList);
  }

  addList(list: List): void {
    if (localStorage.getItem('lists') === null) {
      let lists: List[] = [];
      lists.push(list);
      localStorage.setItem('lists', JSON.stringify(lists));
    } else {
      let jsonLists = localStorage.getItem('lists');
      let lists = JSON.parse(jsonLists);
      lists.push(list);
      localStorage.setItem('lists', JSON.stringify(lists));
    }
  }

}