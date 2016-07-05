define(["text!../../tpl/leyuan.html"],function(html){
  function render(){
    $("#tc").html(html);
     //1,实现 点击变换border
    //2,点击实现切换子菜单
    //3，阻止事件冒泡
    var header=document.getElementsByClassName("header")[0]
	  var oLi=header.children;
	  for(var i=0;i<oLi.length;i++){
	  	(function(num){
	  	  oLi[num].addEventListener("click",function(e){
	  	  	 e.stopPropagation();
	  	  	 $(".header-cover").css("display","block");
			     for(var j=0;j<oLi.length;j++){
			     oLi[j].className="";
			     oLi[j].children[1].style.display="none";		     
			    }
			    oLi[num].className="header-li";				    
			    oLi[num].children[1].style.display="block";	
			    oLi[num].children[1].style.display="flex";	
			    oLi[num].children[1].onclick=function(e){
			    	 e.stopPropagation();
			    	this.style.display="none";
		  	  	$(".header-cover").css("display","none");		    	
			    }
			    innerH();
		    },false)
	  	})(i)
	  }
	 //实现点击隐藏 li的子菜单
   //点击 cover ul 子菜单消失
   $(".header-cover")[0].addEventListener("click",function(){
   	 for(var i=0;i<oLi.length;i++){
     	 oLi[i].children[1].style.display="none";	     	 
     }
     $(".header-cover").css("display","none");
     console.log("over")
   },true);

   //a 的监听事件
   function innerH(){
   	var oA=$(".header .header-li ul li a");
   	   for(var j=0;j<oA.length;j++){
   	   	(function(num){
   	   			oA[num].addEventListener("click",function(){
   	   				var cun=$(".header .header-li span")[0].innerHTML
   	   				$(".header .header-li span")[0].innerHTML=oA[num].innerHTML;
   	   				if(oA[num].innerHTML==""){
   	   					$(".header .header-li span")[0].innerHTML=cun;   	   					
   	   				}
//多种Ajax取数据的方法；
//1 jQuery
      if(oA[num].innerHTML=="东城区"){
   	    $(".main").html("")
   	    console.log("东城区")
   	   	$.ajax({
         url:"data/p24.json",
         type:"get",   
         success:function (data) {         	
         	var data=data.data;
         	//data是数组，对象数组       
               for(var i=0;i<data.length;i++){
         	
         var div=$("<div class='main-div'></div>");
         var img0=$("<img class='main-div-img load-img'/>");
             img0.attr("src","./img/1.jpg");
             img0.attr("data-src",data[i].img);
         var a=$("<a></a>");
          //.css("background-image","url("+data[i].img+")")
             a.attr("href","./myhtml/zhifu.html")
             a.css("display","block");
         var img1=$("<img class='main-a-img1'/>").attr("src","img/border.gif")
         var img2=$("<img class='main-a-img2' />").attr("src","img/map.gif")
         var span1=$("<span class='main-a-span1'></span>").html(data[i].name); 
         var span2=$("<span class='main-a-span2'></span>").html(data[i].address);
         var span3=$("<span class='main-a-span3'></span>").html(data[i].dist+" "+"公里");  
         	 a.append(img1);
         	 a.append(img2);
         	 a.append(span1);
         	 a.append(span2);
         	 a.append(span3);
         	 div.append(img0);
         	 div.append(a);
         	 $(".main").append(div);
         	  lazyLoad.init();
         	}//for
          },//success
          timeout: 3000
        })//ajax	
     }//jQuery  取数据的方法
// 原生 js取数据的方法
   //2 原生 js
   //做兼容性处理
   function  createXHR(){
   	if( typeof XMLHttpRequest!="undefined"){
   	 return new XMLHttpRequest();  	
   	}   
   	//IE
   else if(typeof arguments.callee.activeXString!="string"){
   		//MSXML2是微软
   		var versions = ["MSXML2.XMLHttp.6.0","MSXML2.XMLHttp.3.0",
   		     "MSXML2.XMLHttp"],i,len;
   		for(i=0;len=versions.length;i++){
   			
   			try{
   				new ActiveXObject(versions[i]);
   			    arguments.callee.activeXString=versions[i]
   			    break;
   			}catch(ex){
   				
   			}	
   		}	
   		return new ActiveXObject(arguments.callee.activeXString)
   	}else {
   		throw new Error("没有异步对象");
   	}
   };
    var xhr = createXHR();
    function requestData(){
        xhr.onreadystatechange = call;
        xhr.open('get','data/p22.json',true);
        xhr.send(null);
         lazyLoad.init();
    }    
    function call(){    	
      if(xhr.readyState==4){
      	if((xhr.status>=200&&xhr.status<300)||xhr.status==304){
      	var objs = JSON.parse(xhr.responseText);	         
      	var data=objs.data;
         	//data是数组，对象数组       
                for(var i=0;i<data.length;i++){
         	
         var div=$("<div class='main-div'></div>");
         var img0=$("<img class='main-div-img load-img'/>");
             img0.attr("src","./img/1.jpg");
             img0.attr("data-src",data[i].img);
         var a=$("<a></a>");
          //.css("background-image","url("+data[i].img+")")
             a.attr("href","./myhtml/zhifu.html")
             a.css("display","block");
         var img1=$("<img class='main-a-img1'/>").attr("src","img/border.gif")
         var img2=$("<img class='main-a-img2' />").attr("src","img/map.gif")
         var span1=$("<span class='main-a-span1'></span>").html(data[i].name); 
         var span2=$("<span class='main-a-span2'></span>").html(data[i].address);
         var span3=$("<span class='main-a-span3'></span>").html(data[i].dist+" "+"公里");  
         	 a.append(img1);
         	 a.append(img2);
         	 a.append(span1);
         	 a.append(span2);
         	 a.append(span3);
         	 div.append(img0);
         	 div.append(a);
         	 $(".main").append(div);
         	}//for
      }
    }
 }
if(oA[num].innerHTML=="西城区"){
	 $(".main").html("");
	  requestData(); 	
}
// jQuery 取数据 baiduTemplate
  




   	   			},false)
   	   	})(j)  	   	
   	   }
   }   
 //---------------------------------------------------------------------------------------
    //ajax采集主页面数据部分
	 	$.ajax({
         url:"data/p2.json",
         type:"get",   
//       dataType: 'jsonp',
//		   data: '',
//		   jsonp: 'callback',
         success:function (data) {         	
         	var data=data.data;
         	//data是数组，对象数组       
        for(var i=0;i<data.length;i++){
         	
         var div=$("<div class='main-div'></div>");
         var img0=$("<img class='main-div-img load-img'/>");
             img0.attr("src","./img/1.jpg");
             img0.attr("data-src",data[i].img);
         var a=$("<a></a>");
          //.css("background-image","url("+data[i].img+")")
             a.attr("href","./myhtml/zhifu.html")
             a.css("display","block");
         var img1=$("<img class='main-a-img1'/>").attr("src","img/border.gif")
         var img2=$("<img class='main-a-img2' />").attr("src","img/map.gif")
         var span1=$("<span class='main-a-span1'></span>").html(data[i].name); 
         var span2=$("<span class='main-a-span2'></span>").html(data[i].address);
         var span3=$("<span class='main-a-span3'></span>").html(data[i].dist+" "+"公里");  
         	 a.append(img1);
         	 a.append(img2);
         	 a.append(span1);
         	 a.append(span2);
         	 a.append(span3);
         	 div.append(img0);
         	 div.append(a);
         	 $(".main").append(div);
         	};//for  
          },//success
          timeout: 3000
        })//ajax
  }
  return {
  	render:render
  }
})
