import { Injectable } from '@angular/core';
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

  getList(index: number): List {
    return this.getLists()[index];
  }

  updateList(index: number, newList: List): void {
    if (index < 0) {
      return;
    }
    let lists: List[] = this.getLists();
    lists[index] = newList;
    localStorage.setItem('lists', JSON.stringify(lists));
  }

  removeList(index: number): void {
    let lists: List[] = this.getLists();
    lists.splice(index, 1);
    localStorage.setItem('lists', JSON.stringify(lists));
  }

  isFinished(index: number): boolean {
    let list: List = this.getLists()[index];
    let isFinished = true;
    for (let item of list.items) {
      if (!item.finish) {
        isFinished = false;
        break;
      }
    }
    console.log(isFinished);
    return isFinished;
  }

}