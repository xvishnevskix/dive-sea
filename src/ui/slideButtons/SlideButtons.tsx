import React from 'react';
import { ArrowRightOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import styles from './SlideButtons.module.scss'

interface ISlideButtons{
  className?: string,
  preHandler: ()=>void
  nextHandler: ()=>void
}
const SlideButtons: React.FC<ISlideButtons> = (props) => {

    const {className, preHandler, nextHandler} = props;
  return (
    <div className={`${styles.changeBTNS} ${className}`}>
        <button onClick={preHandler}><ArrowLeftOutlined style={{color: '#929292'}} /></button>
        <hr className={styles.btnBreak}/>
        <button onClick={nextHandler}><ArrowRightOutlined style={{color: '#23262F'}}/></button>
    </div>
  )
}

export default SlideButtons