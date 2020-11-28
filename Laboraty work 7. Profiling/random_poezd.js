function add_p(s, f) {
	var j;
	for (j = s; j <= f; j++) {
	   var n = '';
	   var a = '';
	   var adr = '';
	   var p = '';
	   var g1 = '';
	   var g2 = '';

	   var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz';
	   var charactersLength = characters.length;
	   
	   var val = Math.floor(Math.random()*3);
	   if (val == 1)
			a = 'common';
	   if (val == 2)
			a = 'coupe';
           else
			a = 'econom';
	
	for (var i = 0; i < 12; i++) {
		   n += characters.charAt(Math.floor(Math.random() * charactersLength));
	   } 	
	   
	   var value = Math.floor(Math.random()*2);
	   if (value == 1)
			p = 'TRUE';
	   else
			p = 'FALSE';
		
		for (var i = 0; i < 7; i++ ) {
		  g1 += characters.charAt(Math.floor(Math.random() * charactersLength));
		  g2 += characters.charAt(Math.floor(Math.random() * charactersLength));
	   }
	   
		db.poezd.insert([{_id: j, name: n, type: a, captain:[g1, g2], smoking: p}])
	}
	db.poezd.insert({_id: j, name:"Красная звезда", type:"coupe", captain:["Иванов", "Петров"], smoking:"FALSE"})
}