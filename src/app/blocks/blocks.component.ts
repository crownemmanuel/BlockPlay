import { Component, OnInit ,Input} from '@angular/core';
import {PopoverModule} from "ngx-popover";

@Component({
  selector: 'app-blocks',
  templateUrl: './blocks.component.html',
  styleUrls: ['./blocks.component.scss']
})
export class BlocksComponent implements OnInit {
  
   currentBlock =0;
  @Input() blockchain;
  @Input() chain;
  @Input() modalAction ;


  constructor() {
  }

  ngOnInit() {
   // this.currentBlock = this.blockchain;
  }

  SetCurrentBlock(index) {
   this.currentBlock =index;
  }
  SetModalAction(action) {
    this.modalAction=action;
  }
  BlockChange(index){
   this.chain.isChainValid();
   //this.blockchain[index].hash =this.blockchain[index].calculateHash();
  }

}
