const config = require('./db/config')
const express = require('express');
const Encrypt = require('./db/Encrypt');
const Validjam = require('./func/Jammasuk')
const caridata = require('./func/Getdata')
const app = express();
const port = 5000
const moment = require('moment')
const pdf = require('./func/Pdf')
const { DownloaderHelper } = require('node-downloader-helper')
app.use(express.json())

app.get('/karyawan',(req,res)=>{
    config.pool.query("SELECT id,nama,tmp_lahir,tgl_lahir,jenis_kelamin,alamat,email,status,jabatan, "+
    "golongan,bulan_kerja,format(jumlah_gaji,'id_ID') as jumlah_gaji,user_login,password  from tb_karyawan",(err,rows,fields)=>{
        if(err) 
        {
            console.error(err);
        }
        
        res.send(rows);
    })
    
})
app.get('/totalkaryawan',(req,res)=>{
    config.pool.query("select count(*) as total from tb_karyawan",(err,rese)=>{
        res.send(rese)
    })
})
app.get('/datakaryawan',(req,res)=>{
    config.pool.query("SELECT id,nama,tmp_lahir,tgl_lahir,jenis_kelamin,alamat,email,status,jabatan, "+
    "golongan,bulan_kerja,format(jumlah_gaji,'id_ID') as jumlah_gaji,user_login,password from tb_karyawan where id= ?",[req.query.id],(err,rows,fields)=>{
        if(err) 
        {
            console.error(err);
        }
        
        res.send(rows);
    })
})
app.post('/updatekaryawan',(req,res)=>{
    
    const id = req.body.id
    const namakaryawan = req.body.nama
    const tempatlahir = req.body.tempatlahir
    const tanggallahir = req.body.tanggallahir1
    
    const jeniskelamin = req.body.jeniskelamin
    const alamat = req.body.alamat
    const email = req.body.email
    const status = req.body.status
    const jabatan = req.body.jabatan
    const golongan = req.body.golongan
    const bulankerja = req.body.bulankerja
    const jumlahgaji = req.body.jumlahgaji.replace(/,/g,"")
    
    const userlogin = req.body.userlogin
    const passwordlogin = req.body.password
    config.pool.query("update tb_karyawan set nama = ? ,tmp_lahir= ? , tgl_lahir = ?,jenis_kelamin= ?,alamat= ?,email= ?,status= ?, "+
    "jabatan= ?,golongan= ?,bulan_kerja = ?,jumlah_gaji= ?,user_login= ?,password= ?,tgl_buat=SYSDATE() where id= '"+id+"' ",
    [namakaryawan,tempatlahir,tanggallahir,jeniskelamin,alamat,email,status,jabatan,golongan, bulankerja,jumlahgaji,userlogin,passwordlogin],(err,resul)=>{
        if(err)
            res.send("error");
        else
            res.send("sukses");
    })
    
})
app.post('/insertkaryawan',(req,res)=>{
    // Encrypt.encrytion(
    const namakaryawan = req.body.nama
    const tempatlahir = req.body.tempatlahir
    const tanggallahir = req.body.tanggallahir
    const jeniskelamin = req.body.jeniskelamin
    const alamat = req.body.alamat
    const email = req.body.email
    const status = req.body.status
    const jabatan = req.body.jabatan
    const golongan = req.body.golongan
    const bulankerja = req.body.bulankerja
    const jumlahgaji = req.body.jumlahgaji.replace(/,/g,"")
    const userlogin = req.body.userlogin
    const passwordlogin = req.body.password
    config.pool.query("insert into tb_karyawan values (null,?,?,?,?,?,?,?,?,?,?,?,?,?,SYSDATE())",
    [namakaryawan,tempatlahir,tanggallahir,jeniskelamin,alamat,email,status,jabatan,golongan,bulankerja,jumlahgaji,userlogin,passwordlogin],
    (err,rows,fields)=>{
        if(err) 
            console.error(err);
        else
            res.send("sukses");
        
        console.log(rows);
    })
    
})
app.delete('/deletekaryawan',(req,res)=>{
    console.log(req);
    const id = req.query.id;
    console.log(id)
    config.pool.query("delete from tb_karyawan where id='"+id+"'",(err,sult)=>{
        if(err)
            res.send("error")
        else
            res.send("sukses");
    })
})
app.get('/admin',(req,res)=>{
    var return1 = "sukses";
    const user = req.query.name;
    const pass = req.query.password;
    const encrypass = Encrypt.encrytion(pass);
    config.pool.query("select password from tb_admin where username = ? ",[user],(err,respon)=>{
        if(err)
        {
            console.error(err);
            return1 = "gagal";
        }
        else
        {
            if(respon[0]["password"] == encrypass)
                return1 = "sukses";
            else
                return1 = "salah";
        }
        res.send(return1);
    })
    // config.pool.query("insert into tb_admin (username,password) values (?,?)",[user,encrypass],(err,respon)=>{
    //     if(err)
    //     {
    //         console.error(err);
    //     }
    //     else
    //     {
    //         console.log(respon);
            
    //     }
     
    
});
app.post('/inserttabletambahan',(req,res)=>{
    const jabatan = req.body.jabatan
    const gaji = req.body.gaji.replace(/,/g,'');
    config.pool.query("insert into tb_tambahan values(null,?,?,'')",[jabatan,gaji],(err,resu)=>{
        if(err)
        {
            res.send("error")
        }
        else
        {
            
            res.send("sukses")
        }  
    })
});

