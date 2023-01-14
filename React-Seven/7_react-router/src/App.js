import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';
import User from './components/User';
import Error404 from './components/Error404';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={< Layout />}>
          <Route path='/' element={< Home />}/> {/*exact prop u url in birebir eşleşmesini sağlar*/}
          <Route path="about" index element={< About />}/>
          <Route path="users" element={< Users />}>
            <Route path=":id" element={< User />}/>  
          </Route> 
          <Route path="/*" index element={< Error404 />}/>   
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
