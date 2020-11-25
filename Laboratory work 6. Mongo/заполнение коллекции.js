db.users.insert([
{
_id: 1, 
login: "user",
password: "user",
role: "user",
user_date:
	{photo:"C:\Users\ASUS\Desktop\JS\MongoDB\ЛАБА № 6\6.jpg",
	dob:ISODate("1987-08-20")}
},

{_id: 2,
login: "cashier",
password: "cashier",
role: "cashier",
user_date:
	{photo:"C:\Users\ASUS\Desktop\JS\MongoDB\ЛАБА № 6\7.jpg",
	dob:ISODate("1997-10-02")}
},
{_id: 3,
login: "admin",
password: "admin",
role: "admin",
user_date:
	{photo:"C:\Users\ASUS\Desktop\JS\MongoDB\ЛАБА № 6\1.jpg",
	dob:ISODate("1995-01-01")}
}
])
db.carriages.insert([
{_id: 11, number: 1, type:["common", "econom class"], captain: "Тимофеев М.Ф.",smoking: "true"}, 
{_id: 12, number: 2, type:["coupe", "econom class"], captain: "Поляков П.Е.",smoking: "false"}, 
{_id: 13, number: 3, type:["common", "coupe"], captain: "Иванов П.Е.",smoking: "true"}, 
{_id: 14, number: 4, type:["coupe", "econom class"], captain: "Туров В.Э.",smoking: "true"}, 
{_id: 15, number: 5, type:["common", "coupe"], captain: "Игнатьев З.М.",smoking: "false"}, 
{_id: 16, number: 6, type:["coupe", "common"], captain: "Огаренко П.И.",smoking: "false"}, 
])

db.tickets.insert([
{_id: 101, user_id: 1, carriage_id: 16, half_free: "true", package_freight: "false", date_issue:ISODate("2020-10-19")}, 
{_id: 102, user_id: 1, carriage_id: 14, half_free: "true", package_freight: "true", date_issue:ISODate("2020-11-15"), }, 
{_id: 103, user_id: 2, carriage_id: 11, half_free: "false", package_freight: "false", date_issue:ISODate("2020-10-21"),}, 
{_id: 104, user_id: 3, carriage_id: 11, half_free: "true", package_freight: "false", date_issue:ISODate("2020-10-23"),}, 
{_id: 105, user_id: 2, carriage_id: 13, half_free: "false", package_freight: "true", date_issue:ISODate("2020-11-11"),}, 
{_id: 106, user_id: 2, carriage_id: 12, half_free: "true", package_freight: "false", date_issue:ISODate("2020-11-19"),}, 
{_id: 107, user_id: 1, carriage_id: 15, half_free: "false", package_freight: "false", date_issue:ISODate("2020-10-16"),}, 
{_id: 108, user_id: 3, carriage_id: 14, half_free: "true", package_freight: "true", date_issue:ISODate("2020-10-15"),}, 
])



