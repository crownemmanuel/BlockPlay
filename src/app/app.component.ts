import { Component , OnInit } from '@angular/core';
declare var Blockchain: any;
declare var Block: any;
declare var jqSimpleConnect: any;
declare var StringNumber: any;
declare var Log: any;
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
   difficulty=0;
   modalAction='add';
   currentAmount="";
   miners:any;
 
  constructor() { 
    this.newchain= new Blockchain();
    this.blockchain = this.newchain.chain
    this.miners=[];
    this.addMiner();
    this.addMiner();
   
  }

  ngOnInit() {
    AppHelper.PopOver();
    
  }
 public ValidIS() {
    console.log(this.newchain.isChainValid());
 }
  public addblock() {
   
   //this.newchain.addBlock(new Block(this.indexcount, getFormattedDate(), { amount: this.currentAmount }));
    var newBlock =new Block(this.indexcount, getFormattedDate(), { amount: this.currentAmount });
         newBlock.previousHash = this.newchain.getLatestBlock().hash;
     
    //Broadcast new transaction to all miners
    for (let i = 0; i < this.miners.length; i++){
        newBlock.miner=i;
        this.miners[i].worker.postMessage({
            'block':newBlock ,
            'difficulty': this.difficulty
        });
    }
   /* var parent =AppHelper.StringNumber("#block-", this.indexcount-1);
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
 */
 
    this.indexcount+=1;
    //this.paddingcount+=1;
 }
   addMiner() {
   
        var Newminer = new Worker("/assets/js/miner.js")
        Newminer.addEventListener('message', this.onResponse.bind(this), false);
       this.miners.push({
          'worker':Newminer,
          'logs':[Log('normal','Listening for transactions...')]
        });
    }

    onResponse(event) {
        console.log(event);
        var newBlock = event.data.block;
        var logs =event.data.logs;
        if (logs == null) {
         if(typeof this.blockchain[newBlock.index] === 'undefined') {
            console.log("Mined by " + newBlock.miner);
            this.miners[newBlock.miner].logs.push(Log('success',"My block was accepted, i was the fastest miner 😊"))
            this.blockchain.push(newBlock);
            var parent = AppHelper.StringNumber("#block-", newBlock.index - 1);
            var child = AppHelper.StringNumber("#block-", newBlock.index);
            setTimeout(function() {
                    if (newBlock.index % 6 === 0) {
                        AppHelper.PadBlock(child);
                    }
                    let color = AppHelper.getRandomColor();
                    AppHelper.ColorBlock(child, color)
                    jqSimpleConnect.connect(parent, child, {
                        color: color,
                        anchorA: 'vertical',
                        anchorB: 'horizontal'
                    });
                    AppHelper.PopOver();
            }, 30);
        } else {
            this.miners[newBlock.miner].logs.push(Log('error',"My block was not accepted, i was not the fastest miner 😞"))
        }
    }
        if(logs != null) {
            this.miners[newBlock.miner].logs.push(logs)
        }
    }
  

}
