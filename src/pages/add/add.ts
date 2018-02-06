import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { WishListService } from '../../app/services/wish-list.service';
import { List } from '../../app/classes/lists';
import { ListItem } from '../../app/classes/list-item';

@Component({
  selector: 'page-add',
  templateUrl: 'add.html'
})
export class AddPage {

  listName: string = '';
  itemName: string = '';
  items: ListItem[] = [];

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, private wishListService: WishListService) {
  }

  addItem(): void {
    if (this.itemName.trim().length == 0) {
      return;
    }
    let item = new ListItem(this.itemName);
    this.items.push(item);
    this.itemName = '';
  }

  removeItem(index: number): void {
    this.items.splice(index, 1);
  }

  addList(): void {
    if (this.listName.trim().length == 0) {
      let alert = this.alertCtrl.create({
        title: 'No list name',
        subTitle: 'List name cannot be empty',
        buttons: ['OK']
      });
      alert.present();
      return;
    }
    let list = new List(this.listName);
    list.items = this.items;
    this.wishListService.addList(list);
    this.navCtrl.pop();
  }

}
