alert(a + 3);
define(function(){
	var a = 3;
	function fn(){
		return a;
	}
	return {
		a : a,
		fn : fn
	}
})