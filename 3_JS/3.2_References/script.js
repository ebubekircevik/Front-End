//console.log("Merhaba");
// var age; //Javascript te kodlar yukarıdan aşağı çalışır
// console.log(age);
// var age=27;
// console.log(age);
// console.log(typeof(age))
// var age="27";
// console.log(age);
// console.log(typeof(age))

//Array
// let names = ["Ali", 'Mehmet'];
// console.log(typeof(names));

//Object
// let person={
//     name:"Ebubekir",
//     yas:25}

// console.log(person);
// console.log(typeof(person));

//Function
// var Selam = function(){
//     console.log('Hello !')
// }
// Selam()
// console.log(typeof(Selam))

//Tür Dönüşümü
// let num1 = '5';
// let num2 = '10';
// let total= num1+num2;
// console.log(total)
// console.log(typeof total)

//string to number
// let num1 = Number('5');
// let num2 = Number('10');
// let total= num1+num2;
// console.log(total)
// console.log(typeof total)

//number to string
// let val = String(10);
// console.log(typeof val)

//bool to string
// val = String(true);
//array to String
// val = String([14,2,3]);

// var yearOfBirth = 1986;
// var now = new Date().getFullYear();
// console.log(now-yearOfBirth);
// var a = true;
// var c = a ? "a true" : "a false";
// console.log(c);

//  let date = new Date();
// console.log(date);
// console.log(date.getDate);
// console.log(date.getDay);
// console.log(date.getFullYear);
// console.log(date.getMonth);
// console.log(typeof date)

// date.setDate(20);
// date.setFullYear(30)
// //console.log(date)
// let birthday= new Date(1995,10,30)
// console.log(date.getFullYear-birthday.getFullYear)

// var date = new Date();
// console.log(date.getDate()+1)

// var fullName = "Ebubekir Çevik", city = "Istanbul", age = 25;
// let person = `my name is ${fullName} and I am from ${city} and I'm ${(2020-age) > 18 ? "over than 18 " : "under than 18"} ` ;
// console.log(person);

//ARRAY

// let names = ["bekir", "mehmet"];

// console.log(names);
// console.log(typeof(names));

// let mix = ["bekir", 1, null, undefined,["cinema", "movie"]]
//     //set array item
//     mix[mix.length] = "araba";
//     mix.push(1380);

// console.log(mix);
// console.log(mix.indexOf(1380))

// let cars = ["BMW", "OPEL", "MERCEDES","MAZDA"]
// console.log(cars)
// console.log(cars.length)
// console.log("ilk elaman: " +cars[0] + " son eleman: " + cars[cars.length-1])

// cars.push("Renault")
// console.log(cars)

// var baslangic = new Date("2017-04-20"),
//         bitis   = new Date(),
//         fark  = new Date(bitis - baslangic),
//         gun  = Math.floor(fark/1000/60/60/24);

//         (gun/365 <= 1) ? console.log("1. bakım 1 yıl") : "";
//         (gun/365 > 1 && gun/365 <= 2) ? console.log("2. bakım 2 yıl") : "";
//         (gun/365 > 2 && gun/365 <= 3) ? console.log("3. bakım 3 yıl") : "";
//         (gun/365 > 3 && gun/365 <= 4) ?console.log("4. bakım 4 yıl") : "";

// let person = "Admin", password = "TheMaster";
// (person === "Cancel") ? console.log("Canceled") : "";
// (person === "Other") ? console.log("I dont know") : "";
// (person === "Admin") ? (password === "Cancel" ? console.log("Canceled") : "" ) || (password === "Other" ? console.log("Wrong password") : "" ) || (password === "TheMaster" ? console.log("Welcome") : "") : "";

//OBJECT LITERALS

// var val;
// let person = {
//         firstName : 'Ebubekir',
//         lastName : 'Çevik', 
//         age : 25,
//         hobbies : ["music", "game"],
//         adress : {
//                 city : 'Istanbul',
//                 country : "Turkey"
//         },
//         getBirthYear : function(){
//                 return 2020-this.age; //this: hangi obje içerisinde yazıldıysa o objenin elemanlarını getirir.
//         }
// }; 

// //console.log(person);
// //console.log(typeof person)

// val = person.firstName;
// val = person.lastName;
// val = person["firstName"]
// val = person.adress.country;
// val = person.adress;
// val = person.hobbies[0]
// val = person.hobbies;
// val = person.getBirthYear();