app.get('/datatambahan',(req,res)=>{
    config.pool.query("select id,jabatan,format(gajitam,'id_ID') as gajitam from tb_tambahan",(err,rese)=>{
        if(err)
            console.log(err);
       res.send(rese);
    })
})
app.get('/ambildatatambahan',(req,res)=>{
    config.pool.query("select id,jabatan,format(gajitam,'id_ID') as gajitam,keterangan from tb_tambahan where id= ?",[req.query.id],(err,rese)=>{
        if(err)
            console.log(err);
        res.send(rese)
    })
})
app.post('/updategajitam',(req,res)=>{
    const id = req.body.params.id;
    const jabatan = req.body.jabatan
    const gaji = req.body.gaji.replace(/,/g,'');
    config.pool.query("update tb_tambahan set jabatan = ? , gajitam = ? where id='"+id+"'",[jabatan,gaji],(err,has)=>{
        if(err)
            res.send("error")
        else
            res.send("sukses")
    })
    
})

app.get('/datagaji',(req,res)=>{
    config.pool.query("select id,jabatan,format(gajiterlambat,'id_ID') as gajiterlambat,bulan from tb_terlambat",(err,rese)=>{
        if(err) console.log(err)
        res.send(rese)
    })
})

app.post('/tambahpot',(req,res)=>{
    const jabatan = req.body.jabatan
    const gaji = req.body.gaji.replace(/,/g,"");
    config.pool.query("insert into tb_terlambat values(null,?,?,0)",[jabatan,gaji],(err,rese)=>{
        if(err) 
        {
            res.send("error");
        }
        else
        {
            res.send("sukses");
        }
        
        
    })
})
app.get('/datapot',(req,res)=>{
    config.pool.query("select id,jabatan,format(gajiterlambat,'id_ID') as gajiterlambat from tb_terlambat",(err,rese)=>{
        res.send(rese)
    })
})
app.post('/updatepot',(req,res)=>{
    const id = req.body.params.id
    const jabatan = req.body.jabatan
    const gaji = req.body.gaji.replace(/,/g,'');
    config.pool.query("update tb_terlambat set jabatan = ?, gajiterlambat = ?  where id = '"+id+"'",[jabatan,gaji],(err,rese)=>{
        if(err)
            res.send("error")
        else
            res.send("sukses")
    })
})
app.get('/loginkaryawan',(req,res)=>{
    const user = req.query.name;
    const password = req.query.password;
    config.pool.query("select id,password from tb_karyawan where user_login = ? ",[user],(err,rese)=>{
        if(err)
        {
            console.log(err);
            res.send("error")
        }
        else
        {
            if(password == rese[0]["password"])
                res.send("sukses")
            else
                res.send("gagal")
        }
        
    })
})

