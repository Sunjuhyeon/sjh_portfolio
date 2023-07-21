import React, { useState, useEffect } from 'react';
import hd from '../scss/hd.module.css';

function Hd(props) {
    const [isToggled, setIsToggled] = useState(false);

    const [scrollPosition, setScrollPosition] = useState(0);
    const updateScroll = () => {
        setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    }
    useEffect(() => {
        window.addEventListener('scroll', updateScroll);
    });

    return (
        <header id={props.id} className=''>
            <div isToggled={isToggled} className={`fixed-top d-flex justify-content-around align-items-center ${scrollPosition < 10 ? hd.FirstH : hd.AfterH}`}>
                <div className={`${hd.toggle} ${!isToggled ? `${hd.ulnone}` : `${hd.ulblock}`}`}
                    onClick={() => {
                        setIsToggled(!isToggled)
                    }}>
                    {/* <img className={`position-relative ${hd.hamImg} `} src={`${!isToggled ? "./img/SVG/hamMenuOn.svg" : "./img/SVG/hamMenuClose.svg"}`} alt="hamMenu" /> */}
                    <svg className={`position-relative ${hd.hamImg}`} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d={`${!isToggled ? "M3 12H21M3 5H12H21M3 19H12H21" : "M5 5L12.0711 12.0711L19.1421 19.1421" + "M19 5L11.9289 12.0711L4.85786 19.1421"}`} stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <ul className={`${hd.hamMenu}  position-absolute d-flex flex-column align-items-center justify-content-center p-0 m-0`}>
                        {
                            props.hddb.navi.gnb.map((val, x) => {
                                return (
                                    <li key={x} className={`${val.cls} ${hd.hamLi}`}>
                                        <a href={val.nm[1]} className={`${hd.hamA}`}>{val.nm[0]}</a>
                                    </li>
                                )
                            })
                        }
                        {
                            props.hddb.navi.sns.map((val, x) => {
                                return (
                                    <li key={x} className={`${val.adtitle} ${hd.snsAd} pt-5`}>
                                        <a href={val.adlink} className={`d-flex flex-column justify-content-center align-items-center ${scrollPosition < 10 ? "text-dark" : "text-white"}`}>
                                            {/* <i className={`${val.cls} ${hd.sns} text-white`}></i> */}
                                            <svg fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                                            </svg>
                                            {/* <span className={`text-white`}>{val.adtitle}</span> */}
                                        </a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <h1>
                    <a href="">
                        <img src={`${scrollPosition < 10 ? "./img/SVG/logoEn.svg" : "./img/SVG/logoEn.svg"}`} alt="" />
                    </a>
                </h1>
                <nav id={`${hd.gnb}`}>
                    <ul className={`m-0 p-0 d-flex ${hd.navWidth} justify-content-around`}>
                        {
                            props.hddb.navi.gnb.map((val, x) => {
                                return (
                                    <li key={x} className={val.cls}>
                                        <a href={val.nm[1]} className={`${scrollPosition < 10 ? "text-dark" : "text-white"}`}>{val.nm[0]}</a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </nav>
                <div>
                    <ul className={`m-0 p-0 d-flex`}>
                        {
                            props.hddb.navi.sns.map((val, idx) => {
                                return (
                                    <li className={`${val.adtitle} ${hd.snsAd}`} key={`sns`}>
                                        <a href={val.adlink} className={`d-flex flex-column justify-content-center align-items-center ${scrollPosition < 10 ? "text-dark" : "text-white"}`}>
                                            {/* <i className={`${val.cls} ${hd.sns}`}></i> */}
                                            <svg width="1.6rem" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                                            </svg>
                                            {/* <span>{val.adtitle}</span> */}
                                        </a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Hd;