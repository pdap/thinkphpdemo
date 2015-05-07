define(function(){
	// 模块书写规范,私有属性和方法加_前缀，
	// 私有属性和方法名称使用小写字母,禁止使用驼峰风格
	// 模块功能描述
	// 模块内部私有方法和属性
	  
	function _init (){
        //  dom加载后执行
        //    
        _getdata().then(function(res){
        	var xml = $( res ),
        		title = xml.find( 'menu' ),
        	  menu=  _domid();
          	menu.html('');
        	console.log(title);
        	for (var i = 0; i < title.length; i++) {
        		menu.append('<ul><li><a href="#">'
        			+title[i].getAttribute('name')
        			+'</a></li></ul>');
        		var items= title[i].getElementsByTagName('item') ;
        		for (var j = 0; j < items.length; j++) {
        			 var item=items[j]['innerHTML']||items[j]['textContent'];
        			menu.children().last().append('<li><a href="#">'
        				+ item
        				+'</a></li>') ;	 
        		}
        	};


        }, function(err){
        	console.log(err);
        })
    };

    // 调取模块初始化所需数据
    function _getdata(){
    	var s=$.get($.appContext.baseUrl
    		+'/Public/Home/xml/layer.xml',
    		function(res){
    		return res;
    	}) ;  
          return s; // 返回异步对象，可使用s.then(funcsuccess,funcfail)来处理
      };
   var  _btnid= function(){
   	return $('#'+"shouye"); 
   }; // 缓存模块主按钮jq对象
   var  _domid=function(){
   	return $('#'+"shouye_UI");
   } ;// 缓存模块主面板jq对象
 


     // 当模块被调用的时候会执行此方法
     
// 私有方法和属性结束
// =========================================
// 需要对外暴露的方法和属性
      return{
      	init:function(){
      		 _init();
      	},
      	btnid:_btnid(),
      	domid:_domid(),  
      	visiable:false,   
      	eventbind:function(){

         console.log('首页事件绑定');
         var t=this;
         this.btnid.on('click',function(e){
         t.show();

         console.log('首页事件触发');
         });
      	},
      	show:function(){
        $.appContext['closeall']();
         this.domid.show();
         this.visiable=true;

        },
        close:function(){
      	this.domid.hide();
      	this.visiable=false;
        }
  }
})