//入口模块
define(["init"],function(){
	require(["shouye","module0","module1","module2","module3","module4","module5"], 
		function(shouye,m0,m1,m2,m3,m4,m5) {
			if (shouye&&m0&&m1&&m2&&m3&&m4&&m5) {
				console.log("--1--模块载入success");
			}else{
				console.log("--err--模块error");
			};
			$(document).ready(function(){
		   // 注意要在dom 载入之后绑定模块事件		
		   console.log("--2--DOM载入了");	

		   var  modules=[shouye,m0,m1,m2,m3,m4,m5];

		   for (var i = 0; i < modules.length; i++) {
		   	modules[i].init();
		   	modules[i].eventbind();
		   	if (i==0) continue;
		   	modules[i].close();		   	 
		   };
           
		   $.appContext['closeall']=function(){
		   	for (var i = 0; i < modules.length; i++) {
		   		modules[i].close();

		   	};
		   }; 
		});



		});
})



