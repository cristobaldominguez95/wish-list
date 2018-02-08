import { Component } from '@angular/core';
import { NavParams, NavController, AlertController } from 'ionic-angular';
import { List } from '../../app/classes/lists';
import { ListItem } from '../../app/classes/list-item';
import { WishListService } from '../../app/services/wish-list.service';

@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html'
})
export class DetailPage {

  list = {} as List;
  index: number;

  constructor(private wishListService: WishListService, public navParams: NavParams, public navCtrl: NavController, public alertCtrl: AlertController) {
    this.index = this.navParams.get('index');
  }

  ionViewDidLoad(): void {
    this.list = this.wishListService.getList(this.index);
  }

  ionViewWillLeave(): void {
    let allFinish = true;
    for (let item of this.list.items) {
      if (!item.finish) {
        allFinish = false;
        break;
      }
    }
    this.list.finish = allFinish;
    this.wishListService.updateList(this.index, this.list);
  }

  changeStatus(item: ListItem): void {
    item.finish = !item.finish;
  }

  removeList(): void {
    let confirm = this.alertCtrl.create({
      title: 'Remove list',
      message: `Are you sure that you want to remove the list '${this.list.name}'?`,
      buttons: [
        {
          text: 'NO',
          handler: () => { }
        },
        {
          text: 'YES',
          handler: () => {
            confirm.present();
            this.wishListService.removeList(this.index);
            this.index = -1;
            this.navCtrl.pop();
          }
        }
      ]
    });
    confirm.present();
  }

}
