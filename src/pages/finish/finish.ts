import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WishListService } from '../../app/services/wish-list.service';
import { List } from '../../app/classes/lists';
import { AddPage } from '../add/add';
import { DetailPage } from '../detail/detail';

@Component({
  selector: 'page-finish',
  templateUrl: 'finish.html'
})
export class FinishPage {

  lists: List[];

  constructor(public navCtrl: NavController, private wishListService: WishListService) { }
  
  ionViewDidEnter(): void {
    this.lists = this.wishListService.getFinishedLists();
  }

  goToAddPage(): void {
    this.navCtrl.push(AddPage);
  }

  seeDetails(index: number): void {
    this.navCtrl.push(DetailPage, { index });
  }

}
