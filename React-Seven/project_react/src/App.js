import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from './components/Layout';
import Account from './components/Account';
import List from './components/List';


function App() {

  /*
  console.log('deneme')
  var http = require('http');
  var mockserver = require('mockserver'); 
  http.createServer(mockserver('.project_react/src/mocks.data.json')).listen(9001);
  */


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={< Layout />}>
          <Route path='/account' element={< Account />}/>
          <Route path="/list" index element={< List />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
