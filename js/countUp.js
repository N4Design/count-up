function countUp(id, duration, easing, commas) {
    var $this = $(id),
        countTo = $this.attr('data-count');
        
    (duration === undefined) ? duration = 1000 : null;
    (easing === undefined) ? easing = 'linear' : null;
    (commas === undefined) ? commas = false : null;

    $({countNum: $this.text()})
        .animate({
            countNum: countTo
        },
        {
            duration: duration,
            easing: easing,
            step: function() {
                if (commas) {
                    $this.text(addCommas(Math.floor(this.countNum)));
                } else {
                    $this.text(Math.floor(this.countNum));
                }
            },
            complete: function() {
                if (commas) {
                    $this.text(addCommas(this.countNum));
                } else {
                    $this.text(this.countNum);
                }
            }
        });  
};

function addCommas(nStr) {
    "use strict";
    nStr += '';
    var x = nStr.split('.');
    var x1 = x[0];
    var x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2;
}
