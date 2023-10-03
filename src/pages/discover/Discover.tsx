import React from 'react';
import AllProducts from '../../ui/allProducts/AllProducts';
import { IListOfBtns } from '../../ui/buttonList/ButtonList';
import CategoryIcon from '../../ui/icons/CategoryIcon';
import CollectionIcon from '../../ui/icons/CollectionIcon';
import PriceIcon from '../../ui/icons/PriceIcon';

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