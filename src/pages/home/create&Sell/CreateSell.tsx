import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './CreateSell.module.scss';

const CreateSell: React.FC = () => {

  const nav = useNavigate();

  return (
    <article className={styles.createAndSellArticle}>
        <div className={styles.textPart}>
            <h2>Create and Sell NFTs</h2>
            <p>World’s Largest NFT Place</p>
            <div className={styles.btns}>
                <button onClick={()=>nav('/DISCOVER')} className={styles.exploreBtn}>Explore More</button>
                <button onClick={()=>nav('/SELL')} className={styles.sellBtn}>Sell Artwork</button>
            </div>
        </div>
        <img src={require('../../../ui/photo/Picture0.png')} className={styles.blur} alt='photo' />
        <img src={require('../../../ui/photo/Picture0.png')} className={styles.photo} alt='photo' />
    </article>
  )
}

export default CreateSell;