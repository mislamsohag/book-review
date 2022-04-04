
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Componants/Home/Home';
import Header from './Componants/Header/Header';
import Footer from './Componants/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <h1 className='text-center text-3xl font-bold'>বই পর্যালোচনা সাইট</h1>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
