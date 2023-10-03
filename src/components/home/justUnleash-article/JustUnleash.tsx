import React from 'react';
import Button from '../../UI/button/Button';
import { ArrowRightOutlined } from '@ant-design/icons';
import CheckMark from '../../UI/icons/CheckMark';
import NewBid from './newBid/NewBid';
import BestSellers from './bestSellers/BestSellers';
import RecentViewed from '../weeklyTop/recentViewed/RecentViewed';
import styles from './JustUnleash.module.scss';

const JustUnleash: React.FC = () => {
  return (
    <article className={styles.unleashArticle}>
        <div className={styles.infoPath}>
            <h2><span>Just Unleash -</span> <br/>Your Inner Collector</h2>
            <ul className={styles.list}>
                <li><CheckMark /> Best Seller All Around World</li>
                <li><CheckMark /> $2M+ Transections Every Day</li>
                <li><CheckMark /> Secure Transactions</li>
                <li><CheckMark /> Exclusive Collections From Sellers</li>
                <li><CheckMark /> Easy Buying and Selling</li>
                <li><CheckMark /> Join Our Community</li>
            </ul>
            <Button name={<span>Explore more <ArrowRightOutlined /></span>} className={styles.btn} theme='black' />
        </div>
        <div className={styles.graphPath}>
          <NewBid position={styles.newBindPosition}/>
          <BestSellers />
          <RecentViewed positionClass={styles.recentViewed}/>
        </div>
    </article>
  )
}

export default JustUnleash;