// // console.log(val)
// // console.log(typeof val);

// //object in array
// let people = [
//         {firstName : "Ebubekir", lastName : "Çevik"},
//         {firstName : "Mehmet", lastName : "Şensoy"}
// ]

// console.log(people)
// console.log(people[1])
// console.log(people[0].firstName)

// for(let i=0; i<people.length; i++){
//         console.log(people[i].lastName)
// }

//EXAMPLE

// let aracBigileri = [
//         {
//                 id: 'bmw116d_1234',
//                 model: '116d',
//                 yil: 2015,
//                 renk: "white",
//                 servisKayitlari: 
//                 [
//                         {
//                                 id: 'bmw116d_1234_1',
//                                 tarih: '30.01.2016',
//                                 km: 13000,
//                                 toplamUcret: 900,
//                                 servisDetayı: 
//                                 [
//                                         { id: 1, islem: 'yag degisimi', ucret: 300 },
//                                         { id: 2, islem: 'filtre degisimi', ucret: 300 },
//                                         { id: 1, islem: 'fren degisimi', ucret: 300 }
//                                 ]
//                         },
//                         {
//                                 id: 'bmw116d_1234_2',
//                                 tarih: '30.01.2017',
//                                 km: 28000,
//                                 toplamUcret: 1800,
//                                 servisDetayı: 
//                                 [
//                                         { id: 1, islem: 'yag degisimi', ucret: 350 },
//                                         { id: 2, islem: 'filtre degisimi', ucret: 350 },
//                                         { id: 3, islem: 'fren hidroliği', ucret: 300 },
//                                         { id: 4, islem: 'balata değişimi', ucret: 800 }

//                                 ]
//                         }
//                 ]

//         }

// ]

// console.log(aracBigileri[0])

// Loops in Array & Objects

//1) for
// var cars = ['BMW', 'Mercedes', 'Opel']
// for(let i=0; i<cars.length; i++){
//         console.log(cars[i]);
// }

// let people = [
//         {firstName:'Ebubekir', lastName:'Çevik'},
//         {firstName: 'Mehmet', lastName:'Şensoy'},
//         {firstName: 'Fatih', lastName:'Çiçek'}
// ]
// for(let i=0; i<people.length; i++){
//         console.log(people[i].firstName)
// }



//2) for-in
// var cars = ['BMW', 'Mercedes', 'Opel']

// for(let i in cars)
// {
//     console.log(`index: ${i} value: ${cars[i]}`)
// }

// let people = [
//            {firstName:'Ebubekir', lastName:'Çevik'},
//            {firstName: 'Mehmet', lastName:'Şensoy'},
//            {firstName: 'Fatih', lastName:'Çiçek'}
//         ]
// for(let i in people){
//         console.log(`index: ${i} value: ${people[i].lastName}`)
// }

//3)foreach
// var cars = ['BMW', 'Mercedes', 'Opel', 'Toyota']

// cars.forEach(function(item){
//         console.log(item)
// })

// let people = [
//            {firstName:'Ebubekir', lastName:'Çevik'},
//            {firstName: 'Mehmet', lastName:'Şensoy'},
//            {firstName: 'Fatih', lastName:'Çiçek'}
//         ]
// people.forEach(function(item){
//         console.log(item.firstName + ' '+ item.lastName)
// })

//4)map : returns an array
// let people = [
//            {firstName:'Ebubekir', lastName:'Çevik'},
//            {firstName: 'Mehmet', lastName:'Şensoy'},
//            {firstName: 'Fatih', lastName:'Çiçek'}
//         ]
// let val = people.map(function(item){
//         return item.firstName + ' ' + item.lastName;
// })
// console.log(val);

// let number = [1,2,4,6,7,9]
// let val2 = number.map(function(item){
//         return item*item
// })
// console.log(val2)


// FUNCTIONS
// 1)Function Declarations
// function yasHesapla( dogumYili){ 
//         return 2020-dogumYili;
// }
// let yas = yasHesapla(1995);
// console.log(yas);

// function EmekliligeKacYilKaldi(dogumYili, isim){
//         let yas = yasHesapla(dogumYili);
//         let emeklilik = 65-yas;

//         if(emeklilik>0){
//                 console.log(`${isim} emekli olmana ${emeklilik} yıl kaldı`)
//         }else{
//                 console.log('Zaten emekli oldunuz')
//         }      
// }

