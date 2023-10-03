import React from 'react';
import MySlider from '../../UI/slider/MySlider';
import RecentViewed from './recentViewed/RecentViewed';
import styles from './WeeklyTop.module.scss';

const WeeklyTop: React.FC = () => {
  
  return (
    <article className={styles.weeklyContainer}>
        <h1 className={styles.header}>Weekly - Top NFT</h1>
        <MySlider />
        <RecentViewed positionClass={styles.recentViewedPosition}/>
    </article>
  )
}

export default WeeklyTop;
