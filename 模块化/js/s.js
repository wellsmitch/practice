define(function (){

    // define(["./cart", "./inventory"], function(cart, inventory) {

    var add = function (x,y){
        return x+y;
    };


    //注意要有返回值
    return {
        add: add
    };

});