import React from 'react'
import Magi from '../assets/maagi.png'
import Fbdish from '../assets/fmDish.png'
import Pmdish from '../assets/pmDish.png'
import Dsdish from '../assets/dsDish.png'

export default function recipes() {
  return (
    <div>
        <div className="recipes mt-[120px] bg-[#fffbf4] ">
            <div className="headers flex justify-center gap-[100px] ml-[125px] ">
                <div className="wordPart mt-[50px]">
                      <h1 className='text-[#ff9401]  font-[700]  text-[25px] text-center'>Recipes</h1>
                      <p className='font-bold text-[50px] text-[#232323] leading-[63px] mt-[10px] tracking-[1px]'>Most Popular Items</p>
                    </div>
                    <div className="imgPart">
                        <img src={Magi} alt="" className='mt-[50px]' />
                    </div>
            </div>
            <div className="recep-cards flex justify-between m-[20px] h-[26rem] mt-[40px]">
              <div className="rc bg-[white] h-[23rem] rounded-[10px]">
                <img src={Fbdish} alt="Not found"  className='mt-[10px]'/>
                <div className="title flex justify-between mt-[15px]">
                  <h1 className='font-[400] text-[#232323] text-[23px] tracking-[1px] ml-[10px]'>Flame-Boiled Dish</h1>
                  <p className='mr-[20px] font-[600] mt-[10px]'>8.5</p>
                </div>
                <div className="cartr flex justify-between mt-[15px]">
                  <button className='border-[none] bg-[whitesmoke] text-[#a9a4a4] ml-[10px] w-[85px] text-[12px] h-[24px] rounded-[30px] mt-[10px] pd-[2px]'>Add to cart</button>
                  <p className='mr-[20px] font-[700] mt-[10px] text-[#ff9401]'>$19.99</p>
                </div>
              </div>
              <div className="rc bg-[white] h-[23rem] rounded-[10px]">
                <img src={Pmdish} alt="Not found" className='mt-[10px]' />
                <div className="title flex justify-between mt-[15px]">
                  <h1 className='font-[400] text-[#232323] text-[23px] tracking-[1px] ml-[10px]'>Flame-Boiled Dish</h1>
                  <p className='mr-[20px] font-[600] mt-[10px]'>8.5</p>
                </div>
                <div className="cartr flex justify-between mt-[15px]">
                <button className='border-[none] bg-[whitesmoke] text-[#a9a4a4] ml-[10px] w-[85px] text-[12px] h-[24px] rounded-[30px] mt-[10px] pd-[2px]'>Add to cart</button>
                  <p className='mr-[20px] font-[700] mt-[10px] text-[#ff9401]'>$19.99</p>
                </div>
              </div>
              <div className="rc bg-[white] h-[23rem] rounded-[10px]">
                <img src={Dsdish} alt="Not found" className='mt-[10px]'/>
                <div className="title flex justify-between mt-[15px]">
                  <h1 className='font-[400] text-[#232323] text-[23px] tracking-[1px] ml-[10px]'>Flame-Boiled Dish</h1>
                  <p className='mr-[20px] font-[600] mt-[10px]'>8.5</p>
                </div>
                <div className="cartr flex justify-between mt-[15px]">
                <button className='border-[none] bg-[whitesmoke] text-[#a9a4a4] ml-[10px] w-[85px] text-[12px] h-[24px] rounded-[30px] mt-[10px] pd-[2px]'>Add to cart</button>
                  <p className='mr-[20px] font-bold mt-[10px] text-[#ff9401]'>$19.99</p>
                </div>
              </div>
            </div>
            <button className='border-0 mt-[-23px] mb-[45px] bg-[#ff9401] text-[white] shadow-orange-300 w-[16rem] h-[4rem] ml-[530px] rounded-[70px] text-[20px] font-[500] items-center'>See More Recipes</button>

        </div>
    </div>
  )
}
