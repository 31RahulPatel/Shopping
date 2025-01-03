import React, { useEffect, useState } from 'react'
import './GoUp.css';
import Go_up from '../Assets/my_arrowup.png'
const GoUp = () => {
    const [isVisible, setIsVisible] = useState(false);
    const goToBtn = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };
    const listenToScroll = () => {

        let heightToHidden = 250;
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;

        if (winScroll > heightToHidden) {
            setIsVisible(true);


        }
        else {
            setIsVisible(false);

        }


    };
    useEffect(() => {
        window.addEventListener('scroll', listenToScroll);
        return ()=>window.removeEventListener("scroll",listenToScroll);
    }, []);


    return(
        <>
            {isVisible && (
                <div className='goup' onClick={goToBtn}>

                    <img src={Go_up} alt="" />

                </div>
            )}
        </>
    );
};

export default GoUp