app.post('/absenmasuk',(req,res)=>{
    var dataid="";
    const waktusekarang = moment().format("HH:mm")
    const tanggalsekarang = new Date().getDay()
    const terlambat1 = Validjam.jammasuk() === "telat"? 1 : 0;
    const today = moment().format("YYYY-MM-DD")
    config.pool.query("select id from tb_karyawan where user_login = ?",[req.body.params.user],(err,rese)=>{
        if(err)
        {
            console.log(err)
        }
        else
        {
            dataid = rese[0].id;
            config.pool.query("select isnull(id_karyawan) from tb_absen where id_karyawan = ? and tanggal = ?",[dataid,today],(err,dat)=>{
                if(err)
                {
                    res.send("error")
                }
                else
                {
                   if(dat.toString() === "")
                   {
                    config.pool.query("insert into tb_absen(id,id_karyawan,tanggal,jam_masuk,terlambat) values (null,?,SYSDATE(),?,?)",[dataid,waktusekarang,terlambat1],(err,rese)=>{
                        if(err)
                        {
                            console.log(err)
                            res.send("error")
                        }
                        else
                        {
                            res.send("sukses");
                        }
                    })
                   }
                   else
                   {
                        res.send("sudah")
                   }
                }

            })
            
        }
    })
})
app.post('/absenkeluar',(req,res)=>{
    const waktusekarang = moment().format("HH:mm")
    const cekjam = 0
    // cekjam = Validjam.jamkeluar()
    // cekjam = 0;
    const today = moment().format("YYYY-MM-DD")
    config.pool.query("select id from tb_karyawan where user_login = ?",[req.body.params.user],(err,rese)=>{
        if(err)
        {
            console.log(err)
        }
        else
        {
            dataid = rese[0].id;
            config.pool.query("select isnull(id_karyawan) from tb_absen where id_karyawan = ? and tanggal = ?",[dataid,today],(err,dat)=>{
                if(err)
                {
                    res.send("error")
                }
                else
                {
                    if(dat.toString() === "")
                    {
                        config.pool.query("insert into tb_absen(id,id_karyawan,tanggal,jam_pulang,lembur) values (null,?,SYSDATE(),?,?)",[dataid,waktusekarang,cekjam],(err,rese)=>{
                            if(err)
                            {
                                console.log(err)
                                res.send("error")
                            }
                            else
                            {
                                res.send("sukses");
                            }
                        })
                    }
                    else
                    {
                        config.pool.query("update tb_absen set jam_pulang = '"+waktusekarang+"',lembur = '"+cekjam+"' where id_karyawan = ? and tanggal = ?",[dataid,today],(err1,dat1)=>{
                            if(err1)
                            {
                                res.send("error")
                            }
                            else
                            {
                                res.send("sukses")
                            }
                        })
                    }
                }
            })
        }   
    })
})

app.get('/dataabsenkaryawan',(req,res)=>{
    var idkary = ""
    const tanggal1 = moment(req.query.tanggal).format("YYYY-MM-DD")
    
    config.pool.query("select id from tb_karyawan where user_login = ?",[req.query.user],(err,rese)=>{
        if(err)
        {
            console.log(err)
        }
        else
        {
            idkary = rese[0].id
            config.pool.query("select id,id_karyawan,tanggal,jam_masuk,jam_pulang,(CASE WHEN jam_masuk <> '' and terlambat <> 0 then 'terlambat' when jam_masuk = '' and jam_pulang <> '' then 'tidak absen masuk' ELSE 'masuk' END) as terlambat from tb_absen where id_karyawan = ? and tanggal = ?",[idkary,tanggal1],(err,rese)=>{
            if(err)
            {
                console.log(err)
            }  
            else
            {
                if(rese.toString()!="")
                {
                    rese[0].tanggal = moment(rese[0].tanggal).format("DD-MMM-YYYY")
                }
                res.send(rese)
            }
            })
        }
    })
})

