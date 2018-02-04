import { ListItem } from './list-item';

export class List {

  name: string;
  finish: boolean;
  items: ListItem[];

  constructor(name: string) {
    this.name = name;
    this.finish = false;
  }

}
