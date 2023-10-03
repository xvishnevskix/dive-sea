import React, { useState } from 'react';
import styles from './FollowButton.module.scss';

interface IFollowButtonProps{
  isClicked: boolean
}
const FollowButton:React.FC<IFollowButtonProps> = (props) => {
  
  const { isClicked } = props;
  const [isActive, setIsActive] = useState<boolean>(isClicked) 

  return (
    <button onClick={()=>setIsActive(prev=>!prev)} className={`${styles.followBtn} ${isActive ? styles.follow : styles.unFollow}`}>{isActive ? 'Follow' : 'Unfollow'}</button>
  )
}

export default FollowButton;