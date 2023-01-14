// Scopes

// ** Global Scopes
var name = 'Çınar';
var age = 25;

function logName(){
    var name = 'Ada';
    var age = '12';
    console.log('function scope',name,age); //return Ada 12 , fonksiyon içinde tanımlanan daha onceliklidir. Bu durum sadece fonksiyonlar için geçerlidir
}


if(true){
    var age = 30;
    console.log('block scope',name,age); // return Çınar 30 , logName fonksiyonu içindeki name ve age değişkenine erişemez.
}

console.log(age); //return 30. Çünkü if bloğu içinde age değişkeninin değeri değiştirildi. logName fonksiyonu içindeki age değişkenine erişemez.

logName();
console.log(name);// return Çınar


// ** Local Scopes

// Fonksiyonlar kendi scope 'larını oluşturur.
// **Block'lar yeni scope oluşturmaz.
// ES6 ile gelen let ve const block scope oluşturur.
 

console.log('*********************');

if(true){
    var model = 'Opel';
    let year = 2016;
    const color = 'white';
    console.log('block scope',model,year,color); // return Opel 2016 white
}
console.log(model); //model değişkenine var ile tanımlandığı için dışarıdan erişilebilir.
//console.log(color); //year ve color değişkenine let ile tanımlandığı için dışarıdan erişilemez.

var i = 1;

for(let i=0; i<10;i++){ //for, while, if, else, switch vs... hepsi blok scope tur.
    console.log('i',i);
}

console.log(i); //return 1 . Global olan i ye erişti.




