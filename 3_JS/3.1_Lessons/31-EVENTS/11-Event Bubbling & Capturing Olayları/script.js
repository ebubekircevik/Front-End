// Event Bubbling: İçten dışa dogru bir element yapısı varsa bu herbir elementin event i de varsa, en içteki elemana tıklandığında içten dışa dogru olan tum elemanların eventleri bundan etkilenir. İçten dışa dogru değilde dıştan içe dogru olması durumu ise Capturing dir. Bunun onune e.stopPropagation(); ile geçilir.

const form = document.querySelector('form');
const cardBody= document.querySelector('.card-body');
const card = document.querySelector('.card');
const container = document.querySelector('.container');


// form.addEventListener('click',function(e){
//     console.log('form');
//     e.stopPropagation();
// });

// cardBody.addEventListener('click',function(e){
//     console.log('card body');
//     e.stopPropagation();
// });

// card.addEventListener('click',function(e){
//     console.log('card');
//     e.stopPropagation();
// });

// container.addEventListener('click',function(e){
//     console.log('container');
//     e.stopPropagation();
// });


// Event Capturing

// form.addEventListener('click',function(e){
//     console.log('form');
//     e.stopPropagation();
// },true);

// cardBody.addEventListener('click',function(e){
//     console.log('card body');
//     e.stopPropagation();
// },true);

// card.addEventListener('click',function(e){
//     console.log('card');
//     e.stopPropagation();
// },true);

// container.addEventListener('click',function(e){
//     console.log('container');
//     e.stopPropagation();
// },true);


// const deleteItems = document.querySelectorAll('.fa-times');

// deleteItems.forEach(function(item){
//     item.addEventListener('click',function(e){
//         console.log(e.target);
//     })
// });

const ul = document.querySelector('ul');

ul.addEventListener('click',function(e){ //ul nin butun child ları eğer if gibi şartlar yoksa bu event ten etkilenir.
    
    if(e.target.className==='fas fa-times'){
        e.target.parentElement.parentElement.remove(); //x ikonuna tıklandığında onu parenttını siler
        e.preventDefault();
    }
});



