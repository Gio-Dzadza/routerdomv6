import './App.css';
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
    // <div>hi</div>es ar imushavebs
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/profile">Profile</Link>
      </nav>
      {/* routes-is garet rac aris yvela gverdze gamochndeba 
      statikurad am shemtxvevashi nav-ic da footeric*/}
      <Routes>
        {/* es routers aris switch-is nacvlad am versiashi
          zustad igives aketebs*/}
        <Route path="/" element={<Home />} />
        {/* <Route path='/'>
          <Home />
        </Route>  egre aghar mushaobs*/}
        {/* route da misi path igivea, ubralod aq element daemata
        anu route tegebs shoris kiar vaqcevt komponents
        pirdapir elementad vuwert rogorc parametri */}
        <Route path="/about" element={<About />} />
        <Route path="/profile/:username" element={<Profile />} />
        <Route path="*" element={<ErrorPage />} />
        {/* es varskvlavic igivea anu bolo unda iyos routebshi da 
        to romelime path-s ar emtxveva am elements ushvebs */}
      </Routes>
      <div>Footer</div>
    </Router>
  );
}

export default App;
