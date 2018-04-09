import { Component, OnInit ,Input} from '@angular/core';
import {PopoverModule} from "ngx-popover";
declare var Blockchain: any;
declare var Block: any;
declare var jqSimpleConnect: any;
declare var StringNumber: any;
declare var AppHelper: any;
@Component({
  selector: 'app-blocks',
  templateUrl: './blocks.component.html',
  styleUrls: ['./blocks.component.scss']
})
export class BlocksComponent implements OnInit {
  public blockchain;
  public newchain;
  public indexcount=1;
  public paddingcount=1;
  public currentData ='test';
  @Input() childMessage: string;
  title = 'app works!';
  //jqSimpleConnect<any>;
  constructor() {

     this.newchain= new Blockchain();
    this.blockchain = this.newchain.chain
   //this.blockchain =[{index:1}]
    console.log("chain...." );
    console.log(this.blockchain );
   // console.log(this.childMessage);
  }

  ngOnInit() {
    console.log("clicked");
    /*this.blockchain.push({index:2})
    jqSimpleConnect.connect("#" + parent + " ", child, {
      radius: 2,
      color: randomColor,
      anchorA: 'vertical',
      anchorB: 'horizontal'
  });*/
  }
  public addblock() {
   // this.blockchain.push({index:2})
   this.newchain.addBlock(new Block(this.indexcount, "20/07/2017", { amount: 8 }));
  var parent =AppHelper.StringNumber("#block-", this.indexcount-1);
  var child =AppHelper.StringNumber("#block-", this.indexcount);
  var self=this;
   setTimeout(function() {
      if( self.paddingcount==7) {
        AppHelper.PadBlock(child);
        self.paddingcount=1;
      }
      let color =AppHelper.getRandomColor();
      AppHelper.ColorBlock(child, color)
          jqSimpleConnect.connect(parent,child,{
            color: color,
            anchorA: 'vertical',
            anchorB: 'horizontal'
          });
          AppHelper.PopOver();
      //End Settimeout
    }, 30);


   this.indexcount+=1;
   this.paddingcount+=1;

}

}
