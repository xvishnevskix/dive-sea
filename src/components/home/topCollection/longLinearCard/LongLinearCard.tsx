import React from 'react';
import { ILeadersNft } from '../../../../data/DATA';
import Rhombus from '../../../UI/icons/Rhombus';
import styles from './LongLinearCard.module.scss';

const LongLinearCard: React.FC<{product?: ILeadersNft}> = ({product}) => {
  return (
    <>
      {
      product
        ?
        <article className={styles.article}>
            <div className={styles.header}>
                <img src={product?.photo} alt="photo" />
                <p className={styles.sender}>{product?.collection}<span>{product?.sender}</span></p>
            </div>
            <p className={`${styles.value} ${styles.bold}`}><Rhombus/>{product?.volume}</p>
            <p className={`${styles.value} ${styles.floorPrice}`} style={{color: `${product?.analytics.startsWith('-') ? '#E23333' : '#10C352'}`}}>{product?.analytics}</p>
            <p className={`${styles.value} ${styles.bold}`} style={{flex: 0}}><Rhombus/>{product?.floorPrice}</p>
            <p className={`${styles.value} ${styles.ownerAndItem}`}>{product?.owner}</p>
            <p className={`${styles.value} ${styles.ownerAndItem}`}>{product?.items}</p>
        </article>
          :<article className={styles.headerArticle} >
              <div className={styles.header} style={{flex: .55, justifyContent: ''}}>
                  <p className={styles.itemHeader}>Collection</p>
              </div>
              <p className={styles.itemHeader}>Volume</p>
              <p className={styles.itemHeader}>24h %</p>
              <p className={styles.itemHeader} style={{flex: .12, width: '100%'}}>Floor Price</p>
              <p className={styles.itemHeader}>Owner</p>
              <p className={styles.itemHeader}>Items</p>
          </article>
      }
    </>
  )
}

export default React.memo(LongLinearCard);