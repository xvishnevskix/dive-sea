import React from 'react';
import { ILeadersNft } from '../../../data/DATA';
import BlueCheckMark from '../icons/BlueCheckMark';
import Rhombus from '../icons/Rhombus';
import styles from './MeetCard.module.scss';

interface IMeetCardProps{
    product: ILeadersNft
}
const MeetCard: React.FC<IMeetCardProps> = ({ product }) => {

    const getRandomNumber = (max: number) =>{
        let randomRoundedNumb = +Math.random().toFixed();
        while(randomRoundedNumb*10 >= max){
            randomRoundedNumb = +Math.random().toFixed(1);
        }
        return randomRoundedNumb*10;
    }

  return (
    <article className={styles.cardArticle}>
        <img src={product.photo} className={styles.meetPhoto} alt="backPhoto" />
        <div className={styles.cardContainer}>
            <div className={styles.header}>
                <img src={product.photo} className={styles.avatar} alt="smallPhoto" />
                <p>{product.collection}<BlueCheckMark/></p>
            </div>
            <div className={styles.metrics}>
                <p><span className={styles.head}>{product.items}k</span><span>items</span></p>
                <p><span className={styles.head}>{product.owner}</span><span>owner</span></p>
                <p><span className={styles.head}><Rhombus/>{product.floorPrice}</span><span>floor price</span></p>
                <p><span className={styles.head}><Rhombus/>{product.volume}</span><span>traded</span></p>
            </div>
            <div className={styles.photoList}>
                <img src={require(`../photo/Picture${getRandomNumber(5)}.png`)} className={styles.photoItem} alt="photo" />
                <img src={require(`../photo/Picture${getRandomNumber(5)}.png`)} className={styles.photoItem} alt="photo" />
                <img src={require(`../photo/Picture${getRandomNumber(5)}.png`)} className={`${styles.photoItem} ${styles.lastPhoto}`} alt="photo" />
            </div>
        </div>
    </article>
  )
}

export default MeetCard;