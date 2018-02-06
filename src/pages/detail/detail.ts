import { Component } from '@angular/core';
import { List } from '../../app/classes/lists';
import { WishListService } from '../../app/services/wish-list.service';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html'
})
export class DetailPage {

  list = {} as List;

  constructor(private wishListService: WishListService, public navParams: NavParams) { }

  ionViewDidLoad(): void {
    this.list = this.wishListService.getList(this.navParams.get('index'));
  }

}
