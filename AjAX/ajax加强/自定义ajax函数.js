// method 请求类型
// url 请求地址
// data 携带数据
// success:回调函数

function resolveData(data) {//把传输的参数拼接
    var arr = [];
    for (var k in data) {//var k对应属性名，in data对应对象名
        var str = k + '=' + data[k];
        arr.push(str);

    }
    return arr.join('&');
}

console.log(resolveData({ name: 1, age: 20 })); 

function zdyajxa(options) {
    var xhr = new XMLHttpRequest();
    //传输的参数进行拼接
    
    var qs = resolveData(options.data);
    
    if (options.method.toUpperCase() === 'GET') {
        xhr.open(options.method, options.url + '?' + qs);
        xhr.send();
    } else if (options.method.toUpperCase() === 'POST') {
        xhr.openxhr.open(options.method, options.url);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send(qs);
}

    // method 属性规定如何发送表单数据（表单数据发送到 action 属性所规定的页面）
    // toUpperCase() 方法用于把字符串转换为大写。
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var result = JSON.parse(xhr.responseText);
            options.success(result);//success是一个函数，他负责输出返回的值
        }
    }
 }