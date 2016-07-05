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
 <script src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
 <script src="mod/weixin.js"></script>
<link rel="stylesheet" type="text/css" href="css/reset.css"/>
 <link rel="stylesheet" type="text/css" href="css/footer.css"/>
 <link rel="stylesheet" type="text/css" href="css/index0.css"/>

 <title>去乐园</title>
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

<body>
  <div id="tc">	
    <a class="wrapper" href="index_back.html">
			<img src="img/myself1/images/welcome_03.png" />
			<!--<img src="img/myself1/images/welcome1_06.png" />-->
			<img src="img/map.gif" id="img3"/>
			<span>让乐园更有趣</span>
			<span id="span2">定位中。。。</span>
			<span></span>
	</a>
  </div>
  <div class="footer">
	  	<a href="#/home">
	  	  <img src="img/logo1.gif"/>
	  	  <span class="footer-a-span">首页</span>
	  	</a>
	  	<a href="#/leyuan">
	  	  <img src="img/logo2b.gif"/>
	  	  <span>乐园</span>
	  	</a>
	  	<a href="#/order">
	  	  <img src="img/logo3b.gif"/>
	  	  <span>乐享卡</span>
	  	</a>	  	
	  	<a href="#/mine">
	  	  <img src="img/logo4b.gif"/>
	  	  <span>我的</span>
	  	</a>
  </div>
 <script src="mod/footer.js"></script>
  <script type="text/javascript" src="lib/require.js" data-main="main.js"></script>
  <!--?????-->
  <!--<script type="text/javascript" src="main.js"></script>-->
  <script>
    wx.config({
    appId: '<?php echo $signPackage["appId"];?>',
    timestamp: <?php echo $signPackage["timestamp"];?>,
    nonceStr: '<?php echo $signPackage["nonceStr"];?>',
    signature: '<?php echo $signPackage["signature"];?>',
    jsApiList: [
      'getLocation'
     ]
   });
// wx.error(function(res){
//    alert(JSON.stringify(res));
// })
// wx.ready(function(){
//          wx.getLocation({
//          type: 'wgs84', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
//          success: function (res) {
//              var latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
//              var longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
//              var speed = res.speed; // 速度，以米/每秒计
//              var accuracy = res.accuracy; // 位置精度
//              alert(latitude+"|"+longitude);
////              callback();
//          },
//          fail:function(){
//              alert('fail');
//          }
//      }); 
//  })
		 		 		
  </script>
</body>
</html>