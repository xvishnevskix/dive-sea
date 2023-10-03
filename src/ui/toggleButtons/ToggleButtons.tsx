import React from 'react';
import { ILeadersNft } from '../../data/DATA';
import { IFunc } from '../../pages/home/topCollection/TopCollection';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';
import styles from './ToggleButtons.module.scss';

interface IToggleButtonsProps{
    filterArray: ILeadersNft[]
    setFilter: (value: React.SetStateAction<IFunc>) => void
} 
const ToggleButtons:React.FC<IToggleButtonsProps> = (props) => {

    const {filterArray, setFilter} = props;
    
  return (
    <div className={styles.toggleContainer}>
        {
          filterArray.length===4
              ? <button className={styles.toggleButton} onClick={()=>setFilter({func: (el:ILeadersNft[])=>el})}>Explore All <ArrowRightOutlined style={{color: '#ACADB9', marginLeft: '5px'}} /></button>
                  : <button className={styles.toggleButton} onClick={()=>setFilter({func: (el:ILeadersNft[])=>el.slice(0, 4)})}>Hide <ArrowLeftOutlined style={{color: '#ACADB9', marginLeft: '5px'}} /></button>
        }
    </div>
  )
}

export default ToggleButtons;