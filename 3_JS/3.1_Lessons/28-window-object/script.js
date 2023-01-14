// Window Object

let val; //Bu değişken window objesinin bir propertysidir. window.val altında erişilebilir.
var a = 10;
function abc(){
   return 0;
};

val = window;

// alert
// alert('Merhaba');

// prompt
// var val = prompt('bir sayı giriniz ');  

// confirm
// val = confirm('emin misiniz ?');

// if(val){
//     console.log('ok');
// }else{
//     console.log('no');
// }

// scroll: X ve Y koordinatlarını verir
// val = window.scrollX;
// val = window.scrollY;

// location

val = window.location;
val = window.location.href;
val = window.location.hostname;
val = window.location.host;
val = window.location.protocol;
val = window.location.search; //queryString parametlerini verir.

// window.location.href='http://sadikturan.com'; //sayfayı farklı bir url e gonderir
// window.location.reload(); //sayfayı tekrar yukler

//window.navigator; //sayfa ve kullanıcı ile ilgili bilgileri 

console.log(val);