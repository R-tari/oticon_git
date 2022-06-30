import React,{useState,useEffect,useRef} from 'react';
import {Store_Date } from '../data/data_article'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation'




const CardSlide=()=>{

   
    const [Slider,setSlider] = useState(0);
    const slideRef=useRef(0);
    const swiper = useSwiper(0)
  

    function Next()
    {
        if(Slider>=9) 
            return;

        setSlider(Slider+1);
    }

    function Prev()
    {
        if(Slider<=0) 
            return;

        setSlider(Slider-1);
    }

 
   

    return(
        <article className="contents store">
            <div className="in-container">
                <h2 className="tit">신규 대리점 소개</h2>
                <div className="btn-box">
                    <div className="btn prev" onClick={Prev}>Prev</div>
                    <div className="btn next" onClick={Next}>Next</div>
                </div>
                <div className="store-container" ref={slideRef}>
                <Swiper
                    modules={[Navigation]}
                    loop={true}
                    spaceBetween={10}
                    slidesPerView={1}
                   speed={500}
                   navigation={{ // 네비게이션 적용, < >
                    nextEl: '.next', // 다음 버튼 클래스명
                    prevEl: '.prev', // 이전 버튼 클래스명
                   
                }}

                observer={true}
                onTouchStart={(swiper,event)=>
                {
                    swiper.allowTouchMove=true;
                }}
                
                onTouchMove={(swiper,evevt)=>{
                    if(Math.abs(swiper.touches.startX-swiper.touches.currentX)>220)
                    {
                        swiper.allowTouchMove=false;
                    }

                   
                }}
                    
                // onSliderMove={(swiper)=>{

                //                             if(swiper.$el.mouseout)
                //                             swiper.slideNext                             
                //                         }}
                

                
                >
                
                
                

                {Store_Date.map(StoreCon=>
                {
                    return(
                        <SwiperSlide>
                          

                    <div className="store-contents">    
                        <div className="img-box">
                        <a href={StoreCon.href}>
                            <img src={StoreCon.src} alt={StoreCon.alt} />
                        </a>
                        </div>    

                        <div className="info-container">
                        <a href={StoreCon.href} className='info'>
                            <p>
                            <span>{StoreCon.storeTit}</span>
                            </p>
                            <address>
                            {StoreCon.address}
                            </address>
                            <p className="tel">
                            {StoreCon.tel}
                            </p>
                        </a>
                        <a href="#">
                            <div className="btn-more">
                                자세히 보기
                            </div>
                            </a>

                        </div>
                    </div>
                        </SwiperSlide>
                    )
                }

                )}
                </Swiper>
                
                </div>
            </div>
            
            
        </article>
    )
}

export default CardSlide;



