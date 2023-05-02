import React from 'react'
import Sos from '../assets/sos.png'

export default function aboutus() {
  return (
    <div>
        <div className="aboutus bg-[#fffbf4] mt-[100px] flex justify-between ">
        <div className="left-b">
            <img src={Sos} alt="not found" className='ml-[50px]' />
        </div>
        <div className="right-b mr-[110px] mt-[50px]">
            <h4 className='text-[#ff9401]  font-[700]  text-[25px]'>About us</h4>
            <h1 className='font-bold text-[50px] text-[#232323] leading-[63px] mt-[20px] tracking-[1px]'>Simple way of <br /> Eating Delecious</h1>
            <p className='   text-[18px] tracking-[1px] text-[#6f6564] font-[400]   mt-[20px]'>Keep healthy food readily avaialable. When you <br /> get hungry, you're more likely to eat the first <br /> thing you see on the counter</p>
<br />
<button className='border-0 mt-[33px] bg-[#ff9401] text-[white]  w-[16rem] h-[4rem]  rounded-[70px] text-[20px] font-[500]'>Explore Food Menu</button>

        </div>
        </div>
    </div>
  )
}
