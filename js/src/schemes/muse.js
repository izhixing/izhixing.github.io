// build time:Fri Oct 25 2019 15:09:13 GMT+0000 (Coordinated Universal Time)
$(document).ready(function(){function t(){var t=$("#footer").attr("position")?$(".container").height()+$("#footer").outerHeight(true):$(".container").height();if(t<window.innerHeight)$("#footer").css({position:"fixed",bottom:0,left:0,right:0}).attr("position","fixed");else $("#footer").removeAttr("style position")}t();$(window).on("resize scroll",t)});
//rebuild by neat 