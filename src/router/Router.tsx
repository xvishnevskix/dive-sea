import React from 'react';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import UpNavigation from '../components/UI/navigation/UpNavigation';
import Footer from '../components/UI/footer/Footer';
import Profile from "../components/Profile/Profile";

const Router:React.FC = () => {

  return (
    <HashRouter>
      <UpNavigation />
      <Routes>
          <Route path='*' element={<h2 style={{flex: "1 1 auto", padding: "250px"}}>Not found !</h2>} />
          <Route path='/' element={<Profile />} />
      </Routes>
      <Footer />
    </HashRouter>
  )
}

export default Router;