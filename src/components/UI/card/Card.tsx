import React from 'react';
import Rhombus from '../icons/Rhombus';
import { ILeadersNft } from '../../../data/DATA';
import Button from '../button/Button';
import styles from './Card.module.scss';
import { useNavigate } from 'react-router-dom';

interface ICard{
  product: ILeadersNft
}
const Card: React.FC<ICard> = ({product}) => {

  const nav = useNavigate();

  return (
    <div className={styles.card}>
        <img src={product.photo} alt='photo' className={styles.image} />
        <header className={styles.header}>{product.collection}</header>
        <article>
            <p>
                Current bid
                <span> <Rhombus />{product.floorPrice}</span>
            </p>
            <Button className={styles.btn} name='PLACE BID' theme='black' onClick={()=>nav(`/DISCOVER/${product.id}`)}/>
        </article>
    </div>
  )
}

export default React.memo(Card);