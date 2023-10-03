import React from 'react';
import Button from '../button/Button';
import styles from './ButtonList.module.scss';

export interface IListOfBtns{
    id: number
    value: React.ReactNode
}
interface IButtonList{
    btns: IListOfBtns[]
}
const ButtonList:React.FC<IButtonList> = ({btns}) => {
  return (
    <div className={styles.buttons}>
        {
            btns.map(btn=>(
                <Button key={btn.id} className={styles.margin} name={<p className={styles.button}>{btn.value}</p>} theme='white' />
            ))
        }  
    </div>
  )
}

export default ButtonList