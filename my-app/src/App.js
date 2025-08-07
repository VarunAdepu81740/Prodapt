import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Home from './components/Home'
import Footer from './components/Footer'
import Aboutus from './components/Aboutus'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/Aboutus' element={<Aboutus />}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
