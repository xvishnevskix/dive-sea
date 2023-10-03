import React from 'react';
import styles from './NewBid.module.scss';

const NewBid: React.FC<{position: string}> = ({ position }) => {

  return (
    <div className={`${styles.newBid} ${position}`}>
        <div className={styles.fullInformation}>
            <img src={require('../../../../ui/photo/Picture0.png')} className={styles.shortPhoto} alt='photo' />
            <div className={styles.textInfo}>
            <p>New bid <span>Rotation</span></p>
            <span className={styles.bold}>0.002 ETH</span>
            <span className={styles.date}>6 Oct 2022, 11:44 PM</span>
            </div>
            <img src={require('../../../../ui/photo/Picture0.png')} className={styles.bigPhoto} alt='photo' />
        </div>
    </div>
  )
}

export default NewBid;