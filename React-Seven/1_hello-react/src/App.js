import './App.css';
import Header from './components/Header';
import React from 'react';
import User from './components/User';

const name = "Mehmet";
const surname = "Çevik"
const isLoggedIn = true

function App(){
  return(
    <>
      <h1 className='22'>Hello React</h1>
      <Header />
      <Header></Header>
      <p>//Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum optio rem quia dolor voluptatem omnis recusandae exercitationem unde ea iusto accusamus quibusdam, quaerat corporis voluptas minima qui esse voluptatibus saepe?</p>
      <h1>{`Benim adım ${name} soyadım ${surname}`}</h1>
      <h1>{isLoggedIn && "giriş yaptınız"}</h1>
      <h1>{isLoggedIn ? "giriş yaptınız" : "giriş yapmadınız"}</h1> 
      <User name="Mehmet" surname={"Çevik"}  isLoggedIn={true} age={29} friends={["Ali", "Mehmet", "Fatih"]} address={{title:'Ataşehir/Istanbul', zip:34755}}/>
    </>
  )
}

export default App;
