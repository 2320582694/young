//二维码
//意义：不少网站为了防止用户利用机器人自动注册、登录、灌水，都采用了验证码技术
var code;
function createCode(){
	code = '';
	var codeLength = 6;//规定验证码的长度
	var checkCode = document.getElementById('checkCode');
	var codeChars = new Array(//创建所有构成验证码的字符数组  ，也可以用中文
		0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 
      'a','b','c','d','e','f','g','h','i','j','k','l','m',
      'n','o','p','q','r','s','t','u','v','w','x','y','z',
      'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K',
      'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 
      'W', 'X', 'Y', 'Z'
	)
	for(var i=0;i<codeLength;i++){
		var charNum = Math.floor(Math.random()*52);//获取随机的小于52的字符
		code += codeChars[charNum];//将随机的六位数作为数组的索引 取出对应的值
		console.log(charNum)
	}
	if(checkCode){//拿到验证码的div
		checkCode.className = 'code';//添加样式
		checkCode.innerHTML = code;//让div输出验证码
	}
}