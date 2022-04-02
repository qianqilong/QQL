$(function () {
    load();
    // 1.键盘按下回车键触发keyCode=13
    $("#title").on("keydown", function (e) {
        if (e.keyCode === 13) {
            //先读取本地存储原来的数据
            var local = getDate();
            // local数组更新数据push
            local.push({
                title: $(this).val(),
                done: false
            });
            //数组存储给本地
            savaDate(local);
            //渲染加载数据
            load();
          

        }
    });





// 每次渲染时清空ol里内容
    $("ol,ul").on("click", "a", function () {
      //先获取本地存储
        var data = getDate();
        //修改数据
        var index = $(this).attr("id");
        //修改data,把data数据存到本地存储
        data.splice(index, 1);//删除掉索引号的数组
        savaDate(data);//保存到本地存储
        load();//重新渲染元素
    })



//打对勾移动到ul
    $("ul,ol").on("click","input", function () {
        // 先获取本地存储数据
        var data = getDate();
        //修改数据
        var index = $(this).siblings("a").attr("id");
        data[index].done = $(this).prop("checked");
       //保存本地存储
        savaDate(data);
        //重新渲染
        load();
    })




//统计事件个数
    




    // 1。读取本地存储函数
    function getDate() {
        var data = localStorage.getItem("dotolist");
        if (data !== null) {
//本地存储数据是字符串要把他转换为数组
            return JSON.parse(data);
        } else {
            return [];
        }
    }




    // 2.存档函数
    function savaDate(data) {
        //数组要装换成字符串，然后存入
        localStorage.setItem("dotolist", JSON.stringify(data));
    }
    


    // 3.渲染加载数据函数
    function load() {

        var data = getDate();
        var todoC = 0;
        var doneC = 0;
        // console.log(data);
        // 每次渲染时清空ol里内容
        $("ol,ul").empty();
        $.each(data, function (i, n) {
            if (n.done) {
                $("ul").prepend(" <li><input type='checkbox' checked='checked'> <p>" + n.title + "</p> <a href='javascript:;' id=" + i + "></a></li>");
                doneC++;
            } else {
                $("ol").prepend(" <li><input type='checkbox'> <p>" + n.title + "</p> <a href='javascript:;' id=" + i + "></a></li>");
                todoC++;
            }
            // console.log(n);
           
        });
        $("#todocount").text(todoC);
        $("#donecount").text(doneC);
    }


})