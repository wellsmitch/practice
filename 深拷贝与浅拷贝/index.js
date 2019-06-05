/**
 * Created by 811 on 2018/7/27.
 */
function simpleClone(initalObj) {
    var obj = {};
    for ( var i in initalObj) {
        obj[i] = initalObj[i];
    }
    return obj;
}

var obj = {
    a: "hello",
    b:{
        a: "world",
        b: 21
    },
    c:["Bob", "Tom", "Jenny"],
    d:function() {
        alert("hello world");
    }
};
var cloneObj = simpleClone(obj);

console.log(cloneObj.a);
console.log(cloneObj.b);
console.log(cloneObj.c);
console.log(cloneObj.d);

//更改原对象中的a,b,c,d，看看拷贝过来的对象是否变化
cloneObj.a = "changed";
cloneObj.b.a = "changed";
cloneObj.b.b = 25;
cloneObj.c = [1, 2, 3];
cloneObj.d = function() { alert("changed"); };
console.log(obj.a);    //hello
console.log(obj.b);    //{a:"changed",b:25},事实上就是只有对象是拷贝的引用类型
console.log(obj.c);    //['Bob','Tom','Jenny']
console.log(obj.d);    //...alert("hello world")
