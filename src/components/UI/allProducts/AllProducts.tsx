import React, { useMemo, useState } from 'react';
import { ILeadersNft, nftLeaders } from '../../../data/DATA';
import ToggleButtons from '../toggleButtons/ToggleButtons';
import Card from '../card/Card';
import styles from './AllProducts.module.scss';
import ButtonList, { IListOfBtns } from '../buttonList/ButtonList';

interface IAllProductsProps{
    header?: string | undefined
    btns?: IListOfBtns[] | null
}

export interface IFunc{
    func: (el: ILeadersNft[]) => ILeadersNft[]
}
interface ITopCollectionProps{
    header: string
    btns?: boolean
}
const AllProducts:React.FC<IAllProductsProps> = ({header, btns}) => {

    const [filter, setFilter] = useState<IFunc>({func: (el:ILeadersNft[])=>el});
    
    let filterArray = useMemo(()=>filter.func(nftLeaders), [filter.func])

  return (
    <article className={styles.container}>
        <div className={styles.cardContainer}>
            {
                filterArray.map(prod=>(
                    <Card key={prod.id} product={prod} />
                ))
            }
        </div>
    </article>
  )
}

export default AllProducts;