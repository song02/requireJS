//设置文件路径
require.config({
	paths : {
		jquery : "jquery-1.11.3",
		cookie : 'jquery.cookie'
	}
});
require(['jquery','cookie'],function($,cookie){
	$(function(){
		$.cookie('key','value',{expires:7,path:'/'});
		alert('hello');
		alert($.cookie('key'));
	})
})
