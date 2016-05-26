/**
 * Created by 13103 on 2016/4/22.
 */
var imgs = ['../../images/flyBirdImg/sky.png',
    '../../images/flyBirdImg/pipe2.png',
    '../../images/flyBirdImg/pipe1.png',
    '../../images/flyBirdImg/land.png',
    '../../images/flyBirdImg/birds.png'];
var imgObjs = [];
var loadCount = 0;
imgs.forEach(function (imgurl) {
    var img = new Image();
    img.addEventListener('load', function () {
        loadCount++;
        if (loadCount >= imgs.length) {
            main();
        }
    });
    img.src = imgurl;
    imgObjs.push(img);
})
