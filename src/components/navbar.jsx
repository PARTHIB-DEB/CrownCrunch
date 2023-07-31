import React from 'react'
const bgimage = {
    backgroundImage: 'url("banners/start-Banner.jpg")'
}

export default function NavBar() {
    return (
        <header
            className="navbar bg-center h-[35rem] p-[0.5em] max-h-[35rem]"
            style={bgimage}
        >
            <div className="nav-items flex justify-center items-center">
                <img
                    src="/logo-crowncrunch.png"
                    alt=""
                    srcSet=""
                    className="h-[6rem] -ml-[22rem] mr-[10rem]"
                />
                <div className="items flex space-x-[2.5rem] font-bold text-lg text-slate-300 ">
                    <p className="home hover:text-white cursor-pointer">Home</p>
                    <p className="services hover:text-white cursor-pointer">Services</p>
                    <p className="menu hover:text-white cursor-pointer">Menu</p>
                    <p className="about hover:text-white cursor-pointer">About</p>
                    <p className="blog hover:text-white cursor-pointer">Blog</p>
                    <p className="contact hover:text-white cursor-pointer">Contact</p>
                </div>
                <button
                    type="button"
                    className="ml-[10rem] -mr-[18rem] rounded-none text-black bg-white p-[4rem] py-[0.8vw] px-[1.3rem] hover:bg-green-600 hover:text-white"
                >
                    <p className="text-center">RESERVATION</p>
                </button>
            </div>
        </header>
    )
}
