import React from 'react'
import Testi from '../assets/Testi.png'

export default function Testimonial() {
  return (
    <div>
<div className="testimonial flex justify-between  mt-[100px] ">
    <div className="leftTest ml-[90px] mt-[90px]">
    <h4 className='text-[#ff9401]  font-[700]  text-[25px]'>Testimonial</h4>
            <h1 className='font-bold text-[50px] text-[#232323] leading-[55px] mt-[20px] tracking-[1px]'>That's What Our <br /> Client Says</h1>
            <p className='   text-[17px] tracking-[1px] text-[black] font-[500]   mt-[25px]'>"Food Palace in an Awesome place. <br /> Food    is an Extension of  nationalist <br /> feeling, ethnic feeling, your  personal <br/> history, your province"</p>
<br />
<h1 className='font-[700] text-[#f35920] mt-[20px] text-[25px]'>Jessica Parker</h1>
<p className='text-[15px] tracking-[1px] text-[#6f6564] font-[500]'>Product Designer @ Kitty</p>
    </div>
    <div className="rightTest">
        <img src={Testi} alt="not found" className='mr-[80px]' />
    </div>
</div>

    </div>
  )
}
