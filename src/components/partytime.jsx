import React from 'react'

export default function PartyTime() {
  return (
    <div className="menu font-sans text-black mt-[8rem]">
  <p className="text-center font-bold text-4xl">CATERING FOR ANY OCCASSION</p>
  <div className="menu-display text-black mt-[2rem]">
    <p className="text-center text-lg font-normal mx-[1.5rem] mb-[3rem]">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem vitae sit
      incidunt eaque adipisci? Autem!
    </p>
  </div>
  <div className="grid parties gap-9 grid-cols-1 md:grid-cols-2 h-auto w-auto mx-[1.5rem] md:mx-[4rem] space-y-0">
    <div
      className="private-party h-auto w-auto bg-purple-800 bg-cover"
      style={{ backgroundImage: 'url("/parties/privateparty.jpg")' }}
    >
      <div className="flex desc  text-white h-auto w-auto justify-center my-[8rem] md:my-[15rem] mx-[4rem] md:bg-white md:text-black p-5">
        <p className="text-center font-serif font-bold text-2xl">
          PRIVATE PARTY
        </p>
      </div>
    </div>
    <div
      className="wedding-party h-auto w-auto bg-purple-800 bg-cover"
      style={{ backgroundImage: 'url("/parties/weddingreception.jpg")' }}
    >
      <div className="flex desc text-white  h-auto w-auto justify-center my-[8rem] md:my-[15rem] mx-[4rem] md:bg-white md:text-black p-5">
        <p className="text-center font-serif font-bold text-2xl">
          WEDDING RECEPTION
        </p>
      </div>
    </div>
    <div
      className="corporate-party h-auto w-auto bg-purple-800 bg-cover relative md:block"
      style={{ backgroundImage: 'url("/parties/corporateparty.jpg")' }}
    >
      <div className="flex desc text-white  h-auto w-auto justify-center my-[8rem] md:my-[15rem] mx-[4rem] md:bg-white md:text-black p-5">
        <p className="text-center font-serif font-bold text-2xl">
          CORPORATE PARTY
        </p>
      </div>
    </div>
    <div
      className="birthday-party h-auto w-auto bg-purple-800 bg-cover mb-[8rem] relative md:block md:mb-0"
      style={{ backgroundImage: 'url("/parties/birthdayparty.jpg")' }}
    >
      <div className="flex desc text-white h-auto w-auto justify-center my-[8rem] md:my-[15rem] mx-[4rem] md:bg-white md:text-black p-5">
        <p className="text-center font-serif font-bold text-2xl">
          BIRTHDAY PARTY
        </p>
      </div>
    </div>
  </div>
</div>

  );
}
