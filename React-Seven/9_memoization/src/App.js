import './App.css';
import {useState, useMemo} from 'react';
import Header from './components/Header';

function App() {

  const [number, setNumber] = useState(0)

  //const data = {name: 'Bekir'} //Data bir obje ve reference tip olduğu için her tanımlamada referansı değiştiği için Header componentini her seferinde değiştirir. Bu onune geçmek için useMemo kullanılır

  const data = useMemo(() => {
    return {name: 'Mehmet'}
  }, [number])

  return (
    <div className="App">

      <Header /*number={number<5 ? 0 : number}*/ data={data}  number={number}/>{/*State her guncellendiğinde içerisindeki componentleri de yeniden render eder. BUnun onune geçmek için React.memo kullanılır. Bu durumda ancak component props gibi bir değerle kullanıldığında/çağırılda çalışır*/}

      <hr />
      <div>{number}</div>
      <button onClick={()=>{setNumber(number+1)}}>Button</button>
    </div>
  );
}

export default App;
