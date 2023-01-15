const pdfgenerator = require('pdfkit')
const fs = require('fs')
const config = require('../db/config')
const promise = require('mysql2/promise')
const moment = require('moment')
function separatorrupiah(x){
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}
const generatorheader=(doc)=>{
    var gambar = `${__dirname}/gambar/logo.png`    
    doc.image(gambar,90,15,{width:100});
    doc.font('Times-Bold').fontSize(10).text('BADAN PUSAT STATISTIK KABUPATEN NABIRE',100,30,{align:'center'})
    doc.font('Times-Roman').fontSize(8).text('BPS Kabupaten Nabire (Statistics of Nabire Regency)',100,45,{align:'center'})
    doc.font('Times-Roman').fontSize(8).text('Jalan Pepera No. 18 Nabire-Papua (Kantor Statistik)',100,55,{align:'center'})
    doc.font('Times-Roman').fontSize(8).text('98815, HP/WA: 081282871245, Email: bps9404@bps.go.id',100,65,{align:'center'})
    const awalpage = 50
    const akhirpage = 550

    doc.moveTo(awalpage,80).lineTo(akhirpage,80).stroke()
    
}
const generatorsubheader=(doc)=>{
    doc.font('Times-Roman','Times-Bold').fontSize(12).text('SLIP GAJI',100,90,{align:'center'});
    doc.moveTo(50,110).lineTo(550,110)
}
async function getdatafromtable(id,tanggal){
    // 
    const promisepool = config.pool.promise()
    const[rows,fields] = await promisepool.query("select a.nama,a.jabatan,b.bulan,a.jumlah_gaji, "+
    "(select gajiterlambat from tb_terlambat where id = '2') as gajiterlambat, "+
    "(select gajiterlambat from tb_terlambat where id = '1') as bayarterlambat, (select gajitam from tb_tambahan where id = '1') as uangmakan, "+
    "b.santun,b.keterangan,sum(d.terlambat) as terlambatabsen,sum(d.lembur) as lembur from tb_karyawan a "+
    "inner join tb_laporan b on a.id = b.id_karyawan inner join tb_absen d "+
    "on d.id_karyawan = a.id where a.id = ? and date_format(d.tanggal,'%m-%Y') = ? "+
    "GROUP by a.nama,a.jabatan,b.bulan,a.jumlah_gaji,b.santun,b.keterangan;",[id,tanggal])
    return rows;
}
const generatorbody=(doc,nama,bulan,jabatan,jumlahgaji,gajiterlambat,bayarterlambat,uangmakan,santun,keterangan,terlambat,lembur)=>{
    let duitterlambat = parseFloat(bayarterlambat * terlambat);
    let tanpaketerangan = parseFloat(keterangan * gajiterlambat);
    var jumlah_gaji = parseFloat(jumlahgaji);
    var uang_makan = parseFloat(uangmakan);
    let pph = 25000;
    let total = 0;
    // let uanglembur = 10000
    let bayarlembur = 0;
    const awalpage = 50
    const akhirpage = 550
    
    // bayarlembur = parseFloat(lembur * uanglembur)
    doc.font('Times-Roman').fontSize(10).text(`Nama: `+nama,110,120)
    doc.font('Times-Roman').fontSize(10).text(`periode: ${bulan}`,350,120)
    doc.font('Times-Roman').fontSize(10).text(`Jabatan: ${jabatan}`,110,130)     
    
    doc.moveTo(awalpage,150).lineTo(akhirpage,150).stroke()
    doc.font('Times-Roman').fontSize(10).text(`Sistem Pembayaran : CASH`,110,170)
    doc.font('Times-Roman').fontSize(10).text(`Gaji Pokok : ${separatorrupiah(jumlahgaji)}`, 350,170)
    doc.font('Times-Roman').fontSize(10).text(`Makan / Transportasi : ${separatorrupiah(uangmakan)}`, 350,180)
    // doc.text(`Lembur : ${separatorrupiah(bayarlembur)}`,350,150).fontSize(10)
    // if(terlambatabsen > terlambat)
    // {
    //     duitterlambat = gajiterlambat * terlambat
    // }
    doc.font('Times-Roman').fontSize(10).text(`Terlambat : ${separatorrupiah(duitterlambat)}`,350,190)
    doc.font('Times-Roman').fontSize(10).text(`tanpa Keterangan: ${separatorrupiah(tanpaketerangan)}`,350,200)
    doc.font('Times-Roman').fontSize(10).text(`PPH: ${separatorrupiah(pph)}`,350,210)
    doc.moveTo(350,220).lineTo(550,220).stroke();
    total = (jumlah_gaji + uang_makan + bayarlembur) - duitterlambat - tanpaketerangan - pph;
    
    doc.font('Times-Roman').fontSize(10).text(`Total: ${separatorrupiah(total)}`,350,230)
    doc.font('Times-Roman').fontSize(10).text(`Sakit / ijin : ${santun}`,350,240)
    doc.font('Times-Roman').moveTo(50,260).lineTo(550,260).stroke();
}
const generatorakhir=(doc,nama)=>{
    var ttdchandra = `${__dirname}/gambar/chandra.jpeg`
    var ttdouceu = `${__dirname}/gambar/ouceu.jpeg`
    var cap = `${__dirname}/gambar/cap.jpeg`
    doc.font('Times-Roman').fontSize(10).text(`${moment().format("DD-MMM-YYYY")}`,350,270)
    doc.font('Times-Roman').fontSize(10).text('Diketahui oleh ',110,280)
    doc.font('Times-Roman').fontSize(10).text('Ketua BPS Kabupaten Nabire ',110,300)
    doc.font('Times-Roman').fontSize(10).text('Bendahara',350,300)
    doc.image(ttdouceu,110,320,{width:80})
    doc.image(cap,180,320,{width:80})
    doc.image(ttdchandra,350,320,{width:80})
    doc.font('Times-Roman').fontSize(10).text('Ouceu Satyadipura S.ST.,MAPS',110,380)
    doc.font('Times-Roman').fontSize(10).text("Chandra Hadi Wijayanto S.ST",350,380)
}
exports.pdfjadi=async(id,tanggal)=>{
    let output = new pdfgenerator
    var nama = "";
    const filename = `./filepdf/gaji_${id}.pdf`
    output.pipe(fs.createWriteStream(filename,{flags:'w'}))
    generatorheader(output)
    output.moveDown();
    generatorsubheader(output)
    output.moveDown();
    await getdatafromtable(id,tanggal).then(b=> 
        generatorbody(output,b[0].nama,b[0].bulan,b[0].jabatan,b[0].jumlah_gaji,b[0].gajiterlambat,b[0].bayarterlambat,b[0].uangmakan,
            b[0].santun,b[0].keterangan,b[0].terlambatabsen,b[0].lembur)
    )
    output.moveDown();
    await getdatafromtable(id,tanggal).then(b=> 
        generatorakhir(output,b[0].nama)
    )
    output.end()
    return "sukses"
}

