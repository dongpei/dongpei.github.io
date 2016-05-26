/**
 * Created by 董沛
 */
$(function () {
    //获取当前浏览器高度函数
    clientHeight();
    //页面缓动
    pageRoll();
    //点击按钮，给音频播放器增加动画类名
    audioClick();
    //获取第五页面img标签，根据浏览器的当前宽度设置其高度
    setImg();
    //模拟时钟
    clock()
    //点击按钮，会话框显示
    chatBtn();
    //chat
    myChat();
});

//获取当前浏览器高度函数
function clientHeight() {
    var changeHeight = document.documentElement.clientHeight;
    $('body')[0].style.height = changeHeight + "px";
    $(window).resize(function () {
        changeHeight = document.documentElement.clientHeight;
        $('body')[0].style.height = changeHeight + "px";
    });
}
//页面缓动
function pageRoll() {
    var v = document.getElementsByTagName("video")[0];
    var a = document.getElementsByTagName("audio")[0];
    var lis = $(".rightBtn button");
    var pages = document.getElementsByClassName("page");
    var pageHight = document.documentElement.clientHeight;
    var leader = 0;
    var timer = null;
    var count = 0;
    $(window).resize(function () {
        pageHight = document.documentElement.clientHeight;
    });
    window.onscroll = function () {
        leader = window.pageYOffset;
        if (leader < pageHight && leader >= 0) {
            count = 0;
            audioState(a);
        } else if (leader < 2 * pageHight && leader >= pageHight) {
            count = 1;
            vidoeState(v);
            if (leader >= 1.5 * pageHight) {
                count = 2;
            }
        } else if (leader < 3 * pageHight && leader >= 2 * pageHight) {
            count = 2;
            vidoeState(v);
            audioState(a);
            if (leader >= 2.5 * pageHight) {
                count = 3;
            }
        } else if (leader < 4 * pageHight && leader >= 3 * pageHight) {
            count = 3;
            vidoeState(v);
            audioState(a);
            if (leader >= 3.5 * pageHight) {
                count = 4;
            }
        } else if (leader < 5 * pageHight && leader >= 4 * pageHight) {
            count = 4;
            vidoeState(v);
            audioState(a);
            if (leader >= 4.5 * pageHight) {
                count = 5;
            }
        } else {
            count = 5;
            vidoeState(v);
            audioState(a);
        }
    };
    lis[0].onclick = function () {
        clearInterval(timer);
        count--;
        if (count < 0) {
            count = 0
        }
        if (count <= pages.length) {
            var target = pages[count].offsetTop;
            timer = setInterval(function () {
                var step = (target - leader) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader = leader + step;
                window.scrollTo(0, leader);

                if (leader == target) {
                    clearInterval(timer);
                }
            }, 15);
        }
    };
    lis[1].onclick = function () {
        clearInterval(timer);
        count++;
        if (count > 5) {
            count = 5
        }
        if (count <= pages.length) {
            var target = pages[count].offsetTop;
            timer = setInterval(function () {
                var step = (target - leader) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader = leader + step;
                window.scrollTo(0, leader);

                if (leader == target) {
                    clearInterval(timer);
                }
            }, 15);
        }
    };

}
//监听视频播放状态
function vidoeState(v) {
    if (!v.paused) {
        v.pause();
    }
}
//监听音频播放状态
function audioState(a) {
    if (!a.paused) {
        a.pause();
    }
}
function audioStatePlay(a) {
    if (a.paused) {
        a.play();
    }
}
//点击按钮，给音频播放器增加动画类名
function audioClick() {
    var count = 0;
    var audioBtn = $("#page-two a span");
    var audio = $("#page-two audio");
    var a = document.getElementsByTagName("audio")[0];
    audioBtn.click(function () {
        count++;
        if (count % 2 == 0) {
            audio.removeClass(" bounceInDown").addClass(" bounceOut");
            audioBtn.removeClass(" glyphicon-off").addClass(" glyphicon-music");
            audioState(a);
        } else {
            audioStatePlay(a);
            audio.removeClass(" hidden").removeClass(" bounceOut").addClass(" bounceInDown");
            audioBtn.removeClass(" glyphicon-music").addClass(" glyphicon-off");
        }
    });
}
//获取第五页面img标签，根据浏览器的当前宽度设置其高度
function setImg() {
    var Height1 = $("#page-five .myContainer").height();
    var Height2 = $("#page-five .myLine").height();
    var Height = Height1 - Height2;
    var Width = $("#page-five .myContainer").width();
    var imgs = $("#page-five img");
    ifchange();
    $(window).resize(function () {
        Height1 = $("#page-five .myContainer").height();
        Height = Height1 - Height2;
        Width = $("#page-five .myContainer").width();
        ifchange();
    });
    function ifchange() {
        if (Width < 768) {
            imgs.each(function () {
                var height = Height * 15 / 100;
                this.style.height = height + "px";
            });
        } else {
            imgs.each(function () {
                var height = Height * 25 / 100;
                this.style.height = height + "px";
            });
        }
    }
}
//模拟时钟JS代码
function clock() {
    var hh = document.getElementById("h");
    var mm = document.getElementById("m");
    var ss = document.getElementById("s");
    setInterval(timeMove, 1000);
    function timeMove() {
        var now = new Date();
        var s = now.getSeconds();
        var m = now.getMinutes() + s / 60;
        var h = now.getHours() % 12 + m / 60;
        ss.style.transform = "rotate(" + s * 6 + "deg)";
        mm.style.transform = "rotate(" + m * 6 + "deg)";
        hh.style.transform = "rotate(" + h * 30 + "deg)";
    }
}

//点击按钮，会话框显示
function chatBtn() {
    var count = 0;
    var clockBom = $("#page-six .chat .clock");
    var chatMeBom = $("#page-six .chat .chatMe");
    $("#page-six .info a").on('click', function () {
        count++;
        if (count == 1) {
            clockBom.addClass(" bounceOutLeft");
            chatMeBom.removeClass(" hidden").addClass(" fadeInDownBig");
        }

    });
}

//chat请求
function myChat() {
    $('#page-six .chat .btn').on('click', function () {
        var data = {
            flag: 'self',
            text: $('#page-six textarea').val(),
            name:"我说"
        }
        var html = template('chat', data);
        $('#page-six .messages').append(html);
        // 发起一个请求
        $.ajax({
            type: 'get',
            url: './php/chat.php?content=' + data.text,
            data: {},
            success: function (data) {
                // 将服务器返回的数据赋值给info
                var info = data;
                // 拼凑数据
                data = {
                    flag: 'other',
                    text: info,
                    name:'对方说'
                }
                // 调用模板引擎
                var html = template('chat', data);
                // 将模板引擎替换好的html放到页面上
                $('#page-six .messages').append(html);
            }
        });
        // 清空输入表单
        $('#page-six textarea').val('');
    });
}