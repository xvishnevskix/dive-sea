import React from 'react';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import UpNavigation from '../components/UI/navigation/UpNavigation';
import Home from '../components/home/Home';
import Footer from '../components/UI/footer/Footer';
import Discover from '../components/discover/Discover';
import CardDetails from '../components/cardDatails/CardDetails';
import Creators from '../components/creators/Creators';
import Stats from '../components/stats/Stats';
import Sell from '../components/sell/Sell';
import Profile from "../components/profile/Profile";

const Router:React.FC = () => {

  return (
    <HashRouter>
      <UpNavigation />
      <Routes>
          <Route path='*' element={<h2>Not found !</h2>} />
          <Route path='/' element={<Profile />} />
          <Route path='/DISCOVER' element={<Discover />} />
          <Route path='/DISCOVER/:id' element={<CardDetails />} />
          <Route path='/CREATORS' element={<Creators />} />
          <Route path='/Sell' element={<Sell />} />
          <Route path='/STATS' element={<Stats />} />
      </Routes>
      <Footer />
    </HashRouter>
  )
}

export default Router;