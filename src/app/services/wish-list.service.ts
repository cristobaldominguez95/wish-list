import { Injectable } from '@angular/core';
import { List } from '../classes/lists';

@Injectable()
export class WishListService {

  constructor() { }
  
  getLists(): List[] {
    let jsonList = localStorage.getItem('lists');
    return JSON.parse(jsonList);
  }

  getPendingLists(): List[] {
    let lists: List[] = this.getLists();
    if (lists != null) {
      return lists.filter(list => !list.finish);
    }
    return [];
  }

  getFinishedLists(): List[] {
    let lists: List[] = this.getLists();
    if (lists != null) {
      return lists.filter(list => list.finish);
    }
    return [];
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
    let isFinished = this.getLists()[index].finish;
    return isFinished ? this.getFinishedLists()[index] : this.getPendingLists()[index];
  }

  updateList(index: number, newList: List): void {
    if (index < 0) {
      return;
    }
    let isFinished = this.getLists()[index].finish;
    let lists: List[];
    if (isFinished) {
      lists = this.getFinishedLists();
    } else {
      lists = this.getPendingLists();
    }
    lists[index] = newList;
    localStorage.setItem('lists', JSON.stringify(lists));
  }

  removeList(index: number): void {
    let isFinished = this.getLists()[index].finish;
    let lists: List[];
    if (isFinished) {
      lists = this.getFinishedLists();
    } else {
      lists = this.getPendingLists();
    }
    lists.splice(index, 1);
    localStorage.setItem('lists', JSON.stringify(lists));
  }

}