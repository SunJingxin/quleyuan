require.config({
  baseUrl:"./lib",
  paths:{
    jquery:"jquery",
    backbone:"backbone",
    underscore:"underscore",
    text:"text"
  }   
})
require(["jquery","./router.js","./mod/1.js"],function ($) {
  Backbone.history.start();
})