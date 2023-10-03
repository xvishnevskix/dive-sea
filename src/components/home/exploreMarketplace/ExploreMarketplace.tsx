import React from 'react';
import AllProducts from '../../UI/allProducts/AllProducts';
import { IListOfBtns } from '../../UI/buttonList/ButtonList';
import CategoryIcon from '../../UI/icons/CategoryIcon';
import CollectionIcon from '../../UI/icons/CollectionIcon';
import PriceIcon from '../../UI/icons/PriceIcon';

const ExploreMarketplace:React.FC = () => {

    const exploreMarketBTNS: IListOfBtns[] = [
        {
            id: 0,
            value: 'All'
        },
        {
            id: 1,
            value: <><CategoryIcon/> Category</>
        },
        {
            id: 2,
            value: <><CollectionIcon /> Collection</>
        },
        {
            id: 3,
            value: <><PriceIcon /> Price</>
        },
    ]
    
  return (
    <AllProducts header='Explore Marketplace' btns={exploreMarketBTNS} />
  )
}

export default ExploreMarketplace;