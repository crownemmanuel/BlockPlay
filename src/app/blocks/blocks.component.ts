import { Component, OnInit, Input } from "@angular/core";
import { PopoverModule } from "ngx-popover";
import * as $ from "jquery";
import * as copy from "copy-to-clipboard";
declare var calculateHash: any;
@Component({
  selector: "app-blocks",
  templateUrl: "./blocks.component.html",
  styleUrls: ["./blocks.component.scss"]
})
export class BlocksComponent implements OnInit {
  currentBlock = 0;
  @Input() blockchain;
  @Input() chain;
  @Input() difficulty;
  @Input() modalAction;

  constructor() {
    let self = this;
    $(document).on("click", "#copy-hash", function() {
      copy(self.blockchain[self.currentBlock].hash);
      // var tooltip = document.getElementById("myTooltip");
      //  tooltip.innerHTML = "Copy to clipboard";
    });
  }

  ngOnInit() {
    // this.currentBlock = this.blockchain;
    /// this.copyInputMessage();
  }

  SetCurrentBlock(index) {
    this.currentBlock = index;
  }
  SetModalAction(action) {
    this.modalAction = action;
  }
  BlockChange(index) {
    //   this.blockchain[index].hash =calculateHash(this.blockchain[index]);

    console.log(this.blockchain[index]);
    var worker1 = new Worker("/assets/js/miner.js");
    worker1.postMessage({
      block: this.blockchain[index],
      difficulty: this.difficulty
    });
    worker1.addEventListener(
      "message",
      event => {
        var Block = event.data.block;
        this.blockchain[index].hash = Block.hash;
        this.blockchain[index].nonce = Block.nonce;
        this.chain.isChainValid();
      },
      false
    );
  }
}
