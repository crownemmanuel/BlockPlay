var AppHelper = {
    getRandomColor: function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    },
    ColorBlock: function ColorBlock(id, color) {
        jQuery(id).find('b').css("background", color);
    },
    PadBlock: function PadBlock(id) {
        jQuery(id).css("margin-top", "-40px");
    },
    PopOver: function PopOver() {
        jQuery('[data-toggle="popover"]').popover({
            container: 'body'
        })
    },
    StringNumber: function StringNumber(string, number) {
        return string + number;
    }

}

function getFormattedDate() {
    var date = new Date();

    var month = date.getMonth() + 1;
    var day = date.getDate();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();

    month = (month < 10 ? "0" : "") + month;
    day = (day < 10 ? "0" : "") + day;
    hour = (hour < 10 ? "0" : "") + hour;
    min = (min < 10 ? "0" : "") + min;
    sec = (sec < 10 ? "0" : "") + sec;

    var str = date.getFullYear() + "-" + month + "-" + day + "_" + hour + ":" + min + ":" + sec;

    return str;
}

function calculateHash(block) {
    /*  console.log("noun");
      console.log(block.index);
      console.log(block.previousHash);
      console.log(block.timestamp);
      console.log(block.data);
      console.log(block);*/
    // console.log(hex_sha256(block.index + block.previousHash + block.timestamp + JSON.stringify(block.data)));
    return hex_sha256(block.index + block.previousHash + block.timestamp + JSON.stringify(block.data) + JSON.stringify(block.nonce));
}

function Log(type, message) {
    return {
        'type': type,
        'message': message
    }
}
//As a worker normally take another JavaScript file to execute we convert the function in an URL: http://stackoverflow.com/a/16799132/2576706
function getScriptPath(foo) { return window.URL.createObjectURL(new Blob([foo.toString().match(/^\s*function\s*\(\s*\)\s*\{(([\s\S](?!\}$))*[\s\S])/)[1]], { type: 'text/javascript' })); }