// let yas1 = EmekliligeKacYilKaldi(1995, "Ebubekir")
// console.log(yas1);

// 2)Function Experission
// Alternative Function Defination 
// var yasHesapla = function(dogumYili){
//         return 2020-dogumYili;
// }
// console.log(yasHesapla(1995))

// 3)Default Paramaters
// let sum = function(a=0,b=0){//sum foksiyonunun içine eksik parametre gonderildiğinde, değişkenlerin değerlerinin 'undefined' olmaması için default değerleri '0' belirlendi.
//         return a+b;
// }
// console.log(sum(3))
// console.log(sum(3,4))
// console.log(sum("a","b"))

// 4)"arguments" property
// function args(){
//         console.log(arguments) //arguments: fonksiyona gonderilen değerleri dizi şekli tutar yada dondurur
// }
// args(1,2,4,8,"bekir")

// function sumAll(){
//         total=0;
//         for(let i=0; i<arguments.length; i++){
//                 total += arguments[i] // sumAll fonksiyonuna gonderilen parametreler arguments tarafından dizi şeklinde tutulur. dizi şeklinde tutulduğu içinde toplanabilir. Bu sayede fonksiyonlara kaç tane parametre alacağı belirtilmeden, gonderilen parametre sayısına gore işlem yapar
//         }
//         return total;
// }
// console.log(sumAll(1,2,3))

// let paraCek = function(miktar){
//         let anaHesap=100, yedekHesap=50;
        
//         if(miktar<anaHesap){
//                 console.log(`Hesaptan çekilen miktar: ${miktar}`)
//         }else{
//                 if(miktar<(anaHesap+yedekHesap)){
//                         console.log(`Hesaptan çekilen miktar: ${miktar}`)
//                 }else{
//                         console.log(`Hesabınızda ${miktar} tl yok`)
//                 }
//         }
// }
// console.log(paraCek(170));
//let name ="çevik"
// function func(){
//         let name="ebubekir";
// }
// if(true){
//  let name="asd"
// }
// console.log(name)

// var i=1;
// for(let i=0; i<10; i++){
//         console.log(i)
// }
// console.log(i)

// //Document Object
// var val;
//  //val=document//sayfadaki butun html etiketlerini verir
//  val=document.all //sayfadaki Elementleri dizi şeklinde döndürür
//  val=document.all.length// sayfadaki toplam element sayısı
//  val=document.all[6] //dizi içindeki elemente gider
//  val=document.head//head etiketi verir
//  val=document.body//body etiketi verir
//  val=document.anchors//sayfadaki butun 'a' (linkleri) verir
//  val=document.URL//sayfanın adresini verir
//  val=document.domain//sayfanın domain adresini verir
//  val=document.images//sayfaki images ları verir. dizi şeklinde verir
//  val =document.title
//  val= document.scripts//sayfadaki scriptleri dizi şeklinde dondurur
//  val=document.scripts[0].getAttribute('src')//0.scriptin src attribute nin değerini alır

// console.log(val)

//--Selecting Element(Element Seçimi)
//  1)Tekil Element

    // let val;
    // val=document.getElementById('header')// id si 'header' olan elementi verir
    // val=document.getElementById('header').id//secilen elementin id si verir 
    // val=document.getElementById('header').className//elementin class name verir
    
    // val=document.getElementById('header')
    // val=val.id//secilen elementin id si verir 
    // val=val.className//elementin class name verir

    //     //1.1)style ozellikleri
    //     val=document.getElementById('header')
    //     val.style.fontSize = '45px'//font u 45 px yapıldı
    //     val.style.color = 'red'
    //     //val.style.fontWeight = 'bold'

    //     //1.2)innerText ve innerHTML
    //     val.innerText = 'Ebubekir'//Elementin text i değiştirildi
    //     val.innerHTML = '<b>Çevik</b>' //innerHTML de html elementi eklenebilir. Ama innerText yazılan Html etiketleri çalışmaz

    //     //1.3)querySelector
    //     val=document.querySelector('#header')//id si header olan elementi seçer
    //     val=document.querySelector('.head')//class head olan elementi seçer
    //     val=document.querySelector('div')//div elementlerini seçer
    //     val=document.querySelector('#header').style.color='green'//secilen elementin color ını yeşil yapar
    //     val=document.querySelector('#header').textContent='asjlkkdd' //elementin text ini değiştirir
    //     document.querySelector('.head').classList.add('active')//elementi class ına 'active' ekler
    //     document.querySelector('.head').className='blabla'//elementin className ini değiştirir

