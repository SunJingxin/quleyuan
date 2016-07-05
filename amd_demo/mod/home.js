define(["text!../../tpl/home.html","./weixin.js"],function(html){
  function render(){
  
  
   wx.error(function(res){
      alert(JSON.stringify(res));
   })
   wx.ready(function(){
            wx.getLocation({
            type: 'wgs84', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
            success: function (res) {
                var latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
                var longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
                var speed = res.speed; // 速度，以米/每秒计
                var accuracy = res.accuracy; // 位置精度
                alert("您的纬度"+latitude+"|"+"您的经度"+longitude);
                callback();
            },
            fail:function(){
                alert('fail');
            }
        }); 
     })
	function callback(){

		 	//加载页面
		  $("#tc").html(html); 
       //  实现轮播
		 	var headerdiv=document.getElementsByClassName("header-div")[0];
		 	var headerul=document.getElementsByClassName("header-ul")[0];
		 	var oLi=headerul.children;
		 	clearInterval(setClear);
		 	var setClear=setInterval(move1,3000)
		 	var count=0;
		 	function move1(){
		 	  for(var i=0;i<oLi.length;i++){
		 	   	oLi[i].className="";
		 	  }
		 	  oLi[count].className="header-ul-li";	   	 	
		 	  headerdiv.style.left=-16*count+"rem";	
		 	  count++;	  
		 	  if(count==4){
		 	   	count=0;
		 	  }
		 	}	//over
	}
		 			 					 			 	
		 	
  }
  return {
  	render:render
  }
})
