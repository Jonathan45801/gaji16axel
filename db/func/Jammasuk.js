const Moment = require("moment");

exports.jammasuk = () =>{
    var date = new Date();
    date.setHours(8,0);
    const jammasuk = new Date();
    const ab = (jammasuk - date) / (60*60*1000)
    if (ab.toFixed(0) > 0)
        return "telat"
    else 
        return "aman"
}

exports.jamkeluar = ()=>{
    const jamkeluar = new Date();
    jamkeluar.setHours(16,0);
    const sekarang = jamkeluar.getHours() === 0 ? 24 : jamkeluar.getHours()
    const jamsekarang = new Date();
    const hitungjam = (jamsekarang - jamkeluar) / (60*60*1000)
    
    if(sekarang > 16 && sekarang <= 24)
    {
        return  hitungjam.toFixed(0)
    }
    else
    {
        return 
    }
    
}