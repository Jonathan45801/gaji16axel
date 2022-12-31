const cryptojs = require('crypto-js');


exports.encrytion = (req)=>{
    const hash = cryptojs.SHA256(req);
    const Hmac = cryptojs.HmacSHA256(hash,"bps");
    const base64 = Hmac.toString(cryptojs.enc.Base64);
    return base64;
}