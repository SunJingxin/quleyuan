 			//实现 点击变换颜色
	var footer=document.getElementsByClassName("footer")[0];
	var oAs=footer.children;
	for(var i=0;i<oAs.length;i++){
	  (function(num){
	  	//touch事件 移动端 监听事件
	  	oAs[num].addEventListener("click",function(e){
	  	 //在循环中去掉 红色
	     for(var j=0;j<oAs.length;j++){
	       //去掉span的红色
	       oAs[j].children[1].className=""; 
	       var a=[];
	      //因为 a 的变量与 数组关系坑了
	      //去掉 红色图片
          a[j]=oAs[j].children[0].src.slice(-5,-4);
          for(var k=0;k<a.length;k++){
          	  if(Number(a[k])){
              var b="img/logo"+a[k]+"b.gif";
               oAs[k].children[0].src=b;
            }	  
          } 
	     }//for over 	
	    //被点击加红色
	  	oAs[num].children[1].className="footer-a-span";
	  	//实现加红色图片
	  	var c=oAs[num].children[0].src.slice(-6,-5);
	  	var d="img/logo"+c+".gif";
	  	oAs[num].children[0].src=d;
	  	},false);
	  })(i)  	  
	}