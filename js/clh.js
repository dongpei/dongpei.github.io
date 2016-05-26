$(function () {
    //header部分开始
        $(".header .nav a").slideDown(3000);
    //页面卷入事件,header改变行高
    $(document).scroll(function () {
        var scrollTop = $(document).scrollTop();
        if (scrollTop > 0) {
            $(".header").stop().animate({"height": "66px", "line-height": "66px"}, 300);
        } else {
            $(".header").stop().animate({"height": "99px", "line-height": "99px"}, 300);
        }

    });
    //鼠标移入移出logo事件
    $(".header .logo").on("mouseenter", function () {
        $(this).stop();
        $(this).animate({"opacity": 1}, 1000);
    });
    $(".header .logo").on("mouseleave", function () {
        $(this).stop();
        $(this).animate({"opacity": 0.5}, 1000);
    });
    //鼠标移入移出nav中a事件
    $(".nav > a").on("mouseenter", function () {
        $(".nav > span").stop().css("opacity", 1);
        var number = $(this).index();
        $(this).css("color", "#8fc35d").siblings("a").css("color", "#333");
        switch (number) {
            case 0:
                $(".nav > span").animate({"width": 65, "left": 55, "opacity": 1}, 300);
                break;
            case 1:
                $(".nav > span").animate({"width": 50, "left": 195, "opacity": 1}, 300);
                break;
            case 2:
                $(".nav > span").animate({"width": 32, "left": 320, "opacity": 1}, 300);
                break;
            case 3:
                $(".nav > span").animate({"width": 56, "left": 425, "opacity": 1}, 300);
                break;
            case 4:
                $(".nav > span").animate({"width": 32, "left": 555, "opacity": 1}, 300);
                break;
            case 5:
                $(".nav > span").animate({"width": 32, "left": 660, "opacity": 1}, 300);
                break;
        }
        ;
    });
    $(".nav").on("mouseleave", function () {
        $(this).children("a").css("color", "#333");
        $(".nav > span").stop().animate({"opacity": 0}, 500);
    });
    //header结束

    //content部分
    //给.circle中的span设置鼠标移入移出事件
    var changepicLeftCurrent = $(".changepic  li").index();
    var msgNumber = $(".changepic  li").index();
    $(".circle li").on("mouseenter", function () {
        $(this).find("span").hide();
    });
    $(".circle li").on("mouseleave", function () {
        $(this).find("span").show();
    });
    //点击不同的span 显示相对应的图片
    $(".circle  li").on("click", function () {
        var indexnow = $(this).index();
        msgNumber = 90 * indexnow;
        changepicLeftCurrent = -1350 * indexnow;
        $(".changepic").animate({"left": changepicLeftCurrent}, 1000);
        $(".msg").animate({"bottom": msgNumber}, 1000);
    });
    //banner大图轮播
    setInterval(function () {
        if (changepicLeftCurrent == -1350 * 2) {
            changepicLeftCurrent = 0;
        } else {
            changepicLeftCurrent = changepicLeftCurrent - 1350;
        }
        $(".changepic").animate({"left": changepicLeftCurrent}, 1000);
    }, 5000);
    //banner小图轮播
    setInterval(function () {
        if (msgNumber == 180) {
            msgNumber = 0;
        } else {
            msgNumber = msgNumber + 90;
        }
        $(".msg").animate({"bottom": msgNumber}, 1000);
    }, 5000);
    //content部分结束

    //guild部分开始
    var guildPicUlNumber = $(".guild_pics ul").index();
    //右边按钮
    $("#works_next").on("click", function () {
        if (guildPicUlNumber == 3) {
            guildPicUlNumber = 0;
        } else {
            guildPicUlNumber++;
        }
        $(".guild_pics").animate({"left": -1350 * guildPicUlNumber}, 500)
    });
    //左边按钮
    $("#works_prev").on("click", function () {
        if (guildPicUlNumber == 0) {
            guildPicUlNumber = 3;
        } else {
            guildPicUlNumber--;
        }
        $(".guild_pics").animate({"left": -1350 * guildPicUlNumber}, 500)
    });
    //鼠标移入移出图片事件
    var arrColor = ["#ED5D64", "#A7418B", "#4AA132", "#BDAA89", "#0080CC", "#F6AB27", "#4CABEC", "#57BBE4"];
    $(".guild_pics li").on("mouseenter", function () {
        $(this).find("p").stop().animate({"bottom": -15}, 500);
        $(this).find("img").stop().animate({
            "width": 360,
            "height": 231,
            "margin-left": -11,
            "margin-top": -8
        }, 500);
        var arrIndex = $(this).index();
        $(this).find("h5").stop().animate({"color": "#fff", "background-color": arrColor[arrIndex]}, 500);
    });
    $(".guild_pics li").on("mouseleave", function () {
        $(this).find("p").stop().animate({"bottom": -65}, 500);
        $(this).find("img").stop().animate({
            "width": 338,
            "height": 215,
            "margin-left": 0,
            "margin-top": 0
        }, 500);
        $(this).find("h5").stop().animate({"color": "#333", "background-color": "#fff"}, 500);
    });
    //guild部分结束

    //news部分开始
    //鼠标移入移出.signing li a事件
    $(".signing li a").on("mouseenter", function () {
        $(this).stop().animate({"left": 10}, 200);
    });
    $(".signing li a").on("mouseleave", function () {
        $(this).stop().animate({"left": 0}, 200);
    });
    //news部分结束
    //.service_link ul li自动轮换
    var j = 0;
    var arrLiColor = [
        "#0080BA", "#910037", "#C60000", "#DA251C", "#0A5CA6",
        "#094FA4", "#015CA3", "#0278C0", "#E32912", "#1379FF",
        "#050505", "#E50110", "#141318", "#E6071A", "#1D2731",
        "#474747", "#9FCF62", "#165854", "#1B1110", "#05308A",
    ];
    setInterval(function () {
        $(".service_link ul li").find("i").css("opacity", 0.3);
        $(".service_link ul li").find("i").eq(j).css("opacity", 1);
        $(".service_link ul li").css("background-color", "#fff");
        $(".service_link ul li").eq(j).css("background-color", arrLiColor[j]);
        if (j == 19) {
            j = 0;
        } else {
            j++;
        }
    }, 1000);
    //鼠标移入移出.service_link ul li事件
    $(".service_link ul a").mouseenter(function () {
        var k = $(this).index();
        $(this).find("i").eq(k).stop().css("opacity", 1);
        $(this).css({"background-color": arrLiColor[k], "width": 238, "height": 178,"top":0,"left":0});
    });
    $(".service_link ul a").mouseleave(function () {
        var k = $(this).index();
        $(this).find("i").eq(k).stop().css("opacity", 0.3);
        $(this).css({"background-color": "#fff", "width": 218, "height": 158,"top":10,"left":10});
    });


    //service部分开始
    $(document).scroll(function () {
        var scrollTop = $(document).scrollTop();
        if (scrollTop > 1490) {
            $(".service_top .fiveyears").slideDown(2000);
        }
        ;
        if (scrollTop > 2800) {
            $(".profession_list .web").animate({"opacity": 1}, 500, function () {
                $(".profession_list .web dd").slideDown(1000);
                $(".profession_list .app").animate({"opacity": 1}, 500, function () {
                    $(".profession_list .app dd").slideDown(1000);
                    $(".profession_list .seo").animate({"opacity": 1}, 500, function () {
                        $(".profession_list .seo dd").slideDown(1000);
                        $(".profession_list .vi").animate({"opacity": 1}, 500, function () {
                            $(".profession_list .vi dd").slideDown(1000);
                        });
                    });
                });
            });
        }
    });
    //service部分结束

});