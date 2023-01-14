



// React
// var template = React.createElement(
//     'h1',
//     null,
//     'Hello World'
// );

// var name = "Samsung S10";
// var price = 5000;
// var description = "çok iyi bir telefon"

// function formatPrice(p){
//   return p.price + " TL"
// }

/*
function getDescription(description){
  if(description){
    return description;
  }else{
    return 'no description'
  }
}
*/

// function getDescription(description){
//   if(description){
//     return <p id="product-desc">description: {description}</p>
//   }
// }

// var product = {
//   name: 'Samsung S11',
//   price: 5000,
//   description: 'iyi telefon',
//   types: []
// }
 
/*
var template2 = (<div id="product-details">
<h2 id="product-name">name: {product.name}</h2>
<p id="product-price">price: {formatPrice(product)}</p>
<p id="product-desc">desrcription: {product.description}</p>
</div>); 
*/     


// var template2 = (
//   <div id="product-details">
//       <h2 id="product-name">nameeeeeeeee: {product.name ? product.name:'no name'}</h2>
//       {(product.price && product.price > 0) && <p>price: {product.price} TL</p> } {/* product.price && product.price>0 şartları sağlanırsa  <p>price: {product.price} TL</p>  expression değerini basar*/}
//       {getDescription(product.description)}
//       <p>{product.types.length > 0 ? 'there are options' : 'no options'}</p>
//   </div>
// );   

// JSX - Javascript XML
var root = document.getElementById('root');

//JSX Soz dizimleri
var template = <div class="container">
                <h1 id="header" class="heade">Hello Worldes</h1>
                <div>Lorem ipsum dolor sit amet.</div>
                <ul>
                  <li>Lorem ipsum dolor sit amet.</li>
                  <li>Quis quasi molestias totam id.</li>
                  <li>Sed aspernatur iure temporibus atque.</li>
                </ul>
                </div>;

var number = 0;
var btnOneClassName = "btnRed"
var btnMinusClassName = "btnBlue"

function addOne() {
  number++;
  renderApp();
  console.log('add one');
}

var minusOne = () => {
  number--;
  renderApp();
  console.log('minus one');
}

function renderApp() { //normalde render, uygulama sayfaya ilk yuklendiğinde gerçekleşir. Fakat number değişkeni değeri sürekli değiştiği için değişen değerin yansıması için tekrar render edilmesi gerekir. 
  var template2 = (
      <div>
          <h1>Number: {number}</h1>
          <button id="btnPlusOne" className={btnOneClassName} onClick={addOne}>+1</button>
          <button id="btnMinusOne" className={btnMinusClassName} onClick={minusOne}> -1 </button>
      </div>
  );

  // ReactDOM
  ReactDOM.render(template2, root);
}

renderApp();

function tick(){
  var element = (
    <div>
      <h1>time is: {new Date().toLocaleTimeString()}</h1>
    </div>
  )
  ReactDOM.render(element, root)
}
setInterval(tick, 1000);


