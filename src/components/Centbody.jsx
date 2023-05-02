import React from 'react'
import Food from '../assets/food.png'
import {GrFacebookOption} from 'react-icons/gr'
import {AiOutlineInstagram} from 'react-icons/ai'
import {BsTwitter} from 'react-icons/bs'
import Mood from '../assets/mood.png'
import Pasta from '../assets/pasta.png'

export default function centbody() {
  return (
    <div>
 <div className="cent-body mt-[60px] flex justify-between ">
    <div className="left-body ml-[40px]">
<h4 className='text-[#ff9401] ml-[60px] font-[600]  text-[25px] mt-[25px]'>__Restaurant</h4>
<div className="gf flex ml-[60px]">
<h1 className='font-bold text-[#232323] text-[90px]'>Good F </h1><span> <img src={Food} alt="not found" className='mt-[45px] ml-[2px]'/> </span> <h1 className='font-bold text-[90px] text-[#232323]'> d</h1> 
</div>
<div className="gm flex ml-[60px] mt-[-40px]">
<h1 className='font-bold text-[90px] text-[#232323]'>Good M</h1><span> <img src={Mood} alt="not found" className='mt-[50px]'/> </span>  <h1 className='font-bold text-[90px] text-[#232323]'>d</h1>
</div>
<p className=' ml-[60px]  text-[20px] text-[#6f6564] tracking-wide'>The food palace is an neighborhood serving  seasonal <br/> global  cuisine  driven by the faire.</p>
<br/>
<button className='border-0 mt-[33px] bg-[#ff9401] text-[white] shadow-orange-300 w-[16rem] h-[4rem] ml-[64px] rounded-[70px] text-[20px] font-[500]'>Explore Our Story</button>
<br/>
<div className="icons flex ml-[77px] gap-[55px] mt-[55px]  ">
<GrFacebookOption  className='h-[25px] w-[25px]  '/>
<AiOutlineInstagram  className='h-[25px] w-[25px]  '/>
<BsTwitter  className='h-[25px] w-[25px]  '/>
</div>
</div>
<img src={Pasta} alt="Not found" className='mt-[-20px] mr-[40px] rounded-[20px]' />
 </div>

    </div>
  )
}
