define(["text!../../tpl/order.html"],function(html){
  function render(){
    $("#tc").html(html);
     console.log("order");
  }
  return {
  	render:render
  }
})
