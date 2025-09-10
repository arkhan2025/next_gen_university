import React from 'react'
import './Testimonials.css'
import next from '../../assets/next-icon.png'
import back from '../../assets/back-icon.png'
import u1 from '../../assets/user-1.png'
import u2 from '../../assets/user-2.png'
import u3 from '../../assets/user-3.png'
import u4 from '../../assets/user-4.png'
import { useRef } from 'react'

const Testimonials = () => {
    const slider = useRef();
    let tx = 0 
    const slideForward = ()=>{
       if(tx>-50){
        tx-=25;
       }
       slider.current.style.transform = `translateX(${tx}%)`
    }
    const slideBackward = ()=>{
        if(tx<0){
        tx+=25;
       }
       slider.current.style.transform = `translateX(${tx}%)`
    }

  return (
    <div className='testimonials'>
        <img src={next} alt=''className='nextbtn' onClick={slideForward}/>
        <img src={back} alt=''className='backbtn' onClick={slideBackward}/>
        <div className='slider'>
            <ul ref={slider}>
                <li>
                    <div className='slide'>
                       <div className='userinfo'>
                            <img src = {u1}  alt=''/>
                                 <div>
                                     <h3>Ikramul Hossain</h3>
                                      <span>Demo University, Bangladesh</span>
                              </div>
                      </div> 
                        <p>
                           This university challenged me to grow beyond my limits
                            and prepared me for the real world. 
                        </p>
                    </div>
                </li>
                <li>
                    <div className='slide'>
                       <div className='userinfo'>
                            <img src = {u2}  alt=''/>
                                 <div>
                                     <h3>Zahidur rahman</h3>
                                      <span>Demo University, Bangladesh</span>
                              </div>
                      </div> 
                        <p>
                           The professors truly care about our success and push 
                           us to achieve our best every day. 
                        </p>
                    </div>
                </li>
                <li>
                    <div className='slide'>
                       <div className='userinfo'>
                            <img src = {u3}  alt=''/>
                                 <div>
                                     <h3>Mohammad Asif Khan</h3>
                                      <span>Demo University, Bangladesh</span>
                              </div>
                      </div> 
                        <p>
                           I found a community here that supports and inspires
                            me to become a future leader. 
                        </p>
                    </div>
                </li>
                <li>
                    <div className='slide'>
                       <div className='userinfo'>
                            <img src = {u4}  alt=''/>
                                 <div>
                                     <h3>Akib Izaz</h3>
                                      <span>Demo University, Bangladesh</span>
                              </div>
                      </div> 
                        <p>
                           The hands-on learning experiences helped me build 
                           confidence and practical skills for my career. 
                        </p>
                    </div>
                </li>
            </ul>
        </div>
        </div>
  )
}

export default Testimonials