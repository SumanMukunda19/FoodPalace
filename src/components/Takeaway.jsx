import React from 'react'
import Tapic from '../assets/TApic.png'
import SocialIcons from '../assets/socialicons.png'

export default function Takeaway() {
  return (
    <div>
        <div className="takeaway flex justify-between mt-[120px]">
            <div className="left-pic">
<img src={Tapic} alt="not found" />
            </div>
            <div className="right-b mr-[100px] mt-[180px]">
            <h4 className='text-[#ff9401]  font-[700]  text-[24px]'>Take Away</h4>
            <h1 className='font-bold text-[50px] text-[#232323] leading-[63px] mt-[20px] tracking-[1px]'>Simple way to <br /> Order Your Food</h1>
            <p className='   text-[20px]  text-[#6f6564] font-[500]  tracking-[1px] mt-[20px]'>Keep healthy food readily avaialable. When you <br /> get hungry, you're more likely to eat the first <br /> thing you see on the counter</p>

<br />
<img src={SocialIcons} alt="not found" />
        </div>
        </div>
    </div>
  )
}
