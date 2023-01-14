
import './App.css';

import A from './components/A'
import B from './components/B'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div style={{color:'red', backgroundColor: 'White'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis beatae blanditiis laborum, id aliquam sunt corporis repudiandae. Fugit molestias quisquam laudantium, cumque pariatur commodi. Incidunt dolores omnis consequuntur adipisci quasi.</div>

        <A/>
        <B/>
      </header>
    </div>
  );
}

export default App;
