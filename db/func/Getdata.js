const config = require('../db/config');
 function GetIdfromuserlogin(param,callback) {
    var idkar = ""
    config.pool.query("select id from tb_karyawan where user_login = ?",[param],(err,rese)=>{
        if(err)
        {
            console.log(err)
        }
        else
        {
            idkar = rese[0].id;
            callback(idkar) 
        }
        
        
    })
 }
exports.modules = {GetIdfromuserlogin}