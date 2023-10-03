import React from 'react';
import { ILeadersNft } from '../../../../data/DATA';
import Rhombus from '../../../../ui/icons/Rhombus';
import styles from './LinearCard.module.scss';

interface ILinearCard{
    product?: ILeadersNft
}
const LinearCard:React.FC<ILinearCard> = (props) => {

    const {product} = props;

  return (
    <>
        {
            product
              ? <div className={styles.linear}>
                    <img src={product.photo} alt='icon' className={styles.photo}/>
                    <p className={styles.sender}>{product.collection}<span>{product.sender}</span></p>
                    <div className={styles.analytic}>
                        <p>
                            <Rhombus />
                            {product.floorPrice}
                        </p> 
                        <span style={{color: `${product.analytics.startsWith('-') ? '#E23333' : '#10C352'}`}}>{product.analytics}</span>
                    </div>
                </div>
                : <div className={styles.linear}>
                    <p className={styles.emptyHeader}>Collection</p>
                    <p className={styles.emptyHeader}>Volume</p>
                  </div>
        }
    </>
  )
}

export default LinearCard;
