
import React,{useState,useEffect,useRef} from 'react';
import '../styles/App.css';
import Slide from './Slide';
import Nav from './Nav';
import CardSlide from './cardSlide';
import ProductSlide from './productSlide';
import { DUMMY_SRC,FooterList } from '../data/data_nav';
import { News,ProductArea1,Search_Store } from '../data/data_article';






















function Header() {
  return(
    <header class="header">
     
          <div class="out-container">
            <div className="in-container">
            <div className="utill">
              <ul>
                  <li><a href="#">LOGIN</a></li>
                  <li><a href="#">JOIN</a></li>
              </ul>
            </div>

              <div className="sns">
                <ul>
                  {/* <li>
                      <a href="#">
                          <img src="/images/icon_sns1.png" alt="facebook"/>
                      </a>
                  </li>
                  <li>
                      <a href="#">
                          <img src="/images/icon_sns2.png" alt="oticonkorea"/>
                      </a>
                  </li>
                  <li>
                      <a href="#">
                          <img src="/images/icon_sns3.png" alt="blog"/>
                      </a>
                  </li> */}
                  {DUMMY_SRC.map(
                    (
                      list=>
                        <li className='test' key={list.id}><a href={list.href}>
                          <img src={list.src} alt='t'/>
                        </a></li>
                    )
                  )}
                </ul>
              </div>
            </div>
          </div>
      
        <Nav />
    </header>
  );
}

function Section()
{
  return(
    <section className="full-container">
   
        {/* <div className="full-contents">
          <div className="slider">
            <div className="img-box">
              <img src="/images/slide1.jpg" alt="슬라이드1" />
            </div>
            <div className="img-box">
              <img src="/images/slide2.jpg" alt="슬라이드1" />
            </div>
            <div className="img-box">
              <img src="/images/slide3.jpg" alt="슬라이드1" />
            </div>
            <div className="img-box">
              <img src="/images/slide4.jpg" alt="슬라이드1" />
            </div>
          </div>
        </div> */}
        <Slide/>
     
        {/* <div className="btn-slide">
            <div className="btn-slider">
              {Slide_Btn.map(SlideBtn=>
                {
                  return(<div className="slide-btn" id={SlideBtn.id}>
                          <p>{SlideBtn.txt}</p>
                        </div>)
                })}
            </div>
          </div> */}
     

      
      

      <CardSlide/>
        {/* <article className="contents store">
          <div className="in-container">
            <h2 className="tit">신규 대리점 소개</h2>
            <div className="btn-box">
              <div className="btn next">next</div>
              <div className="btn prev">prev</div>
            </div>
            <div className="store-container">
          
            {Store_Date.map(StoreCon=>
            {
              return(
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
              )
            }

            )}
            </div>
          </div>
          
         
        </article> */}

        {Search_Store.map(SearchCon=>
          {
            return(
              <article className="contents search">
               
                  <h2 className="tit">{SearchCon.tit}</h2>
                      <a href="#" className='info'>
                        <p>전국 오티콘 코리아 매장을<br/>쉽게 찾으실 수 있습니다.</p>
                      </a>
                      <a href="#">
                        <div className="btn-more">
                          자세히 보기
                        </div>
                      </a>
                
              </article>
            )
          })}

      
        <div className="product1">
          {ProductArea1.map(Product1=>
          {
            return(
              <article className="contents product">
                <a href="#">
                  <div className="out-box">
                    <div className="in-box">
                      <h2 className="tit">{Product1.tit}</h2>     
                      <p>{Product1.txt}</p>
                    </div>
                    <div className="img-box">
                        <img src={Product1.src} alt={Product1.alt} />
                    </div>
                  </div>
                  
                </a>
              </article>
            )
          })}
        </div>
        <ProductSlide></ProductSlide>
        {/* <article className='product2'>
          <div className="in-container">
            <h2 className='tit'>제품소개</h2>
            <div className="btn-box">
              <div className="btn next">next</div>
              <div className="btn prev">prev</div>
            </div>
            <div className="product-container">
              {ProductArea2.map(Product2=>
              {
                return(
                  <div className="item">
                    <div className="img-box">
                      <img src={Product2.src} alt={Product2.alt} />
                    </div>
                    <div className="name">
                      <p>
                        {Product2.txt}
                      </p>
                    </div>
                  </div>
                )
              })
             }
            </div>
          </div>
        </article> */}

        <article className="event">
          <div className="img-box">
            <img src="https://github.com/R-tari/oticon_git/blob/main/public/images/b_event.jpg?raw=true" alt="이벤트" />
          </div>
        </article>
      

        <article className="news">
          <div className="in-container">
            <h2 className='tit'>오티콘 뉴스</h2>
            <a href="#">           
            <div className="btn-plus">
              <img src="https://github.com/R-tari/oticon_git/blob/main/public/images/btn_plus.png?raw=true" alt="news 상세페이지 버튼" />
            </div>
            </a>

            <a href="#">
            <div className="news-content">
              <div className="img-box">
                <img src="https://github.com/R-tari/oticon_git/blob/main/public/images/news.png?raw=true" alt="news이미지" />
              </div>
              <div className="txt-box">
                  <p>
                    오티콘보청기,가정의달
                    <br />
                    맞이 '청각 집중 케어
                    <br />
                    솔루션' 실시
                  </p>
              </div>
            </div>
            </a>
            <div className="news-list">
                <ul>
                  {News.map(news=>
                    {
                      return(
                        
                        <li>
                          <a href={news.href}>
                           {news.txt}
                          </a>
                        </li>
                      )
                    })}
                </ul>
              </div>
          </div>

        </article>
        

      



    </section>
  )
}
   
function Footer()
{
  return(
    <footer className="footer">
      
        <div className="footer-top">
          <div className="container ">
            <ul>
            {FooterList.map(Footerlist=>
              {
                return(
                      
                      <a href={Footerlist.href}>
                        <li>{Footerlist.txt}</li>
                      </a>
                )
              })}
            </ul>
          </div>
        </div>
         
        <div className="footer-bottom">
          <div className="container footer-container">
            <div className="img-box">
              <img src="https://github.com/R-tari/oticon_git/blob/main/public/images/f_logo.png?raw=true" alt="footer로고" />
            </div>
            <div className="txt-box">
            <address>
              서울시 중구 서소문로 99 서영빌딩 7층~3층
            </address>
            <p className="tel">
              <span>사업자등록번호:104-86-24123</span> <span>TEL:02-2022-3900</span> <span>FAX:02-2022-3939</span>
            </p>
            
            </div>
            <p className="copyright">
              OTICON KOREA. All Rights Reserved.
            </p>
          </div>
        </div>
      
    </footer>
  )
}

function App()
{
  return(
    <div className="wrap">
      <Header/>
      <Section/>
      <Footer/>
    </div>
  )
}
export default App;



