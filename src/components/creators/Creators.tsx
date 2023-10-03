import React from 'react'
import { nftLeaders } from '../../data/DATA';
import MeetCard from '../../components/UI/meetCard/MeetCard';
import styles from './Creators.module.scss';

const Creators:React.FC = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Meet Our Great Creators</h2>
      <div className={styles.list}>
        {
            nftLeaders.map(prod=>(
                <MeetCard key={prod.id} product={prod} />
            ))
        }
      </div>
    </div>
  )
}

export default Creators;