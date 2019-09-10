import { Component, OnInit } from '@angular/core';
declare var jQuery: any;
@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss']
})
export class LeftMenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  status: boolean = false;
  Toggle(){
      this.status = !this.status;
      jQuery(".miners").toggle("slide");
  }
 ToggleMenu() {
    jQuery('.navbar-nav').toggleClass('slide-in');
    jQuery('.side-body').toggleClass('body-slide-in');
}
}
