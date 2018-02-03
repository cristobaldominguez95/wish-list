import { Component } from '@angular/core';

import { PendingPage } from '../pending/pending';
import { FinishPage } from '../finish/finish';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = PendingPage;
  tab2Root = FinishPage;

  constructor() {

  }
}
