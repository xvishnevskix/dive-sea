import React, {useState} from 'react';
import Button from '../../UI/button/Button';
import { photosList } from '../../../data/DATA';
import Arrow from '../../UI/icons/Arrow';
import Dots from '../../UI/icons/Dots';
import SlideButtons from '../../UI/slideButtons/SlideButtons';
import styles from './Preview.module.scss';
import { useNavigate } from 'react-router-dom';

const Preview: React.FC = () => {

  const [activePhoto, setActivePhoto] = useState<number>(1); 
  const [active, setActive] = useState<number>(1);
  const nav =  useNavigate();

  const prePhoto = ()=>{
    setActivePhoto((prevIndex) => (prevIndex === 0 ? photosList.length - 1 : prevIndex - 1));
    setActive(activePhoto)
  }
  const nextPhoto = ()=>{
    setActivePhoto((prevIndex) => (prevIndex === photosList.length - 1 ? 0 : prevIndex + 1))
    setActive((prevIndex) => (prevIndex === photosList.length - 1 ? 0 : prevIndex + 1))
  }
  
  return (
    <article className={styles.previewContainer}>
      <div className={styles.info}>
          <hr className={styles.hr}/>
          <h1>Discover And<br/> Create NFTs</h1>
          <p>Discover, Create and Sell NFTs On Our NFT Marketplace<br/> With Over Thousands Of NFTs And Get a <span>$20 bonus</span>.</p>
          <div className={styles.buttons}>
              <Button onClick={()=>nav('/DISCOVER')} name='EXPLORE MORE' theme='black' />
              <Button onClick={()=>nav('/SELL')} name='CREATE NFT' theme='white' />
          </div>
          <ul>
              <li><span>430K+</span>Art Works</li>
              <li><span>159K+</span>Creators</li>
              <li><span>87K+</span>Collection</li>
          </ul>
      </div>
      <div className={styles.photosSlider}>
        <img className={`${styles.mainImage} ${activePhoto === 1 ? styles.active : ''}`} src={require(`../../../components/UI/photo/Picture${activePhoto}.png`)} alt="mainPhoto" />
        <Arrow className={styles.arrow}/>
        <img className={`${styles.preImage} ${activePhoto === 1 ? styles.active : ''}`} src={require(`../../../components/UI/photo/Picture${activePhoto === 0 ? photosList.length - 1 : activePhoto - 1}.png`)} alt="prePhoto" />
        <Dots className={styles.dots}/>
        <SlideButtons className={styles.margin} preHandler={prePhoto} nextHandler={nextPhoto} />
      </div>
    </article>
  )
}

export default Preview;