//2) Çoklu Element Seçimi(Multiple)
    // let val;
    //elementlerin dizisini dondurur
    //val=document.getElementsByClassName('head')[0]
    // val=document.querySelectorAll('h1')

    // console.log(val)


    //TryCatch
    
    // try {
    //     console.log(myFunction());
    // } catch (e) {
    //     console.log(e)
    //     window.segErr = e;
    //     console.log(e.message)
    //     console.log(e.name)//hata turunu verir
    //     console.log(e instanceof ReferenceError)//hata turu
    //     console.log(e instanceof TypeError)
    // }

    // var user = {
    //     name:'Sadık Turhan'
    // }
    // try {
    //     console.log(user.name)
    //     if(!user.email){//user.email==null
    //         //throw new SyntaxError('User has no mail');
    //         throw new Error('User has no mail');
    //     }

    // } catch (e) {
    //     console.log(e) // if bloğu içinde yazılan hatayı bastırır
    //     console.log(e.name)
    //     console.log(e.message)
    // }finally{
    //     //hata olsun olmasın bu blok çalışır
    // }

    //Dom Üzerinde Element Silme ve Güncelleme

    //var val=document.querySelector('.head1')
    //val.remove();//Element Dom üzerinde silinir

    // val=document.querySelector('.list')
    //val.childNodes[0].remove()

    // //Element Oluşturma(Creating Elements)
    // let val = document.createElement('div')
    // //Class Ekleme(add class)
    // val.className = 'div1'
    // //Attribute Atama(set attribute)
    // val.setAttribute('title','new item')
    // val.setAttribute('text','I am div')
    
    // //header id li elemente div1 classlı div elementi eklenir
    // document.querySelector('#header').appendChild(val)
     
    //console.log(val)
//--EVENTS

    //1) Event Listener Kullanımı
    // var btn = document.querySelector('#btn')
    // btn.addEventListener('click', function(){ //Event ve function yazılır
    //     console.log('button clicked')
    // })

    //1.1) Dışarıdan fonksiyon eklenebilir. Bu sayede bir fonksiyon surekli kullanılabilir
    // var btn = document.querySelector('#btn')
    // function btnClick(){
    //     console.log("btn clicked")
    // }
    // btn.addEventListener('click', btnClick);

        //Example
        // var btn = document.querySelector('#btn')
        // function btnClick(){
        //     console.log("btn clicked")
        // }
        // function btnClick2(){
        //     console.log("btn clicked 2")
        // }
        // btn.addEventListener('click', btnClick);
        // btn.addEventListener('click', btnClick2);
        //bir event te 2 fonksiyon çalıştrıldı

    //1.2) Event Objesi
    // var btn = document.querySelector('#btn')
    // btn.addEventListener('click', function(e){ //fonksiyonda içinde event objesi gonderilir. herhangi bir isim verilebilir e den farklı olarak
    //     let val = e;
    //     val = e.target //'e' event objesinin target property si kullanıldı. Target, hangi elemente tıklanıldığnı gosterir 
    //     val=e.target.id; //tıklanan objenin id sını verir
    //     val=e.type //çalışan event tipini verir
    //     console.log(val)
    // })

    // 2)  Mouse Events 
    // Example 1: Click
    // var btn = document.querySelector('#btn')
    // function eventHandler(event){
    //     console.log(`Evet Type: ${event.type}`)
    // }
    // btn.addEventListener('click', eventHandler);

    // Example 2: Double Click : Çift Tıklama çalışr
    // var btn = document.querySelector('#btn')
    // function eventHandler(event){
    //     console.log(`Evet Type: ${event.type}`)
    // }
    // btn.addEventListener('dblclick', eventHandler);

    // Example 3: Mouse Down : basıldığında çalışır
    // var btn = document.querySelector('#btn')
    // function eventHandler(event){
    //     console.log(`Evet Type: ${event.type}`)
    // }
    // btn.addEventListener('mousedown', eventHandler);

    // Example 4: Mouse Up : basılıp çekildiğinde çalışır
    // var btn = document.querySelector('#btn')
    // function eventHandler(event){
    //     console.log(`Evet Type: ${event.type}`)
    // }
    // btn.addEventListener('mouseup', eventHandler);

    // Example 5: Mouse Over : imleç üzerine geldiğinde
    // var btn = document.querySelector('#btn')
    // function eventHandler(event){
    //     console.log(`Evet Type: ${event.type}`)
    // }
    // btn.addEventListener('mouseover', eventHandler);

    // 3) Keyboard Events
    // let input = document.querySelector('#txt')
    // function eventHandler(e){
    //     console.log('event type: ' + e.type) //eventin tipinin verir
    //     console.log('key code: ' + e.keyCode) //girilen harfin ascii karşılığnı verir
    //     console.log('value: ' + e.target.value) //girilen harfin ascii karşılığnı verir
    // }
    // input.addEventListener('keydown',eventHandler)//tuşa basıldığında çalışır
    // input.addEventListener('keyup',eventHandler)//tuşa basılıp çekildiğinde çalışır

    //     Example
    //     let input = document.querySelector('#txt')
    //     function eventHandler(e){
    //         console.log('event type: ' + e.type) //eventin tipinin verir
    //         e.target.style.backgroundColor = 'yellow' //text in içine tıklandığında rengini değiştirir
    //     }
    //     input.addEventListener('focus', eventHandler)
