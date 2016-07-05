define(["backbone"],function () {
  var Router1 = Backbone.Router.extend({
  routes: {
 //监听a href="#home" 跳到下面的
 // home1
    "home":                 "home1",    
    "leyuan":               "leyuan",  
    "order":                "order",
    "mine":                 "mine",
    "*actions": 			"defaultAction"
 //在没有 操作路由或者路径错误时 执行的情况，很必须
 //可以实现在加载时 调到第一个页面。
  },
  //这里体现了根据需要加载js文件，路由里面
  home1: function() {
    require(["./mod/home.js"],function(home){
      home.render();
    })
  },
  leyuan: function() {
     require(["./mod/leyuan.js"],function(home){
      home.render();
    })
  },
  order: function() {
     require(["./mod/order.js"],function(home){
      home.render();
    })
  },
  mine: function() {
     require(["./mod/mine.js"],function(home){
      home.render();
    })
  },
defaultAction:function(){
	  	location.hash = 'home';
	}
  // search: function(query, page) {
  //   ...
  // }
  });
var router = new Router1();
  return router;
})