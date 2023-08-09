import React from 'react'

export default function MenuItems() {
  return (
    <div className="menu font-sans font-bold text-4xl text-black mt-[8rem]">
  <p className="text-center">CHOOSE YOUR MENU</p>
  <div className="menu-display text-black mt-[2rem]">
    <p className="text-center text-lg font-normal mx-[1.5rem] mb-[3rem]">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem vitae sit
      incidunt eaque adipisci? Autem!
    </p>
  </div>
  {/*Menu Items*/}
  <div className="menu flex justify-evenly flex-wrap mt-[1.5rem]">
    <div className="menu-item1 flex flex-col items-center justify-center w-[23rem] h-[36rem] bg-gray-100">
      <img
        src="/foods/salads.jpg"
        alt=""
        srcSet=""
        className="h-[16rem] w-[16rem] mt-[1.5rem]"
      />
      <div className="food-quality font-arial font-bold text-3xl">
        <p className="text-center text-black mt-[1vw]">Salads</p>
        <p className="food-desc text-center font-normal text-lg mt-[1rem] mx-[2rem] text-black">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
          placeat.
        </p>
      </div>
      <button
        type="button"
        className="rounded-none bg-green-700 text-white p-[4rem] py-[1vw] px-[1.6rem] mt-[2rem] hover:bg-green-500"
      >
        <p className="text-center text-base font-normal">Get Menu</p>
      </button>
    </div>
    <div className="menu-item2 flex flex-col items-center justify-center w-[23rem] h-[36rem] bg-gray-100">
      <img
        src="/foods/fishnmeat.jpg"
        alt=""
        srcSet=""
        className="h-[16rem] w-[16rem] mt-[1.5rem]"
      />
      <div className="food-quality font-arial font-bold text-3xl">
        <p className="text-center text-black mt-[1vw]">Fish &amp; Meat</p>
        <p className="food-desc text-center font-normal text-lg mt-[1rem] mx-[2rem] text-black">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
          placeat.
        </p>
      </div>
      <button
        type="button"
        className="rounded-none bg-green-700 text-white p-[4rem] py-[1vw] px-[1.6rem] mt-[2rem] hover:bg-green-500"
      >
        <p className="text-center text-base font-normal">Get Menu</p>
      </button>
    </div>
    <div className="menu-item3 flex flex-col items-center justify-center w-[23rem] h-[36rem] bg-gray-100">
      <img
        src="/foods/desserts.jpg"
        alt=""
        srcSet=""
        className="h-[16rem] w-[16rem] mt-[1.5rem]"
      />
      <div className="food-quality font-arial font-bold text-3xl">
        <p className="text-center text-black mt-[1vw]">Desserts</p>
        <p className="food-desc text-center font-normal text-lg mt-[1rem] mx-[2rem] text-black">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
          placeat.
        </p>
      </div>
      <button
        type="button"
        className="rounded-none bg-green-700 text-white p-[4rem] py-[1vw] px-[1.6rem] mt-[2rem] hover:bg-green-500"
      >
        <p className="text-center text-base font-normal">Get Menu</p>
      </button>
    </div>
  </div>
</div>

  );
}
