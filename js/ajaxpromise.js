


function ajaxPromise(obj){
	
		let defaultObj = {
			"url":"#",
			"method":"get",
			"params":{},
			"func":null,
			"isAsync":true
		};
		ajaxObj = {};
		for(let key in defaultObj){
			ajaxObj[key] = obj[key] || defaultObj[key];
		}
		//1、创建对象
		let xhr = new XMLHttpRequest();
		let sendstr ="";
		for(let key in ajaxObj.params){
			sendstr += `${key}=${ajaxObj.params[key]}&`;
		}
		if(sendstr.length>0){
			sendstr = sendstr.substring(0,sendstr.length-1); 
		}
		let urlAndParam = ajaxObj.url;
		if(ajaxObj.method.toLowerCase()=="get" && sendstr!=""){
			urlAndParam+= "?"+sendstr;
		}
		//2、设置请求参数
		xhr.open(ajaxObj.method,urlAndParam,ajaxObj.isAsync);
		//3、设置回调函数
		let p=new Promise(function(resolve,reject){
			xhr.onreadystatechange = function(){
			if(xhr.readyState==4){
					if(xhr.status==200){
						if(resolve){
							resolve(xhr.responseText);
						}
					}else{
						if(reject){
							reject("服务器出错了");
						}
					}
				}
			}
		});
		
		if(ajaxObj.method.toLowerCase()=="post"){
			xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
			xhr.send(sendstr);
		}else{
			//4、发送请求
			xhr.send();	
		}
		return p;
	}