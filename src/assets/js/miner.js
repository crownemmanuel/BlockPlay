//document.writeln("<script type='text/javascript' src='/assets/js/vendor/sha256.js'></script>");
importScripts('/assets/js/vendor/sha256.js');
importScripts('/assets/js/apphelper.js');
self.addEventListener('message', function(e) {

    newBlock = e.data.block;
    difficulty = e.data.difficulty;
    foundNonce = 1;
    var d = new Date();


    BroadcastLog('mine', "Mining started..", newBlock)
    if (difficulty > 0) {

        BroadcastLog('normal', "Trying several nonce values until my block hash begins with " + difficulty + " zeros", newBlock)
        BroadcastLog('normal', "I am starting with a nonce value of 0 and will keep increasing this sequentially", newBlock)
        newBlock.nonce = 0;
        while (newBlock.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")) {
            if (newBlock.hash.substring(0, foundNonce) == Array(foundNonce + 1).join("0")) {
                BroadcastLog('normal', "Found " + foundNonce + " zero(s) after " + newBlock.nonce + " tries", newBlock)
                    // console.log("found" + foundNonce)
                foundNonce++;

            }
            newBlock.nonce++;
            newBlock.hash = calculateHash(newBlock)
        }
    } else {
        newBlock.hash = calculateHash(newBlock)
    }
    BroadcastLog('mined', "Block successfully mined after " + newBlock.nonce + " tries block hash " + newBlock.hash, newBlock)
    BroadcastLog('normal', "Sending block to blockchain", newBlock)
    self.postMessage({
        'block': newBlock,
        'logs': null
    });
    var d = new Date();
    //  console.log(d)
    //   console.log(newBlock)
}, false);

function BroadcastLog(type, message, Block) {
    self.postMessage({
        'block': Block,
        'logs': Log(type, message)
    });
}