import React, { useMemo, useState } from 'react';
import { ILeadersNft, nftLeaders } from '../../../data/DATA';
import ToggleButtons from '../toggleButtons/ToggleButtons';
import Card from '../card/Card';
import { IFunc } from '../../home/topCollection/TopCollection';
import styles from './AllProducts.module.scss';
import ButtonList, { IListOfBtns } from '../buttonList/ButtonList';

interface IAllProductsProps{
    header?: string | undefined
    btns?: IListOfBtns[] | null
}
const AllProducts:React.FC<IAllProductsProps> = ({header, btns}) => {

    const [filter, setFilter] = useState<IFunc>({func: (el:ILeadersNft[])=>el});
    
    let filterArray = useMemo(()=>filter.func(nftLeaders), [filter.func])

  return (
    <article className={styles.container}>
        {/*<h1>{header}</h1>*/}
        {/*<ButtonList btns={btns} />*/}
        <div className={styles.cardContainer}>
            {
                filterArray.map(prod=>(
                    <Card key={prod.id} product={prod} />
                ))
            }
        </div>
        {/*<ToggleButtons filterArray={filterArray} setFilter={setFilter}/>*/}
    </article>
  )
}

export default AllProducts;