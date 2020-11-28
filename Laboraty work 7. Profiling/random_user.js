function add(s, f) {
	var j;
	var log = 'user';
	for (j = s; j <= f; j++) {
	   var fullname = '';
	   log = 'user';
	   var r = '';
	   var ph = 'C:\Users\ASUS\Desktop\JS\MongoDB\ЛАБА № 6\6.jpg';
	   var DoB = '';

	   var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz';
	   var num = '1234567890';
	   var charactersLength = characters.length;
	   var numLength = num.length;
	   
	   for (var i = 0; i < 10; i++ ) {
		  fullname += characters.charAt(Math.floor(Math.random() * charactersLength));
	   }
	   
	   log += j;
	   	   
	   var value = Math.floor(Math.random()*3);
	   if (value == 1)
			r = 'Администратор';
	   else if (value == 2)
			r = 'Кассир';
	   else
			r = 'Покупатель';
		
		ph += j + '.jpg';
		
		var year = Math.floor(Math.random()*(2019-1965+1)) + 1965;
		var month = Math.floor(Math.random()*(12-1+1)) + 1;
		var day = Math.floor(Math.random()*(30-1+1)) + 1;
		
		if (month < 10)
			month = '0' + month;
		if (day < 10)
			day = '0' + day;
		
		DoB = year + '-' + month + '-' + day;
		db.user.insert([{_id: j, full_name: fullname, login: log, pass: log, role: r, user_date: { photo: ph, dob: ISODate(DoB)}}])
	}
	db.user.insert({_id:j, full_name:"Матвеева Катерина Владимировна ", login:(log+j), pass:(log+j), role:"Библиотекарь", user_date: {photo:"D:\Education\3 cource\SPBD\lab1\1.jpg", dob:new Date()}})
}
