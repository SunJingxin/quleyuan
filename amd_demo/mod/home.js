define(["text!../../tpl/home.html"],function(html){
  function render(){
  	//加载页面
    $("#tc").html(html)
    //实现轮播
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
		 	}	 
  }
  return {
  	render:render
  }
})
