import React from 'react'

export default function FoodQuality() {
  return (
    <div className="foods flex justify-center flex-wrap -mt-[4rem]">
  <div className="food-card1 flex flex-col items-center w-[23rem] h-[36rem] bg-yellow-500">
    <img
      src="/organics/onion.png"
      alt=""
      srcSet=""
      className="h-[16rem] w-[17rem] mt-[1.5rem]"
    />
    <div className="food-quality font-arial font-bold text-3xl">
      <p className="text-center text-white mt-[3vw]">Natural</p>
      <p className="text-center text-white">Ingredients</p>
      <p className="food-desc text-center font-normal text-lg mt-[2rem] mx-[2rem] text-white">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, placeat.
      </p>
    </div>
  </div>
  <div className="food-card2 flex flex-col items-center w-[23rem] h-[36rem] bg-green-600">
    <img
      src="/organics/brocolli.png"
      alt=""
      srcSet=""
      className="h-[16rem] w-[17rem] mt-[1.5rem]"
    />
    <div className="food-quality font-arial font-bold text-3xl">
      <p className="text-center text-white mt-[3vw]">Varied</p>
      <p className="text-center text-white">Menu</p>
      <p className="food-desc text-center font-normal text-lg mt-[2rem] mx-[2rem] text-white">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, placeat.
      </p>
    </div>
  </div>
  <div className="food-card3 flex flex-col items-center w-[23rem] h-[36rem] bg-green-500">
    <img
      src="/organics/mushroom.png"
      alt=""
      srcSet=""
      className="h-[16rem] w-[17rem] mt-[1.5rem]"
    />
    <div className="food-quality font-arial font-bold text-3xl">
      <p className="text-center text-white mt-[3vw]">Best</p>
      <p className="text-center text-white">Chefs</p>
      <p className="food-desc text-center font-normal text-lg mt-[2rem] mx-[2rem] text-white">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, placeat.
      </p>
    </div>
  </div>
</div>

  );
}
