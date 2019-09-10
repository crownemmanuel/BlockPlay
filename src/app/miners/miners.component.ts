import { Component, OnInit, Input, Pipe, PipeTransform } from "@angular/core";

@Component({
  selector: "app-miners",
  templateUrl: "./miners.component.html",
  styleUrls: ["./miners.component.scss"]
})
export class MinersComponent implements OnInit {
  @Input() miners;
  @Input() mobileMining;
  @Input() Mobileminers;
  @Input() Leader;

  constructor() {}

  ngOnInit() {}

  objectKeys(obj) {
    return Object.keys(obj);
  }
}
