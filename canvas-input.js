/**
 * Created by wyliyue on 2016/1/29.
 */
function Input(opts){
    var defaults = {
        id: opts.id || 'canvas',
        fontSize: opts.fontSize || 16,
        lineHeight: opts.lineHeight || 25,
        texts: opts.texts,
        speed: opts.speed || 300
    }

    this.opts = defaults;
    this.init();
    this.singleInput();
}
Input.prototype = {
    init: function(){
        this.textsArr = this.opts.texts.split('');
        this.canvas = document.getElementById('canvas');
        this.context = this.canvas.getContext('2d');
    },
    singleInput: function(){
        var i = 0, j = 1, n = this.textsArr.length, ti = 0;
        var fontSize = this.opts.fontSize, 
            lineHeight = this.opts.lineHeight,
            t = this.opts.texts;
        /**
         * lineTextNum 一行最多可以显示多少个字
         * lineNum 最多可以显示多少行
         * @type {number}
         */
        var lineTextNum = Math.floor(this.canvas.width / fontSize);
        var lineNum = Math.floor(this.canvas.height / lineHeight);

        this.context.font = fontSize + 'px Arial';

        var timer = setInterval(function(){
            if ( ti < n ){
                this.context.fillText(t[ti],i*fontSize,lineHeight*j);
                ti ++;
                i ++ ;
                if ( ti == lineTextNum * j ) {
                    i = 0;
                    j ++ ;
                }
                
            }else{
                clearInterval(timer);
            }
        }.bind(this),this.opts.speed);
    }
}
