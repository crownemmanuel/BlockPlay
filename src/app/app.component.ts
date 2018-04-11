import { Component , OnInit } from '@angular/core';
declare var Blockchain: any;
declare var Block: any;
declare var jqSimpleConnect: any;
declare var StringNumber: any;
declare var AppHelper: any;
declare var getFormattedDate: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {
  public blockchain;
  public newchain;
  public indexcount=1;
  public paddingcount=1;
   modalAction='add';
   currentAmount=100;
 
  constructor() { 
    this.newchain= new Blockchain();
    this.blockchain = this.newchain.chain
  }

  ngOnInit() {
    AppHelper.PopOver();
  }
 public ValidIS() {
    console.log(this.newchain.isChainValid());
 }
  public addblock() {
   this.newchain.addBlock(new Block(this.indexcount, getFormattedDate(), { amount: this.currentAmount }));
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
