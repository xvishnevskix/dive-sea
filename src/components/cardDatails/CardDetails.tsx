import { ArrowLeftOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ILeadersNft, nftLeaders } from '../../data/DATA';
import Button from '../../components/UI/button/Button';
import Rhombus from '../../components/UI/icons/Rhombus';
import Wallet from '../../components/UI/icons/Wallet';
import MySlider from '../../components/UI/slider/MySlider';
import styles from './CardDetails.module.scss';

const CardDetails: React.FC = () => {

    const { id } = useParams();

    const nav = useNavigate();
    
    const [card, setCard] = useState<ILeadersNft>();
    useEffect(()=>setCard(nftLeaders.find(el=>el.id===id)), [])

    if(!card) return <h1>Not found</h1>

  return (
    <>
        <div className={styles.backBtn} onClick={()=>nav('/DISCOVER')}>
            <ArrowLeftOutlined />
            Product Detail
        </div>
        <article className={styles.article}>
            <img src={card.photo} alt="mainPhoto" />
            <div className={styles.textInfo}>
                <h2>{card.collection}</h2>
                <p className={styles.discription}>A collection of 10,000 utility-enabled PFPs that feature a richly diverse and unique pool of rarity-powered traits. </p>
                <div className={styles.createdBy}>
                    <article>
                        <img src={require('../../components/UI/photo/DetailPhoto1.png')} alt="DetailPhoto1" />
                        <p><span>Created by</span>Perperzon</p>
                    </article>
                    <article>
                        <img src={require('../../components/UI/photo/DetailPhoto2.png')} alt="DetailPhoto2" />
                        <p><span>Owned by</span>Videz</p>
                    </article>
                </div>
                <div className={styles.metrics}>
                    <article>
                        <p>Current Bid<span><Rhombus />{card.floorPrice}</span></p>
                    </article>
                    <article>
                        <p style={{alignItems: 'end'}}>End in<span className={styles.date}>Jun 17, 2023 at 05:08</span></p>
                    </article>
                </div>
                <Button theme='black' className={styles.btn} name={<p className={styles.btnText}><Wallet/>Place Bid</p>} />
            </div>
        </article>
        <div className={styles.slider}>
            <h2 className={styles.headerOfOther}>Other Cards</h2>
            <MySlider />
        </div>
    </>
  )
}

export default CardDetails