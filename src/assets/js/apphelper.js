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