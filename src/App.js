import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './componentes/Footer'
import Forms from './componentes/Forms'
import Home from './componentes/Home'
import NavBar from './componentes/Navbar'
import QuemSomos from './componentes/Sobre';

function App() {
 return (
    <Router>
        <header>
      <div className="App">
          <NavBar/>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/Forms' element={<Forms/>} />
              <Route path='/Sobre' element={<QuemSomos/>} />
            </Routes>
          <Footer/>
      </div> 
        </header>
    </Router>
);
}
export default App;