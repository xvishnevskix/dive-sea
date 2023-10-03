import React from 'react';
import styles from './BestSellecrs.module.scss';
import { nftLeaders } from '../../../../data/DATA';
import ListItemOfBest from './listItemOfBest/ListItemOfBest';

const BestSellers: React.FC = () => {
  return (
    <article  className={styles.articleBestSellers}>
        <h2>Best Sellers</h2>
        <ul>
          {
            nftLeaders.slice(0, 6).map(item=>(
              <ListItemOfBest key={item.collection} item={item} />
            ))
          }
        </ul>
    </article>
  )
}

export default BestSellers;