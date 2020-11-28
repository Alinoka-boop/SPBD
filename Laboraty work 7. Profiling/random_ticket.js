function add_r(s, f) {
	var j;
	for (j = s; j <= f; j++) {
	   var di = '';
	   var dr = '';
	   var r = '';

	   var u = Math.floor(Math.random()*(1000000 - 1 + 1)) + 1;
	   var b = Math.floor(Math.random()*(2000000 - 1000001 + 1)) + 1000001;
		
		var y1 = Math.floor(Math.random()*(2020-2015+1)) + 2015;
		var m1 = Math.floor(Math.random()*(12-1+1)) + 1;
		var d1 = Math.floor(Math.random()*(30-1+1)) + 1;
		
		var y2 = Math.floor(Math.random()*(2020-2015+1)) + 2015;
		var m2 = Math.floor(Math.random()*(12-1+1)) + 1;
		var d2 = Math.floor(Math.random()*(30-1+1)) + 1;
		
		if (m1 < 10)
			m1 = '0' + m1;
		if (m2 < 10)
			m2 = '0' + m2;
		if (d1 < 10)
			d1 = '0' + d1;
		if (d2 < 10)
			d2 = '0' + d2;
		
		if (y1 > y2) {
			var q;
			q = y1;
			y1 = y2;
			y2 = q;
			q = m1;
			m1 = m2;
			m2 = q;
			q = d1;
			d1 = d2;
			d2 = q;
		}	
		
		di = y1 + '-' + m1 + '-' + d1;
		dr = y2 + '-' + m2 + '-' + d2;
		
	   var value = Math.floor(Math.random()*2);
	   if (value == 1)
			r = 'TRUE';
	   else
			r = 'FALSE';
		
		db.ticket.insert([{_id: j, user_id: u, poezd_status: {poezd_id: b, date_issue:ISODate(di), date_o:ISODate(dr), ot: r}}])
	}
	db.ticket.insert([{_id: j, user_id:102, poezd_status: {poezd_id:1000002, date_issue:ISODate("2020-10-19"), date_o:ISODate("2020-10-25"), ot:"FALSE"}}, {_id: (j + 1), user_id:103, poezd_status: {poezd_id:1000005, date_issue:ISODate("2020-01-01"), date_o:ISODate("2020-01-20"), ot:"TRUE"}}, {_id: (j + 2), user_id:103, poezd_status: {poezd_id:1000004, date_issue:ISODate("2020-09-20"), date_o:ISODate("2020-10-14"), ot:"FALSE"}}, {_id: (j + 3), user_id:104, poezd_status: {poezd_id:1000001, date_issue:ISODate("2019-08-02"), date_o:new Date(), ot:"TRUE"}}])
}
