import { ListItem } from './list-item';

export class List {

  name: string;
  finish: boolean;
  items: ListItem[];

  constructor(name: string) {
    this.name = name;
    this.finish = false;
  }

  isFinished(): boolean {
    for (let item of this.items) {
      if (!item.finish) {
        return false;
      }
    }
    return true;
  }

}
