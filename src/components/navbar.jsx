import React from "react";
// import { HamRotate } from ".";

const bg={ backgroundImage: 'url("banners/start-Banner.jpg")' }
export default function NavBar() {
    return (
        <header
            className="navbar bg-center h-[35rem] p-[1.5rem] px-[3rem]"
            style={bg}
        >
            {/*Hamburger and Logo for small views (<1095px)*/}
            <div className="small-nav flex justify-between items-center">
                <img
                    src="public/logo-crowncrunch.png"
                    alt=""
                    srcSet=""
                    className="h-[3.5rem] w-[3.5rem] -ml-[1rem]"
                    id="ham-logo"
                />
                {/*Manual Hamburger Creation*/}
                <div
                    className="flex justify-end items-center -mr-[1rem] bg-green-800"
                    id="hamberger"
                >
                    <div className="name-menu flex justify-between">
                        <div className="hamburger inline-block p-1 cursor-pointer" id="ham">
                            <div className="lines h-1 bg-black w-6 my-1" />
                            <div className="lines h-1 bg-black w-6 my-1" />
                            <div className="lines h-1 bg-black w-6 my-1" />
                        </div>
                    </div>
                </div>
            </div>
            {/* For large screens (Min width : 1095px to Max-width : 1280px) */}
            <div
                className="nav-items flex justify-center items-center pr-[1.5rem]"
                id="large-nav"
            >
                <img
                    src="public/logo-crowncrunch.png"
                    alt=""
                    srcSet=""
                    className="h-[3.5rem] w-[3.5rem] -ml-[18rem] mr-[12rem]"
                />
                <div className="items flex space-x-[2.5rem] font-bold text-lg text-slate-300">
                    <p className="home hover:text-white cursor-pointer">Home</p>
                    <p className="services hover:text-white cursor-pointer">Services</p>
                    <p className="menu hover:text-white cursor-pointer">Menu</p>
                    <p className="about hover:text-white cursor-pointer">About</p>
                    <p className="blog hover:text-white cursor-pointer">Blog</p>
                    <p className="contact hover:text-white cursor-pointer">Contact</p>
                </div>
                <button
                    type="button"
                    className="ml-[10rem] -mr-[18rem] rounded-none bg-white text-black p-[4rem] py-[0.8vw] px-[1.3rem] hover:bg-green-600 hover:text-white"
                >
                    <p className="text-center">RESERVATION</p>
                </button>
            </div>
            {/*Welcome Description Of Site*/}
            <div className="flex flex-col  w-auto h-[20rem] mt-[2.5rem]">
                <p
                    className="font-serif text-white text-7xl mb-[1vw] font-bold text-center"
                    id="para1"
                >
                    DELICIOUS FOOD
                </p>
                <p
                    className="font-serif text-white text-7xl mb-[1vw] font-bold text-center"
                    id="para2"
                >
                    FOR ANY EVENT
                </p>
                <p className="font-serif text-white text-3xl text-center" id="para3">
                    Anytime!!
                </p>
                <p className="font-serif text-white text-3xl text-center" id="para4">
                    Anywhere!!
                </p>
                <div className="duo-btn flex justify-center space-x-4 flex-wrap items-center mt-[1rem]">
                    <button
                        type="button"
                        className="rounded-none bg-green-600 text-white p-[4rem] py-[0.8vw] px-[1.3rem] hover:bg-green-500"
                    >
                        <p className="text-center text-base">Today's Menu</p>
                    </button>
                    <button
                        type="button"
                        className="rounded-none bg-white text-black p-[4rem] py-[0.8vw] px-[1.3rem] hover:bg-green-600 hover:text-white"
                        id="second-btn"
                    >
                        <p className="text-center text-base">About Us</p>
                    </button>
                </div>
            </div>
            {/*SEPERATED FOR HAM-ITEMS*/}
            <div className="flex justify-center w-auto h-[20rem] -mt-[20rem]">
                {/*Items Of hamburger*/}
                <div
                    className="ham-items flex flex-col items-center justify-evenly h-auto w-[20rem] bg-green-600 font-bold text-lg text-slate-300 -translate-y-[50rem]"
                    id="navItems"
                >
                    <p className="home hover:text-white cursor-pointer">Home</p>
                    <p className="services hover:text-white cursor-pointer">Services</p>
                    <p className="menu hover:text-white cursor-pointer">Menu</p>
                    <p className="about hover:text-white cursor-pointer">About</p>
                    <p className="blog hover:text-white cursor-pointer">Blog</p>
                    <p className="contact hover:text-white cursor-pointer">Contact</p>
                    <button
                        type="button"
                        className="rounded-none bg-white text-black p-[4rem] py-[0.8vw] px-[1.3rem] hover:bg-yellow-600 hover:text-white"
                    >
                        <p className="text-center">RESERVATION</p>
                    </button>
                </div>
            </div>
        </header>
    );
}
