const pdfgenerator = require('pdfkit')
const fs = require('fs')
const config = require('../db/config')
const promise = require('mysql2/promise')
const moment = require('moment')
function separatorrupiah(x){
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}
const generatorheader=(doc)=>{
    doc.text('SLIP GAJI BPS KABUPATEN NABIRE',100,50,{align:'center'}).fontSize(10)
    const awalpage = 50
    const akhirpage = 550

    doc.moveTo(awalpage,70).lineTo(akhirpage,70).stroke()
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
    // bayarlembur = parseFloat(lembur * uanglembur)
    doc.text(`Nama: `+nama,110,75).fontSize(10)
    doc.text(`periode: ${bulan}`,350,75).fontSize(10)
    doc.text(`Jabatan: ${jabatan}`,110,90).fontSize(10)     
    const awalpage = 50
    const akhirpage = 550
    doc.moveTo(awalpage,100).lineTo(akhirpage,100).stroke()
    doc.text(`Sistem Pembayaran : CASH`,110,120).fontSize(10)
    doc.text(`Gaji Pokok : ${separatorrupiah(jumlahgaji)}`, 350,130).fontSize(10)
    doc.text(`Makan / Transportasi : ${separatorrupiah(uangmakan)}`, 350,140).fontSize(10)
    // doc.text(`Lembur : ${separatorrupiah(bayarlembur)}`,350,150).fontSize(10)
    // if(terlambatabsen > terlambat)
    // {
    //     duitterlambat = gajiterlambat * terlambat
    // }
    doc.text(`Terlambat : ${separatorrupiah(duitterlambat)}`,350,150).fontSize(10)
    doc.text(`tanpa Keterangan: ${separatorrupiah(tanpaketerangan)}`,350,160).fontSize(10)
    doc.text(`PPH: ${separatorrupiah(pph)}`,350,170).fontSize(10)
    doc.moveTo(350,180).lineTo(550,180).stroke();
    total = (jumlah_gaji + uang_makan + bayarlembur) - duitterlambat - tanpaketerangan - pph;
    
    doc.text(`Total: ${separatorrupiah(total)}`,350,190).fontSize(10)
    doc.text(`Sakit / ijin : ${santun}`,350,200).fontSize(10)
    doc.moveTo(50,210).lineTo(550,210).stroke();
}
const generatorakhir=(doc,nama)=>{
    doc.text(`${moment().format("DD-MMM-YYYY")}`,350,220).fontSize(10)
    doc.text('Diketahui oleh ',110,230).fontSize(10)
    doc.text('Diterima oleh ',350,230).fontSize(10)
    doc.text('Bendahara',110,270).fontSize(10)
    doc.text(nama,350,270).fontSize(10)
}
exports.pdfjadi=async(id,tanggal)=>{
    let output = new pdfgenerator
    var nama = "";
    const filename = `./filepdf/gaji_${id}.pdf`
    output.pipe(fs.createWriteStream(filename,{flags:'w'}))
    generatorheader(output)
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

