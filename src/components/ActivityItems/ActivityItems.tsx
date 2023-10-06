import React from 'react';
import styles from "./ActivityItems.module.scss";
import {nftLeaders} from "../../data/DATA";
import Rhombus from "../UI/icons/Rhombus";

const ActivityItems:React.FC= () => {

   const data = nftLeaders[3]

    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.left}>
                    <img src={data.photo} alt='photo' className={styles.img}/>
                    <div className={styles.title}>
                        <h3 className={styles.token}>NeuVey</h3>
                        <h4 className={styles.name}>JenifferS   <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.83734 0.55249C2.91434 0.55249 0.544678 3.10807 0.544678 6.26039C0.544678 9.41271 2.91434 11.9683 5.83734 11.9683C8.76033 11.9683 11.13 9.41271 11.13 6.26039C11.13 3.10807 8.76033 0.55249 5.83734 0.55249ZM8.13146 5.29524C8.1737 5.24316 8.20586 5.1825 8.22605 5.11683C8.24623 5.05115 8.25403 4.98178 8.24899 4.9128C8.24395 4.84383 8.22617 4.77663 8.19669 4.71518C8.16722 4.65372 8.12664 4.59924 8.07735 4.55495C8.02807 4.51065 7.97106 4.47743 7.9097 4.45725C7.84833 4.43706 7.78384 4.43032 7.72002 4.43741C7.6562 4.4445 7.59434 4.46528 7.53808 4.49854C7.48182 4.53179 7.43229 4.57685 7.39241 4.63105L5.32347 7.30805L4.25291 6.15298C4.16216 6.05846 4.04062 6.00616 3.91446 6.00734C3.78831 6.00852 3.66763 6.06309 3.57842 6.1593C3.48921 6.25551 3.43861 6.38566 3.43751 6.52171C3.43642 6.65777 3.48491 6.78884 3.57256 6.88671L5.01601 8.44341C5.06329 8.49436 5.11989 8.53414 5.18221 8.56019C5.24453 8.58625 5.3112 8.59802 5.37797 8.59475C5.44474 8.59147 5.51014 8.57324 5.57001 8.54119C5.62989 8.50915 5.68291 8.46401 5.72571 8.40864L8.13146 5.29524Z" fill="#007AFF"/>
                        </svg>
                        </h4>
                    </div>
                </div>
                <div className={styles.right}>
                    <span className={styles.sale}>Sale</span>
                    <span className={styles.price}><Rhombus /> 16,4</span>
                    <span className={styles.time}>6 Minutes ago</span>
                </div>
            </div>


            <div className={styles.bottom}>
                <div className={styles.column}>
                    <h5 className={styles.info}>USD Price</h5>
                    <span className={styles.count}>$19K</span>
                </div>
                <div className={styles.column}>
                    <h5 className={styles.info}>Quantity</h5>
                    <span className={styles.count}>14.9K</span>
                </div>
                <div className={styles.column}>
                    <h5 className={styles.info}>floor price</h5>
                    <span className={styles.count}><Rhombus />{data.floorPrice}</span>
                </div>
                <div className={styles.column}>
                    <h5 className={styles.info}>traded</h5>
                    <span className={styles.count}><Rhombus />26,4</span>
                </div>
            </div>
        </div>
    );
};

export default ActivityItems;