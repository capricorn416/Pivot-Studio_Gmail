window.onload = function(){
	var i = 0;
	var mbox = document.getElementById("menu-box");
	var mbody = document.getElementById("main-body");
	var hbox = document.getElementById("hidden-area");
	//点击“主菜单”导航抽屉打开和关闭
	document.getElementById("menu-button").onclick = function(){
		if(i%2 == 0){
			mbox.style.display = "none";
			hbox.style.display = "block";
			mbody.style.left = mbody.offsetLeft -180 + 'px';
		}else{
			mbox.style.display = "block";
			hbox.style.display = "none";
			mbody.style.left = mbody.offsetLeft +180 + 'px';
		}
		i++;
	}
	
	var writeBox = document.getElementById("writebox");
	var miniArea = document.getElementsByClassName("mini-area")[0];
	//点击“写邮件”出现写邮件页面
	document.getElementById("writeButton").onclick = function(){
		writeBox.style.display = "block";
	}
	//写邮件页面的关闭
	document.getElementsByClassName("close")[0].onclick = function(){
		writeBox.style.display = "none";
	}
	//写邮件页面的缩小（最小化）
	document.getElementsByClassName("mini")[0].onclick = function(){
		writeBox.style.display = "none";
		miniArea.style.display = "block";
	}
	
	var j = 0;
	document.getElementsByClassName("change-font")[0].onclick = function(){
		if(j%2 == 0){
			document.getElementsByClassName("change-font_area")[0].style.display = "block";
		}else document.getElementsByClassName("change-font_area")[0].style.display = "none";
		j++;
	}
	
	var k = 0;
	document.getElementsByClassName("font-size-change")[0].onclick = function(){
		if(k%2 == 0){
			document.getElementsByClassName("font-size-choice")[0].style.display = "block";
		}else document.getElementsByClassName("font-size-choice")[0].style.display = "none";
		k++;
	}
	
	//改变字体大小
	var w = document.getElementById("w");
	var s1 = document.getElementById("size1");
	var s2 = document.getElementById("size2");
	var s3 = document.getElementById("size3");
	var s4 = document.getElementById("size4");
	sizeChange(s1);
	sizeChange(s2);
	sizeChange(s3);
	sizeChange(s4);
	function sizeChange(s){
		s.onclick = function(){
			s1.style.backgroundColor = "white";
			s2.style.backgroundColor = "white";
			s3.style.backgroundColor = "white";
			s4.style.backgroundColor = "white";
			s.style.backgroundColor = "rgb(240,243,244)";
			w.style.fontSize = window.getComputedStyle(s).fontSize;
		}
	}
	
	//写邮件页面的拖拽移动
	var moveArea = document.getElementById("moveArea");
	drag(writeBox);
	function drag(obj){
		moveArea.onmousedown = function(e){
			var oevent = e || event;
			var distanceX = oevent.clientX - writeBox.offsetLeft;
			var distanceY = oevent.clientY - writeBox.offsetTop;
			
			document.onmousemove = function(e){
				var oevent = e || event;
				obj.style.left = oevent.clientX - distanceX + 'px';
				obj.style.top = oevent.clientY - distanceY + 'px';
			}
			
			document.onmouseup = function(){
				document.onmousemove = null;
				document.onmouseup = null;
			}
		}
	}
	

}

