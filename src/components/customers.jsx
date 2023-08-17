import React from 'react'
import { useState } from 'react'


export default function CustoMers() {
    const [statement,changeWords ] = useState("HOOKS DEMO STRING") //  DEMO USE OF USESTATE IN REACT (REACT HOOKS)
    const WordisChanges=()=>{
        setTimeout(() => {
            changeWords("STRING IS HERE AFTER 3 SECONDS");
        }, 3000);
        changeWords("WAIT....");
    }
    return (
      <div class="menu font-sans font-bold text-4xl text-black mt-[9rem]">
          <p class="text-center">OUR CUSTOMERS THOUGHTS</p>
          <div class="menu-display text-black mt-[2rem]">
              <p class="text-center text-lg font-normal mx-[1.5rem] mb-[3rem]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem vitae
                  sit incidunt eaque adipisci? Autem!
              </p>
          </div>
          <div class="menu flex justify-evenly flex-wrap mt-[1.5rem]">
              <div class="menu-item1 flex flex-col items-center w-[23rem] h-[25rem] bg-gray-100">
                  <img src="/customer/customer-janet.jpg" alt="" srcSet="" class="h-[6rem] w-[6rem] mt-[4rem]" />
                  <div class="food-quality font-arial font-bold text-3xl">
                      <p class="text-center text-black mt-[4vw]">JANET BEKAER</p>
                      <p class="food-desc text-center font-normal text-lg mt-[1rem] mx-[2rem] text-black">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
                          placeat.
                      </p>
                  </div>
              </div>
              <div class="menu-item2 flex flex-col items-center w-[23rem] h-[25rem] bg-gray-100">
                  <img src="/customer/customer-michael.jpg" alt="" srcset="" class="h-[6rem] w-[6rem] mt-[4rem]" />
                  <div class="food-quality font-arial font-bold text-3xl">
                      <p class="text-center text-black mt-[4vw]">MICHAEL JONES</p>
                      <p class="food-desc text-center font-normal text-lg mt-[1rem] mx-[2rem] text-black">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
                          placeat.
                      </p>
                  </div>
              </div>
              <div class="menu-item3 flex flex-col items-center w-[23rem] h-[25rem] bg-gray-100">
                  <img src="/customer/customer-roger.jpg" alt="" srcset="" class="h-[6rem] w-[6rem] mt-[4rem]" />
                  <div class="food-quality font-arial font-bold text-3xl">
                      <p class="text-center text-black mt-[4vw]">ROGER REYES</p>
                      <p class="food-desc text-center font-normal text-lg mt-[1rem] mx-[2rem] text-black">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
                          placeat.
                      </p>
                  </div>
              </div>
          </div>
          <p className="text-center font-serif font-bold text-black cursor-pointer" onClick={WordisChanges}>{statement}</p>
      </div>
    )
}
