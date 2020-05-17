var a = [111, 222, 333];
var b = a.concat();
a.push = function(){
    console.log(121221)
};
a.zzz = 555;
a.push(555);
for (var i = 0; i < a.length; i++) {
    console.log(a[i]);
}
a.forEach(function (value) {
    console.log(value,"==");
});
console.log("a:", a,a.length);
console.log("b:", b);
console.log("-------------------------");
var c = [111, 222, 333];
var d = c;
c.push(666);
console.log("c:", c);
console.log("d:", d);
