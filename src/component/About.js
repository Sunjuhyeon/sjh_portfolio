import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import {  } from 'swiper';
import about from '../scss/about.module.css';

function About(props) {
    return (
        <section id={props.id} className={`${about.section}`}>
            <div id={`${about.box}`} className={`container`}>
                <div id={`${about.imgSection}`}>
                    <Swiper
                        slidesPerView={1}
                        loop={true}
                        className="mySwiper d-flex align-items-center"
                    >
                        <SwiperSlide>
                            <img src="./img/aboutimg.jpeg" alt="aboutimg" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://dummyimage.com/350X462/e0e0e0/000000" alt="aboutimg" />
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div id={`${about.script}`} className={`d-flex flex-column justify-content-center`}>
                    <img className={`${about.icon}`} src="./img/doubleQuote0.png" alt="icon" />
                    <div className={`${about.main}`}>
                        <p className={`m-0 ${about.text0}`}>안녕하세요.</p>
                        <br /><div className={`m-0 ${about.highlight}`}>
                            <p className={`m-0 ${about.text1}`}>효율적인 서치능력, 꾸준한 기록, 신속한 속도</p>
                            <div className={`${about.mark}`}></div>
                        </div>
                        <p className={`m-0 ${about.text0}`}>그리고 <span className={`${about.nonetext}`}>열린마음으로</span> <em className={`${about.em}`}>새로운 아이디어를 환영</em>하는 개발자</p>
                        <br /><p className={`m-0 ${about.text2}`}>선주현입니다.</p>
                    </div>
                    <div className={`${about.sub} d-flex flex-column`}>
                        <p className={`m-0`}><i class="bi bi-record-circle-fill"></i>생년월일 : <span>97.12.15</span></p>
                        <p className={`m-0`}><i class="bi bi-record-circle-fill"></i>학력사항 : <span>숙명여자대학교(졸)</span></p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;



{/* <ul className={`p-0 m-0 d-flex`}>
                        {
                            props.info.aboutdb.icon.map((v, x) => {
                                return (
                                    <li key={x} className={`px-5`}>
                                        <div className={`${about.box}`}>
                                            <i className={`${v.i} ${about.iconSize}`}></i>
                                            <div className={`d-flex flex-column ms-4`}>
                                                <span className={`${about.titleSize} mb-1`}>{v.title}</span>
                                                <p className={`${about.contentSize}`}>{v.content}</p>
                                            </div>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul> */}