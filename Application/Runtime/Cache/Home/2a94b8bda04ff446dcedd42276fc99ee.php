<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html>
<head lang="zh-CN">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta charset="UTF-8">
	<title>西城文保</title>
	<link rel="stylesheet" type="text/css" href="/thinkphp_3.2.3_full/Public/static/node_modules/bootstrap/dist/css/bootstrap.css">
	<style type="text/css">
		body {
			padding-bottom: 50px;
		}
		.head{
			height:135px;
			background-color: pink;
		}
		.tool{
			height: 25px;

		}	
		.tool .left{
			min-height:25px;
			background-color: black;
		} 
		.tool .right{
			min-height: 25px;
			background-color: green;
		}
		.main{
			min-height:400px;

		} 
		.main .left{
			min-height: 400px;
			background-color: blue;
		}
		.main .right{
			min-height: 400px;
			background-color: black;
		}
		.bottom {
			height: 0px;
			background-color: black;
		}
	</style>
</head>
<body>
	
	<div class="container-fluid">
		<div class="row head">
			<div class="col-md-10"> 

			</div>
			<div class="col-md-2">
				<div class="btn-group">
					<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
						你好，<?php echo session('loginUserName');?> <span class="caret"></span>
					</button>
					<ul class="dropdown-menu" role="menu">
						
						<li><a href="#">修改密码</a></li>
						<li><a href="#">修改昵称</a></li>
						<li class="divider"></li>
						<li><a href="<?php echo U('Home/Login/logout');?>">退出</a>
						</ul>
					</div>




				</div>
			</div>
			<div class="row tool">
				<div class="col-md-3 left">工具栏</div>
				<div class="col-md-9 right">工具栏</div>
			</div>
			<div class="row main">
				<div class="col-md-3 left">左侧</div>
				<div class="col-md-6" >中间</div>
				<div class="col-md-3 right">右侧</div>
			</div>
			<div class="row bottom">
				<div class="col-md-12">
				</div>

			</div>

		</div> 
		<nav class="navbar navbar-default navbar-fixed-bottom">
		</nav>
	</body>
	<script type="text/javascript" src="/thinkphp_3.2.3_full/Public/static/node_modules/jquery/dist/jquery.js"></script>
	<script type="text/javascript" src="/thinkphp_3.2.3_full/Public/static/node_modules/bootstrap/dist/js/bootstrap.js"></script>
	</html>