import React, { useEffect, useRef, useState } from 'react';
import { nftLeaders } from '../../../data/DATA';
import Card from '../card/Card';
import SlideButtons from '../slideButtons/SlideButtons';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styles from './MySlider.module.scss';

function SampleNextArrow(props:any) {
    const { style } = props;
    return <div style={{ ...style, display: "none"}}/>
}

function SamplePrevArrow(props:any) {
    const { style } = props;
    return <div style={{ ...style, display: "none"}}/>
}
  
const MySlider:React.FC = () => {

    const [width, setWidth] = useState<number>(0);

    const checkWidth = (width: number) => {
        if(width > 900) return 4
        if(width <= 900 && width > 750) return 3
        if(width <= 750 && width > 600) return 2
        if(width < 650) return 1.4
        return 0
    }

    const settings = {
        className: styles.slider,
        slidesToShow: checkWidth(width),
        speed: 500,
        swipeToSlide: true,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow/>,
        prevArrow: <SamplePrevArrow/>
    };
    
    const sliderRef = useRef<Slider | null>(null);

    const next = () => {
        if (sliderRef.current) {
            sliderRef.current.slickNext();
        }  
    };

    const previous = () => {
        if (sliderRef.current) {
            sliderRef.current.slickPrev();
        }
    };

    useEffect(()=>{
        window.addEventListener('resize', ()=>setWidth(window.innerWidth))
        setWidth(window.innerWidth)
    }, []);

  return (
    
    <>
        <Slider ref={sliderRef} {...settings}>
            {
                nftLeaders.map(prod=>(
                    <Card key={prod.floorPrice} product={prod} />
                ))
            }
        </Slider>
        <SlideButtons className={styles.bgSlideButtons} preHandler={previous} nextHandler={next}/>
    </>
  )
}

export default MySlider;