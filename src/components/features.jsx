import React from 'react'
import veg from '../assets/veg.png'
import Fr from '../assets/fr.png'
import Qfood from '../assets/qfood.png'
import Taste from '../assets/tasty.png'
import Fdelivery from '../assets/fdelivery.png'


export default function features() {
  return (
    <div>
        <div className="features  bg-[#fffefc]">
            <div className="headFeatures flex justify-between ">
        <div className="left-p mt-[80px]">
<img src={veg} alt="not found" className='mt-[100px]'   />
        </div>
        <div className="cent-p mt-[250px] leading-[1px]">
            <h1 className='text-[#ff9401]  font-[700]  text-[25px] text-center'>Features</h1>
            <p className='font-bold text-[50px] text-[#232323] leading-[63px] mt-[20px] tracking-[1px]' >Our Awesome Services</p>
        </div>
        <div className="right-p mt-[80px]">
            <img src={Fr} alt="not found" />
        </div>
        </div>
        <div className="cards flex justify-center gap-[200px]">
            <div className="card1">
<img src={Qfood} alt="not found" className='ml-[40px]' />
<h3 className='mt-[20px] ml-[25px] font-[700] text-[#232323] text-[23px] tracking-[1px]'>Quality Food</h3>
<p className=' mt-[23px]  text-[18px] text-[black]  tracking-[1px] leading-[35px]'>Keep healthy food readily <br /> avaialable. When you  get <br /> hungry, you're more likely</p>
            </div>
            <div className="card2">
<img src={Taste} alt="not found" className='ml-[20px]' />
<h3 className='mt-[20px] font-[700] text-[#232323] text-[23px] ml-[30px] tracking-[1px]'>Super Taste</h3>
<p className=' mt-[23px]  text-[18px] text-[black]  tracking-[1px] leading-[35px]'>Keep healthy food readily <br /> avaialable. When you  get <br /> hungry, you're more likely</p>
            </div>
            <div className="card3">
<img src={Fdelivery} alt="not found"  className='ml-[20px] mt-[-10px]'/>
<h3 className='mt-[10px] font-[700] text-[#232323] text-[23px] ml-[25px] tracking-[1px]'>Fast Delivery</h3>
<p className=' mt-[23px]  text-[18px] text-[black] tracking-[1px] leading-[35px]'>Keep healthy food readily <br /> avaialable. When you  get <br /> hungry, you're more likely</p>
            </div>
        </div>

        </div>
    </div>
  )
}
