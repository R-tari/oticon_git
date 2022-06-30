import React,{useState,useEffect,useRef} from 'react';
import {ProductArea2} from '../data/data_article'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation'



const ProductSlide=()=>
{
    return(
        <article className='product2'>
        <div className="in-container">
          <h2 className='tit'>제품소개</h2>
          <div className="btn-box">
            <div className=" product-prev">prev</div>
            <div className=" product-next">next</div>
          </div>
          <Swiper
              modules={[Navigation]}
              loop={true}
              spaceBetween={13}
              slidesPerView={2}
             speed={500}
             navigation={{ // 네비게이션 적용, < >
              nextEl: '.product-next', // 다음 버튼 클래스명
              prevEl: '.product-prev', // 이전 버튼 클래스명

              
             }}
             observer={true}
             onTouchStart={(swiper,event)=>
             {
                 swiper.allowTouchMove=true;
             }}
             
             onTouchMove={(swiper,evevt)=>{
                 if(Math.abs(swiper.touches.startX-swiper.touches.currentX)>200)
                 {
                     swiper.allowTouchMove=false;
                 }

                
             }}
            >
          <div className="product-container">
           
            {ProductArea2.map(Product2=>
            {
              return(
                <SwiperSlide>
                    <div className="item">
                        <div className="img-box">
                            <img src={Product2.src} alt={Product2.alt} />
                        </div>
                        <div className="name">
                            <a href="#">

                            <p>
                            {Product2.txt}
                            </p>
                            </a>
                        </div>
                    </div>
                </SwiperSlide>
              )
            })
           }
          
          </div>
          </Swiper>
        </div>
      </article>
    )
}

export default ProductSlide;