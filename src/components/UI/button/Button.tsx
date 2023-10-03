import React from 'react';
import styles from './Button.module.scss';

interface IButton{
  name: React.ReactNode
  theme: string
  className?:string
  onClick?: ()=>void
}
const Button: React.FC<IButton> = ({name, theme, className, onClick}) => {
  return (
    <button onClick={onClick} className={`${theme==='black' ? styles.blackButton : styles.whiteButton} ${className}`}>{name}</button>
  )
}

export default React.memo(Button);