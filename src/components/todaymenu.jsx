import React from 'react'

export default function TodayMenu() {
  return (
    <>
  {/*Today's Menu*/}
  <div
    className="menu-bg h-[76rem] md:h-[66rem] w-auto mt-[6rem] px-[3rem] flex flex-col items-center bg-no-repeat bg-top"
    style={{ backgroundImage: 'url("/menu-bg.jpg")' }}
    id="menu-bg"
  >
    <p
      className="text-center font-semibold text-4xl text-white pt-[4rem] md:pt-[4rem]"
      id="bold-head"
    >
      TODAY'S MENU
    </p>
    <p
      className="text-center font-normal text-xl text-white pt-[2rem]"
      id="bold-desc"
    >
      Donec convallis, elit vitae ornare cursus, libero purus facilisis felisa
      volutpat metus tortor bibendum elit. Integer nec mi eleifend, fermentum
      lorem vitae, finibus neque.
    </p>
    <div className="menu-item pt-[3rem] inline-flex flex-wrap" id="menu-items">
      <img
        src="/menu/menu-mixsalad.jpg"
        alt=""
        srcSet=""
        className="h-[8rem] w-[8rem] "
        id="menu-img"
      />
      <p className="name md:text-2xl text-white text-center pl-4 pt-[3rem] md:pt-[0rem]">
        MIX SALAD ---------------------------- $10
      </p>
    </div>
    <div className="menu-item pt-[3rem] inline-flex flex-wrap" id="menu-items">
      <img
        src="/menu/menu-greengardensalad.jpg"
        alt=""
        srcSet=""
        className="h-[8rem] w-[8rem] "
        id="menu-img"
      />
      <p className="name md:text-2xl text-white text-center pl-4 pt-[3rem] md:pt-[0rem]">
        GREEN GARDEN SALAD -------------- $12
      </p>
    </div>
    <div className="menu-item pt-[3rem] inline-flex flex-wrap" id="menu-items">
      <img
        src="/menu/menu-grilledshrimpsalad.jpg"
        alt=""
        srcSet=""
        className="h-[8rem] w-[8rem] "
        id="menu-img"
      />
      <p className="name md:text-2xl text-white text-center pl-4 pt-[3rem] md:pt-[0rem]">
        GRILLED SHRIMP SALAD ------------ $14
      </p>
    </div>
    <div className="menu-item pt-[3rem] inline-flex flex-wrap" id="menu-items">
      <img
        src="/menu/menu-chickencaesearsalad.jpg"
        alt=""
        srcSet=""
        className="h-[8rem] w-[8rem] "
        id="menu-img"
      />
      <p className="name md:text-2xl text-white text-center pl-4 pt-[3rem] md:pt-[0rem]">
        CHICKEN CAESAR SALAD -------- $10
      </p>
    </div>
  </div>
</>

  );
}
