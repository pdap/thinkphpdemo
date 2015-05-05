define(function(){
   function _init (){
        // 调用的时候执行
	}
	_init();
	
	
	return{
		init:function(){
			_init();
		},

		show:function(){
            
			var s=$.get($.appContext.baseUrl+'Public/Home/xml/test.xml',function(res){
               return res;
			})

           
          return s;//这是一个异步对象，可以使用s.then(fun1,fun2)来处理ajax异步数据
	}
	}
})