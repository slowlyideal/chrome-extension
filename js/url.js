var save_url = document.getElementById('save');
save_url.onclick =  //动态绑定  非动态绑定会直接执行
function urlsave(){
	//链接获取并存储
	//console.log("fuck");
	//alert("确定将当前url保存吗？");
	chrome.tabs.query({
	status:"complete"
	}, function(tabArray){
	console.log(tabArray);
	//存储  
	obj = JSON.stringify(tabArray) //转换一下格式
	localStorage.setItem("temp",obj);
    });
	//console.log("hhh");
}


var open_url = document.getElementById('open');
open_url.onclick =     //动态绑定  非动态绑定会直接执行
function urlopen(){
	//链接读取并打开
	url = localStorage.getItem("temp");
	//console.log(url);
	obj=JSON.parse(url);//格式转换
	//console.log(obj);
	//console.log(obj[1]);
	//打开
	//console.log(obj.length);
	for(i=0;i<obj.length;i++)
	{
		chrome.tabs.create({
		url:obj[i].url
		},function(tab){
		//console.log("aaa");
		});
	}

}

//https://www.jb51.net/article/46639.htm
//https://www.cnblogs.com/xlizi/p/11741751.html
//https://www.runoob.com/cssref/css-colors.html
/*
function urlopen(){
	//链接读取并打开
	url = localStorage.getItem("temp");
	//console.log(url);
	obj=JSON.parse(url);//格式转换
	//console.log(obj);
	//console.log(obj[1]);
	//打开
	//console.log(obj[1].url);

	chrome.tabs.create({
	url:obj[2].url
	},function(tab){
	//console.log("aaa");
	});
}
function urlsave(){
	//链接获取并存储
	//console.log("fuck");
	chrome.tabs.query({
	status:"complete"
	}, function(tabArray){
	console.log(tabArray);
	//存储  
	obj = JSON.stringify(tabArray) //转换一下格式
	localStorage.setItem("temp",obj);
    });
	//console.log("hhh");
}

*/