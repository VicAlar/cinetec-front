import {Component, OnInit} from '@angular/core';
import {SidebarService} from "../providers/sidebar.service";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent implements OnInit {
  constructor(public sidebarService: SidebarService) {
  }

  ngOnInit(): void {

  }
}
