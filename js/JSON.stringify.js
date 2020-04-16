var t = {aaa: "q23"};
var va = {a: {b: t.aaa}};

function stringify(va) {
    var res = null;
    res = JSON.stringify(
        va,
        function (k, v) {
            console.log("key:", k, "value:", v);
            // if (typeof k === "symbol"){
            return v;
            // }
        }, 6
    );
    console.log("res:" + res);
    return res
}

console.log(stringify(va));
