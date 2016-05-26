/**
 * Created by dongpei on 2016/3/20.
 */
$(function () {
    //轮播图
    banner();
    //初始化tooltips
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })
    //初始化tabs
    initTabs();
});
//轮播图
function banner() {
    /**
     * 1.通过ajax获取数据  图片
     * 2.判断屏幕的尺寸  $(window).width();
     * 3.根据屏幕的尺寸 json转化渲染html字符串  (1.js来拼接字符串 2.模版引擎)
     * 4.渲染在页面当中 html('我们解析的html');
     * 5.响应屏幕的尺寸  来渲染当前屏幕尺寸下的图片  resize事件
     * */
//1.通过ajax获取数据  图片
//数据缓存
    var myData = "";
    var getDate = function (callback) {
        if (myData) {
            callback && callback(myData);
            return false;
        }
        $.ajax({
            url: "../json/weijinsuo.json",
            type: "get",
            data: {},
            dateType: "json",
            success: function (data) {
                myData = data;
                callback && callback(data);
            }
        })
    };
//3.根据屏幕的尺寸 json转化渲染html字符串  (1.js来拼接字符串 2.模版引擎) artTemplate*/
//获取数据
//渲染
    var renderHtml = function () {
        //2.判断屏幕的尺寸  $(window).width();
        var width = $(window).width();
        var isMobile = false;
        if (width < 768) {
            isMobile = true;
        }
        getDate(function (data) {
            //拿到模板
            var templatePoint = _.template($("#template_point").html());
            var templateImage = _.template($("#template_image").html());
            //把数据解析成htmlt
            var pointHtml = templatePoint({model: data});
            var imageHtml = templateImage({model: {list: data, isMobile: isMobile}});

            /*4.渲染在页面当中 html('我们解析的html');*/
            $(".carousel-indicators").html(pointHtml);
            $(".carousel-inner").html(imageHtml);
        });
    };
    /*5.响应屏幕的尺寸  来渲染当前屏幕尺寸下的图片  resize事件*/
    /*
     * renderHtml并没有调用
     * trigger 是jquery的立即触发这个传入的事件
     * .trigger('resize')  立即触发了resize事件
     * */
    $(window).on('resize', function () {
        renderHtml();
    }).trigger('resize');

    /*在移动端需要滑动*/
    var startX = 0;
    var moveX = 0;
    var distanceX = 0;
    var isMove = false;
    $(".wjs_banner").on("touchstart", function (e) {
        /*  在jquery当中 绑定touch事件的时候 返回的  originalEvent  包含的是原生的touchevent*/
        startX = e.originalEvent.touches[0].clientX;
    });
    $(".wjs_banner").on("touchmove", function (e) {
        moveX = e.originalEvent.touches[0].clientX;
        distanceX = moveX - startX;
        isMove = true;
    });
    $(".wjs_banner").on("touchend", function (e) {
        //划动过50的时候才算一个手势
        if (isMove && Math.abs(distanceX) > 50) {
            if (distanceX > 0) {
                //右划
                $(".carousel").carousel("prev");
            } else {
                //左划
                $(".carousel").carousel("next");
            }
        }
    });
}

//初始化tabs
function initTabs() {
    var parent = $(".wjs_tabs_parent");
    var child = parent.find("ul");
    var lis = child.find("li");
    var width = 0;
    lis.each(function () {
        width += $(this).innerWidth();
        /*
         * width() 内容
         * innerWidth() 内边距+内容
         * outerWidth() 内边距+内容+边框
         * outerWidth(true) 外边距 + 边框 + 内容 + 内边距
         *
         * */
    });
    child.width(width);
    //滑动
    itcast.iScroll({
        swipeDom: parent.get(0),
        swipeType: "x",
        swipeDistance: 60
    });
}
