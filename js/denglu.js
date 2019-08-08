	function beixindl(){
				getI(".dl-dl")[0].onclick=function(){
					var userphone=getI(".tp")[0].value;
					var userpass=getI(".tpas")[0].value;
					
					$.post("php/login.php",{userphone:userphone,
					userpass:userpass
					},
					function(str){
						if(str==0){
							alert("用户名或密码不对，请重新登录")
						}else{
							saveCookie("userphone",getI(".tp")[0].value,7);
							saveCookie("userpass",getI(".tpas")[0].value,7);
							let userphone=getCookie("userphone");
							if(userphone){
								window.location.href="index.html"
								getI(".top")[0].children[0].innerHTML=`[<a href="" class="dl" style="color:red;">${userphone}</a>]您好，欢迎来到北新网-新华书店综合网购平台！<span>[<a href="" class="back">退出</a>]</span>`;
							
							}else{
								getI(".top")[0].children[0].innerHTML=`您好，欢迎来到北新网-新华书店综合网购平台！<span>[<label class="dl">登录</label>]</span><span>[<a href="yanzheng.html">免费注册</a>]</span>`;
							}
							
							getI(".back")[0].onclick=function(event){
								let evt=window.event || event
								evt.preventDefault();
								saveCookie("userphone",userphone,-1);
								getI(".top")[0].children[0].innerHTML=`您好，欢迎来到北新网-新华书店综合网购平台！<span>[<label class="dl">登录</label>]</span><span>[<a href="yanzheng.html">免费注册</a>]</span>`;
							}
							getI(".denglu-bt")[0].style.display="none";
						}
					});
				}
			}