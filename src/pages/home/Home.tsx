import React from 'react';
import Preview from './preview/Preview';
import WeeklyTop from './weeklyTop/WeeklyTop';
import TopCollection from './topCollection/TopCollection';
import ExploreMarketplace from './exploreMarketplace/ExploreMarketplace';
import JustUnleash from './justUnleash-article/JustUnleash';
import CreateSell from './create&Sell/CreateSell';

const Home:React.FC = () => {
  return (
    <>
      <Preview />
      <WeeklyTop />
      <TopCollection header='Top Collection'/>
      <ExploreMarketplace />
      <JustUnleash />
      <CreateSell />
    </>
  )
}

export default Home;