//STORAGE
    //Storage ler 2 çeşittir;
    //Local Storage: Tarayıcı geçmişi temizlenene ya da tarayıcı tamamen silinene kadar tuttuğu bilgileri saklamaktadır.
    //Session Storage: Tarayıcı kapandığı andan itibaren tuttuğu bilgiyi silmektedir.
    //Ortak Özellikler
    //* Her ikisi de kullanıcı bilgisayarında tutulur.
    //* Key, value string tipinde değer alırlar.
    //Storageler çerez mantığı ile çalışmaktadır. Aralarındaki en büyük farklardan biri performans farkıdır.
    //* Depolama boyutu storagelerde sınırsızken çerezlerde maksimum 4KB’a kadar çıkabilmektedir.
    //* Çerezler HTTP request ile iletilebilir fakat storagelerin her ikisinde de iletilmez.
    //* Çerezlerin bir son kullanım tarihi varken storagelerde bir kullanım tarihi yoktur.

    //Local ve Session Storage Kullanımı;
    //Local ve Session Storage kullanımları aşağıdaki gibidir.
    //setItem()
    //localStorage.setItem(key, value);
    //sessionStorage.setItem(key, value);
    //Storagelere ‘key’ ile bir anahtar sözcük ve ‘value’ ile bir değer atayarak veriyi depolarız.
    //getItem()
    //localStorage.getItem(key);
    //sessionStorage.getItem(key);
    //Tuttuğumuz veriyi sadece verdiğimiz ‘key’ ile çağırmak okurken bize yeterli olacaktır.
    //removeItem()
    //localStorage.removeItem(key);
    //sessionStorage.removeItem(key);
    //‘key’ini belirttiğimiz veriyi silmemize yarar.
    //clear()
    //localStorage.clear();
    //sessionStorage.removeItem(key);
    //Tüm Storage’i temizlemek için kullanılır.

    //1) Local Storage 
        //1.1) Set Item: İtem ekler
            // const firstName = localStorage.setItem('firstName', 'Ebubekir');
            // const lastName = localStorage.setItem('lastName', 'Cevik')

            // console.log(localStorage)
        //1.2) Get Item: Itemleri alır
            // const val = localStorage.getItem('firstName')
            // const val2 = localStorage.getItem('lastName')
            // console.log(val + ' ' + val2)
        //1.3)Remove Item: İtemleri siler
            // localStorage.removeItem('firstName')
            // localStorage.removeItem('lastName')
            // console.log(localStorage)
        //1.4)Clear
            // localStorage.clear();
            // console.log(localStorage)
        //1.5) For the arrays
            //1.5.1) Set Item
                // let hobies = ['yuzmek', 'koşmak', 'yemek yemek']
                // localStorage.setItem('hobies', hobies) //string şeklinde ekler
                // localStorage.setItem('hobies', JSON.stringify(hobies)) //dizi şeklinde ekler
                // console.log(localStorage)

            //1.5.2) Get Item
                // let val = JSON.parse(localStorage.getItem('hobies'))
                // console.log(val)
    //2) Session Storage
        // const city = sessionStorage.setItem('city', 'Istanbul')
        // const city = sessionStorage.setItem('country', 'Turkey')
        // console.log(sessionStorage)
                



    


