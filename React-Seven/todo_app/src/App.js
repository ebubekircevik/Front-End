import './App.css';
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';
import FooterInfo from './components/FooterInfo/FooterInfo';

function App() {
  return (
    <div className="App">
      <section className="todoapp">
        <Header/>
        <Body/>
        <Footer/>
      </section>
      <FooterInfo/>
    </div>
  );
}

export default App;
