import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  visible: boolean = true;

  constructor() { }

  showSidebar() {
    this.visible = !this.visible
  }

}
