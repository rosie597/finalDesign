const mysql=require('mysql');

// 数据库连接池 
const db=mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '666666',
    database: 'final_design'
});

module.exports = (sql, callback) => {
	return new Promise((resolve, reject) => {
		db.query(sql, (err, data) => {
			if (err) reject(err);
			else resolve(data);
		});
	});
};