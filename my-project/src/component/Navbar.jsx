import React from "react";
import logo from "../logo.png"; 
import { navItems } from "../Constraints";
import { Menu, X } from "lucide-react";
import { useState } from "react";
 export const Navbar = ()=>{
    const [MobileDrawerOpen,setMobileDrawerOpen]=useState("false");
    const toggleMobile =()=>{
        setMobileDrawerOpen(!MobileDrawerOpen);
    };
    return(
        <>
        <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80"><div className="container px-4 mx-auto relative text-sm">
            <div className="flex justify-between items-centre">
                <div className="flex item-centre flex-shrink-0">
                    <img src={logo} alt="logo" className="h-10 w-10 mr-2" />
                    <span className="text-xl tracking-tight">VirtualR</span></div>
                    <ul  className="hidden lg:flex ml-14 space-x-12">
                        {navItems.map((item,index)=>(
                            <li key={index}>
                                <a href={item.href}>{item.label}</a>
                            </li>
                        ))}</ul>
                        <div className="hidden lg:flex justify-centre space-x-12 items-centre">
                            <a href="#" className="py-2 px-3 border roundered-md">Sign In</a>
                            <a className="bg-gradient-to-r bg-orange-500 to-orange-800 py-2 px-3 rounded-md">
                                Create an account</a></div>
                                <div className="lg:hidden md:flex flex-col justify-end">
                                    <button onClick={toggleMobile}>{MobileDrawerOpen ?<X/> : <Menu/>}</button></div></div>
                                    {MobileDrawerOpen && (
                                        <div className="fixed light-0 z-0 bg-neutral-900 w-full p-12 flex flex-col justify-centre item-centre lg:hidden">
                                            <ul>
                                                {navItems.map((item,index)=>(
                                                    <li key={index} className="py-4">
                                                        <a href={item.href}>{item.label}</a>
                                                        </li>
                                             ) )}
                                            </ul>
                                            <div className="flex space-x-6">
                                                <a href="#" className="py-2 px-3 border rounded-md">Sign in</a>
                                                <a href="#" className="py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800">Create an account</a>
                                            </div>
                                        </div>
                                    )}</div></nav></>
    )
}