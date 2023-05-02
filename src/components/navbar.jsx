import React from 'react'
import FpalaceIcon from '../assets/fpalaceicon.png'
import Sandwich from '../assets/sandwich.png'
import {AiOutlineSearch} from 'react-icons/ai'
import {BsFillBagDashFill} from 'react-icons/bs'
import {GiToggles} from 'react-icons/gi'

export default function navbar() {
  return (
    <div>
    <div className='flex justify-between mt-[30px] font-[auto] '>
       <div className="left-nav flex ml-[90px]">
        <img src={FpalaceIcon} alt="not found" className='h-[40px] ' />
        <h4 className='font-bold mt-[4px] text-[25px]'>f.palace</h4>
       </div>

       <div className="cent-nav ml-[160px]">
<img src={Sandwich} alt="not found" className='mt-[-25px] rounded-[20px]' />
       </div>

       <div className="right-nav flex mr-[50px]">
       <AiOutlineSearch className='mr-[50px] h-[25px] w-[25px]'/>
<BsFillBagDashFill className='h-[25px] w-[25px]'/>
<GiToggles className='h-[25px] w-[25px] ml-[50px]'/>
       </div>
    </div>
    </div>
  )
}
