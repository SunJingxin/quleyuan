define(["text!../../tpl/mine.html"],function(html){
  function render(){
    $("#tc").html(html);
    console.log("mine");
  }
  return {
  	render:render
  }
})
