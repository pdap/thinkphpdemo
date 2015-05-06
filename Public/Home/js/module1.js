define(function(){
	// 模块书写规范,私有属性和方法加_前缀，
	// 私有属性和方法名称使用小写字母,禁止使用驼峰风格
	// 模块功能描述
	// 模块内部私有方法和属性
	 
	function _init (){
      
         
    };
   var _btnid= function(){
   	return $('#'+"xsgc"); 
   } // 缓存模块主按钮jq对象
   var _domid=function(){
   	return $('#'+"xsgc_UI");
   } // 缓存模块主面板jq对象

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

         console.log('模块1事件绑定');
         var t=this;
         this.btnid.on('click',function(e){
         t.show();
         console.log('模块1事件触发');
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