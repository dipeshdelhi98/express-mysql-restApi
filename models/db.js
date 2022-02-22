const dbConfig=require('../config/db.config');
const mysql=require('mysql')

const connection=mysql.createConnection({
    host:dbConfig.HOST,
    user:dbConfig.USER,
    password:dbConfig.PASSWORD,
    database:dbConfig.DB
})


connection.connect((error)=>{
    if(error) {
        console.log("SOmething Went Wrong",error)
    }

    console.log("Connection Successful")

   
});


module.exports=connection