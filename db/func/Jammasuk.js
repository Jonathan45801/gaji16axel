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