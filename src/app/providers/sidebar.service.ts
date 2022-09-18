import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  visible: boolean = false;

  constructor() { }

  showSidebar() {
    this.visible = !this.visible
  }

}
