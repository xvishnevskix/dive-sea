import React from 'react';
import AllProducts from '../../components/UI/allProducts/AllProducts';
import { IListOfBtns } from '../../components/UI/buttonList/ButtonList';
import CategoryIcon from '../../components/UI/icons/CategoryIcon';
import CollectionIcon from '../../components/UI/icons/CollectionIcon';
import PriceIcon from '../../components/UI/icons/PriceIcon';

const Discover = () => {

    const discoverBTNS:IListOfBtns[] = [
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
    <AllProducts header='Discover NFTs' btns={discoverBTNS} />
  )
}

export default Discover