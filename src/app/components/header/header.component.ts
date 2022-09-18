import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../providers/api.service";
import {SidebarService} from "../../providers/sidebar.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  usuario: any;

  constructor(private api: ApiService, public  sidebarService: SidebarService) {}

  ngOnInit(): void {
    this.api.getUser().subscribe((data: any) => {
      this.usuario = data
    })
  }
}
