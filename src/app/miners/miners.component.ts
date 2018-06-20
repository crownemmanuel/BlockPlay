import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-miners',
  templateUrl: './miners.component.html',
  styleUrls: ['./miners.component.scss']
})
export class MinersComponent implements OnInit {
  @Input()  miners;
 
  constructor() { ;
  }

  ngOnInit() {
  }

}
