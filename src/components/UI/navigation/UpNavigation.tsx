import React, { useState } from 'react';
import Logo from '../icons/Logo';
import Button from '../button/Button';
import { NavLink, useNavigate } from 'react-router-dom';
import Search from '../icons/Search';
import styles from './UpNavigation.module.scss';
import { MenuOutlined } from '@ant-design/icons';

const UpNavigation: React.FC = () => {

  const nav = useNavigate();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  
  return (
    <>
      <nav className={styles.navigation}>
          <p className={styles.logo}>
            <Logo onClick={()=>nav('/')}/>
            <span>DiveSea</span>
          </p>
          <MenuOutlined className={styles.burger} onClick={()=>setIsOpen(pre=>!pre)} />
          <ul>
              <li><NavLink to='/DISCOVER' className={({isActive})=>isActive ? styles.active : styles.navLink}>DISCOVER</NavLink></li>
              <li><NavLink to='/CREATORS' className={({isActive})=>isActive ? styles.active : styles.navLink}>CREATORS</NavLink></li>
              <li><NavLink to='/SELL' className={({isActive})=>isActive ? styles.active : styles.navLink}>SELL</NavLink></li>
              <li><NavLink to='/STATS' className={({isActive})=>isActive ? styles.active : styles.navLink}>STATS</NavLink></li>
          </ul>
          <label className={styles.label}>
            <span><Search /></span>
            <input placeholder='Search Art Work / Creator'/>
          </label>
          <Button onClick={()=>nav('/SELL')} name='Connect Wallet' theme='black' className={styles.btn} />
      </nav> 
      <ul className={`${styles.downMenu} ${isOpen ? styles.open : '' }`}>
        <li><NavLink to='/DISCOVER' className={({isActive})=>isActive ? styles.active : styles.navLink}>DISCOVER</NavLink></li>
        <li><NavLink to='/CREATORS' className={({isActive})=>isActive ? styles.active : styles.navLink}>CREATORS</NavLink></li>
        <li><NavLink to='/SELL' className={({isActive})=>isActive ? styles.active : styles.navLink}>SELL</NavLink></li>
        <li><NavLink to='/STATS' className={({isActive})=>isActive ? styles.active : styles.navLink}>STATS</NavLink></li>
      </ul>
    </>
  )
}

export default UpNavigation;