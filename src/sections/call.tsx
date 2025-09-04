'use client'

import logo from "@/assets/logo.png";
import codili from "@/assets/codili.png";
import {useState} from "react";
import { motion } from "framer-motion";

const container = {
    hidden: {opacity: 0},
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.25,
        }
    }
}

const item = {
    hidden: {opacity: 0, y: 10},
    show: {opacity: 1, y: 0, transition: {duration: 0.5}},
}

export default function Call() {

    const [first_name, setFirst_name] = useState("");
    const [last_name, setLast_name] = useState("");
    const [message, setMessage] = useState("");

    return (
        <section className='bg-white px-18 py-7'>
            <motion.div variants={container} initial='hidden' whileInView='show' viewport={{once: true, amount: 0.2}} className='relative flex flex-col bg-white justify-between'>
                <div className='flex flex-row justify-between'>
                    <div>
                        <motion.div variants={item} className='inline-flex flex-row items-center classicCard rounded-full px-2 py-1 gap-1'>
                            <img src={logo.src} alt='logo' className='w-4 h-4'/>
                            <p className='text-xs text-[#87A2FF]'>Best Projects</p>
                        </motion.div>

                        <motion.p variants={item} className='text-3xl text-black font-medium max-w-100 mt-15'>Ready to transform your Idea to real-project ?</motion.p>
                        <motion.p variants={item} className='description max-w-140 mt-5'>Have an idea in mind? Let’s bring it to life with powerful, modern solutions — from design to development, I’ll help you build a project that grows with your goals.</motion.p>
                    </div>
                    <motion.div variants={item}>
                        <div className='flex flex-row gap-3 justify-start items-start'>
                            <div className='flex flex-col gap-1'>
                                <p className='text-sm font-medium text-black '>First Name</p>
                                <input
                                    className="border-1 border-black/20 rounded-lg h-9 focus:border-[#87A2FF] focus:outline-none transition-colors duration-200 placeholder-gray-400 px-2 text-sm text-black/70 font-medium"
                                    type="text"
                                    placeholder="Type here..."
                                />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <p className='text-sm font-medium text-black '>Last Name</p>
                                <input className='border-1 border-black/20 rounded-lg h-9 focus:border-[#87A2FF] focus:outline-none transition-colors duration-200 placeholder-gray-400 px-2 text-sm text-black/70 font-medium' placeholder='Michel'></input>
                            </div>
                        </div>
                        <p className='text-sm font-medium text-black mt-5'>Email</p>
                        <input className='w-full border-1 border-black/20 rounded-lg h-9 focus:border-[#87A2FF] focus:outline-none transition-colors duration-200 placeholder-gray-400 px-2 text-sm text-black/70 font-medium' placeholder='Johan@gmail.com'></input>
                        <p className='text-sm font-medium text-black mt-5'>Message</p>
                        <textarea
                            className='border border-black/20 rounded-lg w-full mt-1 p-2 resize-none placeholder-gray-400  text-sm text-black/70 font-medium focus:border-[#87A2FF] focus:outline-none transition-colors duration-200'
                            rows={5}
                            maxLength={1000}  // optional: limit characters
                            placeholder='Hii!'
                        ></textarea>
                        <div className='flex flex-row justify-center items-center classicCard w-full py-3 rounded-lg mt-6 text-white bg-gradient-to-b from-[#C4D7FF] to-[#87A2FF] text-sm font-medium cursor-pointer transition-all duration-200 ease-in-out hover:opacity-90'>Let's Talk</div>
                    </motion.div>
                </div>

                <motion.div variants={item} className='bg-[#B6BFD2]/15 rounded-xl px-10 py-10 flex flex-row justify-start items-start mt-25 gap-40 opacity-90'>
                    <div className='flex flex-col justify-between items-start h-60'>
                        <div className='flex flex-col gap-10 justify-start items-start'>
                            <div className='flex flex-row gap-2'>
                                <img src={logo.src} alt='' className='w-13 h-13 rotate-90'/>
                                <img src={codili.src} alt='' className='w-25 h-13 object-contain'/>
                            </div>
                            <p className='description max-w-100'>We design and develop powerful web and mobile applications with React, Next.js, and React Native. My products are fast, scalable, and built to drive real growth for your business.</p>
                        </div>
                        <p className='text-sm font-semibold text-black/50'>Powered By Codili @2025</p>
                    </div>
                    <div className='flex flex-col justify-between items-start gap-3'>
                        <p className='text-black/80 text-md font-medium mb-8'>Links</p>
                        <p className='description'>Github</p>
                        <p className='description'>Behance</p>
                        <p className='description'>Dribbble</p>
                        <p className='description'>Fiverr</p>
                    </div>
                    <div className='flex flex-col justify-between items-start gap-3'>
                        <p className='text-black/80 text-md font-medium mb-8'>Follow us</p>
                        <p className='description'>Instagram</p>
                        <p className='description'>X</p>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}