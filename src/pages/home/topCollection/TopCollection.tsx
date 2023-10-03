import React, { useMemo, useState } from 'react';
import { ILeadersNft, nftLeaders } from '../../../data/DATA';
import LongLinearCard from './longLinearCard/LongLinearCard';
import ToggleButtons from '../../../ui/toggleButtons/ToggleButtons';
import styles from './TopCollection.module.scss';
import LinearCard from '../weeklyTop/linearCard/LinearCard';
import ButtonList from '../../../ui/buttonList/ButtonList';
import CategoryIcon from '../../../ui/icons/CategoryIcon';
import CollectionIcon from '../../../ui/icons/CollectionIcon';
import PriceIcon from '../../../ui/icons/PriceIcon';

export interface IFunc{
    func: (el: ILeadersNft[]) => ILeadersNft[]
}
interface ITopCollectionProps{
    header: string
    btns?: boolean
}
const TopCollection:React.FC<ITopCollectionProps> = ({header, btns}) => {
    
    const [filter, setFilter] = useState<IFunc>({func: (el:ILeadersNft[])=>el.slice(0, 4)});
    
    let filterArray = useMemo<ILeadersNft[]>(()=>filter.func(nftLeaders), [filter.func]);

    const statsBtns = [
        {
            id: 1,
            value: <><CategoryIcon /> Category</>
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
    <div className={styles.container}>
        <h1>{header}</h1>
        { btns && <ButtonList btns={statsBtns}/> }
        <div className={styles.longCardList}>
            <LongLinearCard />
            {
                filterArray.map(prod=>(
                    <LongLinearCard key={prod.collection} product={prod} />
                ))
            }
        </div>
        <div className={styles.shortCardList}>
            <LinearCard />
            {
                filterArray.map(prod=>(
                    <LinearCard key={prod.id} product={prod} />
                ))
            }
        </div>
        <ToggleButtons filterArray={filterArray} setFilter={setFilter} />
    </div>
  )
}

export default TopCollection;