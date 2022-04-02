//监控区域模块制作
// 防止变量污染，用立即执行函数
(function () {
    $(function () {
        $(".monitor .tabs").on("click", "a", function () {
            $(this).addClass("active").siblings("a").removeClass("active");
            //选取对应索引号的content
            $(".monitor .content").eq($(this).index()).show().siblings(".content").hide();
        });
          //先克隆marquee里所有的行
        $(".marquee-view .marquee").each(function () {
           var rows= $(this).children().clone();
            $(this).append(rows);
        });

        //饼图模块
        var mychart = echarts.init(document.querySelector('.pie'));   
        option = {
          
            tooltip: {
                trigger: "item",//数据类型触发
                formatter: "{a}<br>{b}:{c}({d}%)"
                //a代表series名称 ，b代表的是data里的name ,c代表data里的value,d代表当前数据的比例
           },
            series: [
              {
                name: '点位模式',//图表名称
                type: 'pie', 
                    radius: ["10%", "75%"],//图表半径 1.里面空白圆的半径 2.最大圆的半径
                // 如果是%必须加“
                center: ['50%', '50%'],//位置
                roseType: 'radius', //radius半径模式，area面积模式
                itemStyle: {
                  borderRadius: 8
                },
                data: [
                  { value: 40, name: '湖北' },
                  { value: 38, name: '上海' },
                  { value: 32, name: '北京' },
                  { value: 30, name: '安徽' },
                  { value: 28, name: '江苏' },
                  { value: 26, name: '河北' },
                  { value: 22, name: '浙江' },
                  { value: 18, name: '四川' }
                    ],
                // 修饰文字找label
                    label: {
                    fontSize:10
                    },
                    labelLine: {
                      length:6,length2:8
                  }
                    
              }
            ]
          };
          mychart.setOption(option);

    })
})();