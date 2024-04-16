let benzin = 22.25;
let dizel = 24.53;
let lpg = 11.1;

const yeniSatir = "\r\n";

let yakitMetni = "1-benzin"+yeniSatir
+"2-dizel"+yeniSatir
+"3-lpg"+yeniSatir
+"lütfen yakıt türünü seçiniz.";

let yakitTürü = prompt(yakitMetni);
if(yakitTürü=="1" || yakitTürü=="2" || yakitTürü=="3"){
let yakitLitresi = Number(prompt("yakit litresini giriniz"));
let bakiye = Number(prompt("bakiyenizi giriniz"));

if(yakitTürü=="1"){
    let odenecekTutar= benzin*yakitLitresi;
    if(odenecekTutar<bakiye){
        bakiye = bakiye-odenecekTutar;
        alert("yakıt alma işleminiz başarılı" +yeniSatir
        +"kalan bakiye: " + bakiye);
    } else {
        alert("bakiyeniz yeterli değildir."+yeniSatir
        +"ödenecek tutar: " +odenecekTutar+yeniSatir
        +"bakiye: " +bakiye+yeniSatir
        +"eksik tutar: " +(odenecekTutar-bakiye));
    }
} else if(yakitTürü=="2"){
    let odenecekTutar= dizel*yakitLitresi;
    if(odenecekTutar<bakiye){
        bakiye= bakiye-odenecekTutar;
        alert("yakıt alma işleminiz başarılı" +yeniSatir
        +"kalan bakiye: "+bakiye);
    } else{
        alert("bakiyeniz yeterli değildir"+yeniSatir
        +"ödenecek tutar: " +odenecekTutar+yeniSatir
        +"bakiye: " +bakiye+yeniSatir
        +"eksik tutar: "+ (odenecekTutar-bakiye));
    }
} else if(yakitTürü=="3"){
   let odenecekTutar= lpg*yakitLitresi;
    if(odenecekTutar<bakiye){
        bakiye= odenecekTutar-bakiye;
        alert("yakıt alma işleminiz başarılı" +yeniSatir
        +"kalan bakiye: "+(odenecekTutar-bakiye));
    } else{
        alert("bakiyeniz yeterli değildir."+yeniSatir
        +"ödenecek tutar: " +odenecekTutar+yeniSatir
        +"bakiye: "+bakiye+yeniSatir
        +"eksik bakiye: "+(odenecekTutar-bakiye));
    }
}
}
else{
    alert("geçerli bir sayı giriniz");
}