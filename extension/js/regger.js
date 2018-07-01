let loc = location.href;
if(loc.indexOf('#auto') > 0){
	$(document).ready(function() {
		let gender = Random(0,2);
		let json = getInfo(gender);
		let name = json.name;
		let surname = json.surname;
		let firstname = $('[name=firstname]')[0];
		let lastname = $('[name=lastname]')[0];
		let dropdown = $('.b-dropdown__list__item');
		let radiogroup = $('.b-radiogroup__radio-border');
		$(firstname).val(name);
		$(lastname).val(surname);
		let rnd = Random(0,31);		
		$($(dropdown[rnd]))[0].click();
		rnd = Random(31,43);
		$($(dropdown[rnd]))[0].click();
		rnd = Random(63,72);
		$($(dropdown[rnd]))[0].click();
		$(radiogroup[gender]).click();
		$($(dropdown[162]))[0].click();
		let password = randomString(10);
		chrome.storage.local.set({password});
		$($('[name=password]')[0]).val(password);
		$($('[name=password_retry]')[0]).val(password);
		let retry = 0;
		let getlist = setInterval(function() {
			if (retry == 8){
				clearInterval(getlist);
				location.reload();
			}else{
				let list = $('.b-list__item__content');
				if (list.length > 0){
					retry = 0;
					let login = $(list[0]).text();
					chrome.storage.local.set({login});
					$(list[0]).click();
					let btn = $('button')[0];
					$(btn).click();
					clearInterval(getlist);
				}else{
					retry++;
				}
			}
		}, 200);
	});
}

function getInfo(gender){
	let url;
	if(gender == 0){
		url = 'https://uinames.com/api/?gender=male&region=russia';
	}else{
		url = 'https://uinames.com/api/?gender=female&region=russia';
	}
	let result;
	$.ajax({
		type:'GET',
		url,
		async: false,
		response:'json',
		success: function (json) {
			result = json;
		}
	});
	return result;
}

function Random(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function randomString(len, charSet) {
    charSet = charSet || 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var randomString = '';
    for (var i = 0; i < len; i++) {
        var randomPoz = Math.floor(Math.random() * charSet.length);
        randomString += charSet.substring(randomPoz,randomPoz+1);
    }
    return randomString;
}