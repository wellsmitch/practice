var xmlhttp = new XMLHttpRequest();
var obj = {
    name: 'zhansgan',
    age: 18
};
xmlhttp.open("POST", "http://localhost:3000/users/login", true);
xmlhttp.setRequestHeader("token","header-token-value"); // 可以定义请求头带给后端
xmlhttp.setRequestHeader("dingyi","header-dingyi-value");
xmlhttp.send(JSON.stringify(obj));  // 要发送的参数，要转化为json字符串发送给后端，后端就会接受到json对象
// readyState == 4 为请求完成，status == 200为请求陈宫返回的状态
xmlhttp.onreadystatechange = function(){
    // if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
    //     console.log(xmlhttp.responseText);
    // }
    console.log('nnnnnnnn');
}
