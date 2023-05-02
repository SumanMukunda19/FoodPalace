import React from 'react'
import Pineapple from '../assets/Pineapple.png'
import FpalaceIcon from '../assets/fpalaceicon.png'
import {MdOutlineMarkEmailRead} from 'react-icons/md'
import Http from '../assets/http.png'

export default function footer() {
  return (
    <div>
        <div className="footer bg-[#fffbf5] flex justify-between mt-[125px]">
       <div className="lists flex justify-between gap-[95px] mt-[67px] mb-[55px] leading-[50px]">
        <div className="img">
        <img src={Pineapple} alt="not found" className='mt-[-35px]' />
        </div>

        <div className="list1">
        <div className="left-nav flex ml-[67px]">
        <img src={FpalaceIcon} alt="not found" className='h-[40px] mt-[9px] ' />
        <h4 className='font-bold mt-[4px] text-[25px] text-auto mr-[44px]'>f.palace</h4>
       </div>
       <div className="email flex justify-between">
<MdOutlineMarkEmailRead className='ml-[75px] mt-[18px] h-[20px] w-[20px]'/>
<p className='ml-[15px]'>info@food_palace.com</p>
       </div>
       <div className="link flex justify-between">
<img src={Http} alt="not found" className='ml-[75px] mt-[10px] h-[30px] w-[20px]' />
<p className='ml-[15px]'>info@food_palace.com</p>
       </div>
        </div>

        <div className="list2">
            <h1 className='font-bold font-auto text-[20px]'>Our Menu</h1>
            <ul>
                <li className='text-[18px]'>Breakfast</li>
                <li className='text-[18px]'>Lunch</li>
                <li className='text-[18px]'>Dinner</li>
            </ul>
        </div>

        <div className="list2">
            <h1 className='font-bold text-[auto] text-[20px]'>Information</h1>
            <ul>
                <li className='text-[18px]'>About us</li>
                <li className='text-[18px]'>Testimonial</li>
                <li className='text-[18px]'>Events</li>
            </ul>
        </div>

        <div className="list3">
            <h1 className='font-bold text-[auto] text-[20px]'>Useful links</h1>
            <ul>
                <li className='text-[18px]'>Services</li>
                <li className='text-[18px]'>Support</li>
                <li className='text-[18px]'>Conditions</li>
            </ul>
        </div>

        <div className="list4">
            <h1 className='font-bold text-[auto] text-[20px]'>Social Handles</h1>
            <ul>
                <li className='text-[18px] decoration-solid'>facebook</li>
                <li className='text-[18px] decoration-solid'>Twitter</li>
                <li className='text-[18px] decoration-solid'>Youtube</li>
            </ul>
        </div>

       </div>
    </div>
    </div>
  )
}
