import React,{useState,useEffect,useRef} from 'react';
import {SubNav1,SubNav2,SubNav3,SubNav4,SubNav5 } from '../data/data_nav'


function Nav() {
  const [subNav,setSubNav]= useState(false);
  const [mNav,setMNav]=useState(false)
  const [mSubNav,setMSubNav]=useState(0);
  const [resolution,setResolution]=useState(0);
  
  const navref=useRef();

  let mainNav=document.getElementsByClassName('main-nav');
  let subUl=document.getElementsByClassName('ul_active')
  let navli=document.getElementsByClassName('nav-li');

  const NavOn=()=> {
    if(window.innerWidth>1024)
    {
      setSubNav(true);
    }
    else
    {
      setMNav(true);
    }
    
  }

  const NavOff=()=> {
      setSubNav(false);
  }

  const MNavOff=()=>
  {
    setMNav(false);
  }
  const NavOut=()=>
  {
    let i=0;
    for(i=0;i<=mainNav.length;i++)
    {
      mainNav[i].style="color:#black"
    }
  }
  const NavHover=()=>
  {
    if(window.innerWidth>1024)
    {
      subUl[0].addEventListener('mouseover',()=>
       {
         if(window.innerWidth>1024)
         mainNav[0].style="color:#c60081"
       })
   
       subUl[1].addEventListener('mouseover',()=>
       {
         mainNav[1].style="color:#c60081"
       })
   
       subUl[2].addEventListener('mouseover',()=>
       {
         mainNav[2].style="color:#c60081"
       })
   
       subUl[3].addEventListener('mouseover',()=>
       {
         mainNav[3].style="color:#c60081"
       })
   
       subUl[4].addEventListener('mouseover',()=>
       {
         mainNav[4].style="color:#c60081"
       })
    }

  }

  const MnavClick1=()=>
  {
    if(window.innerWidth<1025)
    {
        if(mSubNav!=1)
        {
          setMSubNav(1);
        }
        else setMSubNav(0);
    }
  }

  const MnavClick2=()=>
  {
    if(window.innerWidth<1025)
    {
        if(mSubNav != 2)
        {
          setMSubNav(2);
        }
        else setMSubNav(0);
    }
  }


  const MnavClick3=()=>
  {
    if(window.innerWidth<1025)
    {
        if(mSubNav!=3)
        {
          setMSubNav(3)
        }
        else setMSubNav(0);
    }
  }


  const MnavClick4=()=>
  {
    if(window.innerWidth<1025)
    {
        if(mSubNav!=4)
        {
          setMSubNav(4)
        }
        else setMSubNav(0);
    }
  }


  const MnavClick5=()=>
  {
    if(window.innerWidth<1025)
    {
        if(mSubNav!=5)
        {
          setMSubNav(5)
        }
        else setMSubNav(0);
    }
    }

    useEffect(()=>
    {
      window.addEventListener('resize',()=>
      {
        if(window.innerWidth<1025)
          setResolution(1)

        else 
          setResolution(0)
      })
      return()=>
      {
        window.removeEventListener('resize',()=>
        {
          console.log(window.innerWidth)
        })
      }
    },[])

    useEffect(()=>
    {
      setMNav(false);
      setSubNav(false);
      setMSubNav(0)
    },[resolution])



  

  // useEffect(()=>
  // {
  //   window.addEventListener("click", ClickOutSide);
  //   return () => {
  //     window.removeEventListener("click", ClickOutSide);
  //   };
  // },[])

  return (
    <div class="nav" onMouseLeave={NavOff}>
          <div class="container">
              <h1 class="logo">
                 <a href="#">
                    <img src="https://github.com/R-tari/oticon_git/blob/main/public/images/logo.png?raw=true" alt="logo"/>
                  </a>
              </h1>
              <nav class="navigation">
                  <ul ref={navref} style={{right:mNav? '0':'-250px'}} className="nav-area">
                      <li>
                        <a href="#">
                          HOME
                        <span className={ mNav? 'close':null} onClick={MNavOff}/>
                        </a>
                        
                      </li>

                      <li className="nav-li" onClick={MnavClick1}>
                        <a  href="#" onMouseEnter={NavOn} className={"main-nav"+(mSubNav==1? ' sub-open':' ')}>
                          보청기제품
                        </a>
                        <div className="sub-nav" style={{visibility:subNav || mSubNav==1? 'visible':'hidden',pointerEvents:subNav || mSubNav==1? 'auto':'none',height:mSubNav==1? '351.2px':'0' }}>
                          <ul className={subNav || mSubNav==1? 'ul_active':null} onMouseEnter={NavHover} onMouseLeave={NavOut}> 
                            {SubNav1.map(sub1=>
                              {
                                return(
                                <li> 
                                  <a href={sub1.href}>
                                    {sub1.subnav}
                                  </a>
                                </li>
                                )
                              })}
                          </ul>
                          </div>
                      </li>
                      
                      <li className="nav-li" onClick={MnavClick2}>
                        <a  href="#" onMouseEnter={NavOn} className={"main-nav"+(mSubNav==2? ' sub-open':' ')}>
                          대리점
                        </a>
                        <div className="sub-nav" style={{visibility:subNav || mSubNav==2? 'visible':'hidden',pointerEvents:subNav || mSubNav==2? 'auto':'none',height:mSubNav==2? '56.8px':'0',transition:'0.1s' }}>
                          <ul className={subNav || mSubNav==2? 'ul_active':null} onMouseEnter={NavHover} onMouseLeave={NavOut}> 
                            {SubNav2.map(sub2=>
                              {
                                return(
                                <li>
                                  <a href={sub2.href}>
                                    {sub2.subnav}
                                  </a>
                                </li>
                                )
                              })}
                          </ul>
                        </div>
                      </li>

                      <li className="nav-li" onClick={MnavClick3}>
                        <a  href="#" onMouseEnter={NavOn} className={"main-nav"+(mSubNav==3? ' sub-open':' ')}>
                          미디어센터
                        </a>
                        <div className="sub-nav" style={{visibility:subNav || mSubNav==3? 'visible':'hidden',pointerEvents:subNav || mSubNav==3? 'auto':'none',height:mSubNav==3? '167.2px':'0' }}>
                          <ul className={subNav || mSubNav==3? 'ul_active':null} onMouseEnter={NavHover} onMouseLeave={NavOut}> 
                            {SubNav3.map(sub3=>
                              {
                                return(
                                <li>
                                  <a href={sub3.href}>
                                    {sub3.subnav}
                                  </a>
                                </li>
                                )
                              })}
                          </ul>
                        </div>
                      </li>

                      <li className="nav-li" onClick={MnavClick4}>
                        <a  href="#" onMouseEnter={NavOn} className={"main-nav"+(mSubNav==4? ' sub-open':' ')}>
                          고객센터
                        </a>
                        <div className="sub-nav" style={{visibility:subNav ||mSubNav==4? 'visible':'hidden',pointerEvents:subNav || mSubNav==4? 'auto':'none',height:mSubNav==4? '130.4px':'0' }}>
                          <ul className={subNav || mSubNav==4? 'ul_active':null} onMouseEnter={NavHover} onMouseLeave={NavOut}> 
                            {SubNav4.map(sub4=>
                              {
                                return(
                                <li>
                                  <a href={sub4.href}>
                                    {sub4.subnav}
                                  </a>
                                </li>
                                )
                              })}
                          </ul>
                        </div>
                      </li>

                      <li className="nav-li" onClick={MnavClick5}>
                        <a  href="#" onMouseEnter={NavOn} className={"main-nav"+(mSubNav==5? ' sub-open':' ')}>
                          회사소개
                        </a>
                        <div className="sub-nav" style={{visibility:subNav || mSubNav==5? 'visible':'hidden',pointerEvents:subNav || mSubNav==5? 'auto':'none',height:mSubNav==5? '240.8px':'0' }}>
                          <ul className={subNav || mSubNav==5?  'ul_active':null} onMouseEnter={NavHover} onMouseLeave={NavOut}> 
                            {SubNav5.map(sub5=>
                              {
                                return(
                                <li>
                                  <a href={sub5.href}>
                                    {sub5.subnav}
                                  </a>
                                </li>
                                )
                              })}
                          </ul>
                        </div>
                      </li>
                  </ul>
                  <div className="mobile-overlay" style={{display:mNav? 'block':'none'}} onClick={MNavOff} />
                  <div className={ "m-nav" +(mNav? ' open':' ') }  onClick={NavOn}>
                        <div className="nav-btn">네비</div>
                  </div>
              </nav>
          </div>
           <div className="subNav" style={{height:subNav? '364px':'0',transition:'0.3s',borderTop:subNav? '1px solid #c60081':'none'} }>
            <div className="sub-outcontainer"style={{visibility:subNav? 'visible':'hidden',pointerEvents:subNav? 'auto':'none' }}>
         
            </div>
          </div> 
      </div>
  )
}

export default Nav;