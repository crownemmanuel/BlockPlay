//const SHA256 = require("crypto-js/sha256");

class Block {
    constructor(index, timestamp, data, previousHash = '') {
        this.nonce = 0
        this.index = index;
        this.previousHash = previousHash;
        this.timestamp = timestamp;
        this.data = data;
        this.hash = calculateHash(this);
        this.miner = 0;
    }

    mineBlock(difficulty) {
        console.log(this.nonce);
        while (this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")) {
            this.nonce++;
            this.hash = this.calculateHash();
        }

        console.log(this.nonce);
        console.log("BLOCK MINED: " + this.hash);

    }
}


class Blockchain {
    constructor() {
        this.chain = [this.createGenesisBlock()];
        this.difficulty = 0;
    }

    createGenesisBlock() {
        return new Block(0, getFormattedDate(), { amount: "100" }, "0");
    }

    getLatestBlock() {
        return this.chain[this.chain.length - 1];
    }

    addBlock(newBlock) {
        newBlock.previousHash = this.getLatestBlock().hash;

        var worker1 = new Worker("/assets/js/miner.js")
        newBlock.miner = "Miner 1";
        worker1.postMessage({
            'block': newBlock,
            'difficulty': this.difficulty
        });
        worker1.addEventListener('message', this.onResponse.bind(this), false);

    }

    onResponse(event) {
        var newBlock = event.data;
        if (typeof this.chain[newBlock.index] === 'undefined') {
            console.log("Mined by " + newBlock.miner);
            this.chain.push(newBlock);
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
                //End Settimeout
            }, 30);
        }
    }

    isChainValid() {
        //  jQuery(".broken").removeClass("broken");
        for (let i = 1; i < this.chain.length; i++) {
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i - 1];
            const blockElId = "#block-" + previousBlock.index

            if (currentBlock.hash !== calculateHash(currentBlock)) {
                if (currentBlock.index != this.chain.length - 1)
                    jQuery(blockElId).addClass("broken");
            } else if (currentBlock.previousHash !== previousBlock.hash) {
                jQuery(blockElId).addClass("broken");
            } else {
                jQuery(blockElId).removeClass("broken");
            }
        }

        return true;
    }
}