app.get('/datadirikaryawan',(req,res)=>{
    
    const user = req.query.user
    config.pool.query("SELECT distinct id,nama,tmp_lahir,tgl_lahir,jenis_kelamin,alamat,email,status,jabatan, "+
    "format(jumlah_gaji,'id_ID') as jumlah_gaji,tgl_buat  from tb_karyawan where user_login = ?",[user],(err,rese)=>{

        rese[0].tgl_buat = moment(rese[0].tgl_buat).format("DD-MMM-YYYY")
        res.send(rese);
    })
})
app.get('/dataabsensemua',(req,res)=>{
    const tanggal1 = moment(req.query.tanggal).format("YYYY-MM-DD")
    config.pool.query("select a.id,b.nama,a.tanggal,a.jam_masuk,a.jam_pulang, "+
    " (CASE WHEN a.jam_masuk <> '' and a.terlambat <> 0 then 'terlambat' when a.jam_masuk = '' and "+
    "a.jam_pulang <> '' then 'tidak absen masuk' ELSE 'masuk' END) as terlambat "+
    "from tb_absen a INNER join tb_karyawan b on a.id_karyawan = b.id where a.tanggal = ?",[tanggal1],(err,rese)=>{
        if(err)
        {
            console.log(err)
        }  
        else
        {
            if(rese.toString()!="")
            {
                rese[0].tanggal = moment(rese[0].tanggal).format("DD-MMM-YYYY")
            }
            res.send(rese)
        }
        })
})
app.get('/dataabsenbybulan',(req,res)=>{
    const bulan = moment(req.query.tanggal).format('MM-YYYY')
    config.pool.query("select b.id,b.nama,sum(a.terlambat) as terlambat, "+
    "(select santun from tb_laporan where id_karyawan = a.id_karyawan and bulan = date_format(a.tanggal,'%m-%Y')) as santun, "+
    "(select keterangan from tb_laporan where id_karyawan = a.id_karyawan and bulan = date_format(a.tanggal,'%m-%Y')) as keterangan from tb_absen a inner join tb_karyawan b on a.id_karyawan = b.id where date_format(tanggal,'%m-%Y') = ? group by b.nama",[bulan],(err,rese)=>{
        if(err)
        {
            console.log(err);
        }
        res.send(rese)
    })
})
app.get('/datalaporansantun',(req,res)=>{
    const bulan = moment(req.query.tanggal).format("MM-YYYY")
    config.pool.query("select * from tb_laporan where id_karyawan = ? and bulan = ?",[req.query.id,bulan],(err,rese)=>{
        if(err)
        {
            console.log(err)
        }
        else
        {
            res.send(rese);
        }
    })
})
app.post('/simpansantunketerangan',(req,res)=>{
    const id = req.body.params.id
    const santun = req.body.santuna
    const terlambat = req.body.params.lambat
    const keteran = req.body.keterangan
    const tanggal1 =moment(req.body.params.tanggal).format("MM-YYYY")
    config.pool.query("select id_karyawan from tb_laporan where id_karyawan = ? and bulan = ?",[id,tanggal1],(err,check)=>{
        if(err)
        {
            console.log(err)
        }
        else
        {
            
            if(check[0].id_karyawan.toString() != "")
            {
                config.pool.query("update tb_laporan set santun = '"+santun+"',keterangan = '"+keteran+"' where id_karyawan = ? and bulan = ?",[id,tanggal1],(err1,rese)=>{
                    if(err1)
                    {
                        console.log(err1)
                    }
                    else
                    {
                        res.send("sukses")
                    }
                })
            }
            else
            {
                
                config.pool.query("insert into tb_laporan (id,id_karyawan,santun,bulan,keterangan,cetak) values(null,?,?,?,?,0)",[id,santun,tanggal1,keteran],(err2,reseup)=>{
                    if(err2)
                    {
                        console.log(err2)
                    }
                    else
                    {
                        res.send("sukses");
                    }
                })
            }
        }
    })
})
app.get('/pdfslip',(req,res)=>{
    const id = req.query.id
    const tanggal = moment(req.query.tgl).format("MM-YYYY")
    pdf.pdfjadi(id,tanggal).then((has)=>{
        res.send(has)
    });
})
app.get('/ambilfilepdf',(req,res)=>{
    // const file = `gaji_${req.body.id}.pdf`
    const path = `${__dirname}/filepdf/gaji_${req.query.id}.pdf`;

    res.download(path)
    // const dl = new DownloaderHelper(file,path)
    // dl.on('end',()=>console.log("download completed"))
    // dl.start();
})
app.listen(port,()=>{
    console.log({port});
})