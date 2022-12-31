const config = require('./db/config')


config.pool.query("select * from tb_karyawan",(err,rows,fields)=>{
    if(err) 
    {
        console.err(err);
    }
    console.log(rows)
})