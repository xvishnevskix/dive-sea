import React from 'react';
import { ILeadersNft } from '../../../../../data/DATA';
import FollowButtons from '../../../../../ui/followButtons/FollowButton';
import styles from './ListItemOfBest.module.scss';

const ListItemOfBest:React.FC<{item: ILeadersNft}>= ({ item }) => {
  return (
    <div className={styles.listItem}>
        <img src={item.photo} className={styles.listPhoto} alt='photo' />
        <p className={styles.info}>
            {item.collection}
            <span>@{item.collection.split(' ').join('_')}</span>
        </p>
        <FollowButtons isClicked={item.analytics.includes('-')} />
    </div>
  )
}

export default ListItemOfBest