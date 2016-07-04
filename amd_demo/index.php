<?php
session_start();
require "./JSSDK.php";
$jssdk = new JSSDK("wxc1e3fe0bde9e0f36", "38d7572a5a12e205bc35fa7b474d0de5");
$signPackage = $jssdk->getSignPackage();
// print_r($_SESSION);
?>


<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
   <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
<link rel="stylesheet" type="text/css" href="css/reset.css"/>
<link rel="stylesheet" type="text/css" href="css/index0.css"/>
 <title>Document</title>
<script>
        (function (doc, win) {
            var docEl = doc.documentElement;
            var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
            var recalc = function () {
                var clientWidth = docEl.clientWidth;
                if (!clientWidth) return;
                docEl.style.fontSize = (clientWidth/16).toFixed(1) + 'px';
            };
            recalc();
            if (!doc.addEventListener) return;
            win.addEventListener(resizeEvt, recalc, false);
        })(document, window);
        //640px时1rem是40px
    </script>
</head>
<style type="text/css">
.wrapper{
  display: block;
  width: 16rem;
  height: 25.5rem;
  background:linear-gradient(205deg,#00A5DE,#A5218C 40%,#EF5416 90%) ;
  overflow: hidden;
  position: relative;
} 
.wrapper img{
  display: block;
  
}
.wrapper img:nth-of-type(1){
  width:6.775rem;
  height:6.325rem;
  margin:3.475rem 0 0 4.675rem;
}
.wrapper img:nth-of-type(2){
  width:16rem;
  height:10.425rem;
  margin-top: 6.825rem;
}
.wrapper img:nth-of-type(3){
  width:0.65rem;
  height:0.95rem;
  position: absolute;
  top: 16rem;
  left:7.3rem;
  animation:span2 1.5s  linear infinite;
  z-index: 2;
}
.wrapper span:nth-of-type(1){
  display: block;
  position: absolute;
  top: 10.425rem;
  left: 5.825rem;
  color: #F0F0F0;
  font-size:0.65rem;
}
.wrapper span:nth-of-type(2){
  display: block;
  position: absolute;
  top: 17.3rem;
  left: 5.925rem;
  color: #F0F0F0;
  font-size:0.65rem;
}
.wrapper span:nth-of-type(3){
  display: block;
  position: absolute;
  top: 15.8rem;
  left: 6.93rem;
  background-color: #F4F4F4;
  height: 1.4rem;
  width: 1.4rem;
  border-radius:50% ;
  opacity: 0.5;
  animation:span3 1.5s  linear infinite;
  
}
@keyframes span2{
  0%{
    opacity: 1;
  }
  50%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
}
@keyframes span3{
  0%{
    opacity: 0.5;
  }
  50%{
    opacity: 0;
  }
  100%{
    opacity: 0.5;
  }
}

</style>
  <body>
    <a class="wrapper" href="index.html">
      <img src="img/myself1/images/welcome_03.png" />
      <img src="img/myself1/images/welcome1_06.png" />
      <img src="img/map.gif" id="img3"/>
      <span>让乐园更有趣</span>
      <span id="span2">定位中。。。</span>
      <span></span>
    </a>
  <script>
    var a=document.getElementById("a")
  </script>
  </body>


<script src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
<script>
  
  wx.config({
    appId: '<?php echo $signPackage["appId"];?>',
    timestamp: '<?php echo $signPackage["timestamp"];?>',
    nonceStr: '<?php echo $signPackage["nonceStr"];?>',
    signature: '<?php echo $signPackage["signature"];?>',
    jsApiList: [
      'getLocation','openLocation','getNetworkType','chooseImage','onMenuShareQZone','scanQRCode'
    ]
  });
  wx.error(function(res){
      alert(JSON.stringify(res));
    })

    function func1(){     
        wx.getLocation({
            type: 'wgs84', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
            success: function (res) {
                    latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
                    longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
                var speed = res.speed; // 速度，以米/每秒计
                var accuracy = res.accuracy; // 位置精度
                // alert(latitude+"|"+longitude);
                alert("您位置的纬度:"+latitude+"您位置的经度:"+longitude+"您位置的精度:"+accuracy)
            },
            fail:function(){
              //alert('fail');
            }
        });
    }
    function func2(){
     wx.openLocation({
      latitude: latitude, // 纬度，浮点数，范围为90 ~ -90
      longitude: longitude, // 经度，浮点数，范围为180 ~ -180。
      name: '', // 位置名
      address: '', // 地址详情说明
      scale: 15, // 地图缩放级别,整形值,范围从1~28。默认为最大
      infoUrl: '' // 在查看位置界面底部显示的超链接,可点击跳转
      });
    }
   function func3(){
     wx.getNetworkType({
     success: function (res) {
         var networkType = res.networkType; // 返回网络类型2g，3g，4g，wifi
         alert(networkType)
        }
     });
   }
  function func4(){
    wx.chooseImage({
    count: 1, // 默认9
    sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
    sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
    success: function (res) {
        var localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
        alert(localIds)
    }
    });
  }
  function func5(){
    wx.onMenuShareQZone({
    title: '111', // 分享标题
    desc: '111', // 分享描述
    link: '111', // 分享链接
    imgUrl: '11', // 分享图标
    success: function () { 
       // 用户确认分享后执行的回调函数
       alert("ok")
    },
    cancel: function () { 
        // 用户取消分享后执行的回调函数
        alert("no")
    }
    });
  }
  function func6(){
    wx.scanQRCode({
    needResult: 0, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
    scanType: ["qrCode","barCode"], // 可以指定扫二维码还是一维码，默认二者都有
    success: function (res) {
    var result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果
     }
    });
  }

</script>
</html>