
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Componants/Home/Home';
import Header from './Componants/Header/Header';
import Footer from './Componants/Footer/Footer';
import NotFound from './Componants/NotFound/NotFound';
import Dashboard from './Componants/Dashboard/Dashboard';
import Blogs from './Componants/Blogs/Blogs';
import About from './Componants/About/About';
import Reviews from './Componants/Review/Review';
import Login from './Componants/Auth/Login/Login';
// import RequireAuth from './Componants/Auth/RequireAuth/RequireAuth';

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        {/* <Route path="/reviews" element={
          <RequireAuth>
            <Reviews />
          </RequireAuth>
        } /> */}

        <Route path='/reviews' element={<Reviews />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
