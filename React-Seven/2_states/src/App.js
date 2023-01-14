import './App.css';
import {useState} from "react"; //state kullanımı için bu hook kullanılmalı

// state: componentler üzerinde değerinin değişme potansiyeli olan butun verileri tutan bir javascript objesidir.
// state ani değiltirilmesi gereken alanlar için kullanılır. statte
// değiştirdiğinde otomatik tekrar render edilir.
// state in değerinin değiştiği anda ilgili component render edilir.

function App() {
  const [name, setName] = useState("Mehmet") //setName: state in değerini değiştirecek olan fonskiyon. 'Mehmet' state in default değeridir
  const [age, setAge] = useState(29)
  const [friends, setFriends] = useState(["Ahmet", "Mehmet"])
  const[address, setAddress] = useState({title: "Istanbul", zip:45756})

  return (
    <div className="App">
      <h1>Merhaba {name}</h1>
      <h2>Yaş: {age}</h2>
      <button onClick={() => setName("Ahmet")}>Chane Name</button>
      <button onClick={() => setAge("28")}>Chane Name</button>
      <hr/>
      <br/>
      <br/>

      <h2>Friends</h2>
      {friends.map((item, index) => <div key={index}>{item}</div>)}
      <button onClick={() => setFriends([...friends, "Ayşe"])}>Add New Friend</button>
      <hr />
      <h2>Address</h2>
      <div>{address.title} --- {address.zip}</div>
      <button onClick={() => setAddress({...address ,title: "Ankara", zip: 6456})}>Update Address</button>
    </div>
  );
}

export default App;
