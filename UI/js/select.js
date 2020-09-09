layui.use('form', function() {
    var form = layui.form;

    var county = $("#county"),
        town = $("#town"),
        villager = $("#villager");

    //初始将省份数据赋予
    for (var i = 0; i < provinceList.length; i++) {
        addEle(county, provinceList[i].name);
    }

    //赋予完成 重新渲染select
    form.render('select');

    //向select中 追加内容
    function addEle(ele, value) {
        optionStr = "<option value=" + value + " >" + value + "</option>";
        ele.append(optionStr);
    }

    //移除select中所有项 赋予初始值
    function removeEle(ele) {
        ele.find("option").remove();
        var optionStar = "<option value=" + "0" + ">" + "请选择" + "</option>";
        ele.append(optionStar);
    }

    var provinceText,
        cityText,
        cityItem;

    //选定县/区后 将该县区的数据读取追加上
    form.on('select(county)', function(data) {
        provinceText = data.value;
        $.each(provinceList, function(i, item) {
            if (provinceText === item.name) {
                cityItem = i;
                return cityItem;
            }
        });
        removeEle(town);
        removeEle(villager);
        $.each(provinceList[cityItem].cityList, function(i, item) {
            addEle(town, item.name);
        });
        //重新渲染select
        form.render('select');
    });

    ////选定乡/镇后 将对应的数据读取追加上
    form.on('select(town)', function(data) {
        cityText = data.value;
        removeEle(villager);
        $.each(provinceList, function(i, item) {
            if (provinceText === item.name) {
                cityItem = i;
                return cityItem;
            }
        });
        console.log(provinceList[cityItem]);
        $.each(provinceList[cityItem].cityList, function(i, item) {
            if (cityText === item.name) {
                for (var n = 0; n < item.areaList.length; n++) {
                    console.log(item.areaList[n]);
                    addEle(villager, item.areaList[n]);
                }
            }
        });
        //重新渲染select
        form.render('select');
    });
    //监听提交
    form.on('submit(dataSubmit)', function(data){
        layer.alert(JSON.stringify(data.field), {
            title: '最终的提交信息'
        });
        return false;
    });



});

