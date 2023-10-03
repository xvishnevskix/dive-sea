import React from 'react';
import Logo from '../icons/Logo';
import { FacebookOutlined, InstagramOutlined, LinkedinOutlined, TwitterOutlined } from '@ant-design/icons';
import styles from './Footer.module.scss';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
        <header className={styles.logo}>
            <Logo color='#FFF'/>
            <h2>DiveSea</h2>
        </header>
        <div className={styles.sotialNetworks}>
            <a href='https://www.instagram.com/kirik_10/' target='_blank'><InstagramOutlined style={{fontSize: '35px', color: '#FFF'}} /></a>
            <a href='https://www.linkedin.com/in/kirik-kostya-516b9528a/' target='_blank'><LinkedinOutlined style={{fontSize: '35px', color: '#FFF'}} /></a>
            <FacebookOutlined style={{fontSize: '35px', color: '#FFF'}} />
            <TwitterOutlined style={{fontSize: '35px', color: '#FFF'}} />
        </div>
    </footer>
  )
}

export default Footer;