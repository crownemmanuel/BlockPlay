//const SHA256 = require("crypto-js/sha256");

class Block {
    constructor(index, timestamp, data, previousHash = '') {
        this.index = index;
        this.previousHash = previousHash;
        this.timestamp = timestamp;
        this.data = data;
        this.hash = this.calculateHash();
        this.nonce = 0;
    }

    calculateHash() {
        console.log(this.index)
        console.log(this.previousHash)
        console.log(this.timestamp)
        console.log(JSON.stringify(this.data))
        return hex_sha256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data));
    }
}


class Blockchain {
    constructor() {
        this.chain = [this.createGenesisBlock()];
    }

    createGenesisBlock() {
        return new Block(0, getFormattedDate(), { amount: "100" }, "0");
    }

    getLatestBlock() {
        return this.chain[this.chain.length - 1];
    }

    addBlock(newBlock) {
        newBlock.previousHash = this.getLatestBlock().hash;
        newBlock.hash = newBlock.calculateHash();
        this.chain.push(newBlock);
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

    isChainValid() {
        //  jQuery(".broken").removeClass("broken");
        for (let i = 1; i < this.chain.length; i++) {
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i - 1];
            const blockElId = "#block-" + previousBlock.index

            if (currentBlock.hash !== currentBlock.calculateHash()) {
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