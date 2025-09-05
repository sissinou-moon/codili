'use client'

import logo from '@/assets/logo.png';
import codily from '@/assets/codili.png';
import iphone from '@/assets/iphone.png';
import projects from '@/assets/projects.png';
import history from '@/assets/history.png';
import { motion } from "framer-motion";

const container = {
    hidden: {opacity: 0},
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.25,
        }
    },
}

const item = {
    hidden: {opacity: 0, y: 10},
    show: {opacity: 1, y: 0, transition: {duration: 0.5}},
}

export default function Hero() {
    return (
        <section className='bg-white p-7'>
            <motion.div
                className="relative classicCard rounded-3xl p-5 justify-start items-center md:h-screen h-full
  bg-[linear-gradient(to_bottom_right,white_60%,#FFA5F8_80%,#87A2FF)]
  overflow-y-hidden p-7
  before:content-[''] before:absolute before:inset-0
  before:bg-[radial-gradient(circle,white_1px,transparent_1px)]
  before:bg-[size:20px_20px] before:rounded-3xl before:pointer-events-none
  before:z-0"
                variants={container}
                initial="hidden"
                animate="show"
            >
                <div className='relative z-10'>
                    <div className='inline-flex flex-row gap-1 border border-black/20 rounded-full px-3.5 py-1 items-center'>
                        <img src={logo.src} alt='' className='w-5 h-5 rotate-90'/>
                        <img src={codily.src} alt=''  className='w-10 h-3.5 object-cover'/>
                    </div>

                    <motion.div className='text-center text-black text-2xl md:text-[45px] font-bold md:mt-15 mt-7' variants={item}
                    >
                        Building Web & Mobile Experiences That Scale
                    </motion.div>
                    <motion.div variants={item} className='flex flex-row w-full justify-center items-center text-center text-black text-2xl md:text-[45px] font-bold md:mt-4 mt-2'>
                        with
                        <div className='classicCard rounded-xl px-3 py-1 ml-2 text-white text-2xl md:text-[45px] font-bold bg-gradient-to-b from-[#C4D7FF] to-[#87A2FF]'>
                            Codili
                        </div>
                    </motion.div>

                    <motion.div variants={item} className='flex flex-row text-center w-full justify-center items-center md:mt-10 mt-7'>
                        <p className='md:max-w-180 max-w-75 text-black/70 md:text-black font-light text-sm md:text-md'>
                            We design and develop modern applications with React, Next.js, and React Native, helping startups and businesses turn ideas into seamless digital products.
                        </p>
                    </motion.div>

                    <motion.div variants={item} className='flex flex-row w-full justify-center items-center md:max-h-84 max-h-0 overflow-y-hidden md:pt-75 pt-60 -mb-7 md:mb-0'>
                        <img src={iphone.src} alt=''  className='md:w-75 md:h-145 w-55 h-100'/>
                    </motion.div>
                    <motion.div variants={item} className='absolute md:bottom-20 md:left-129 bottom-10 left-25'>
                        <img src={logo.src} alt=''  className='md:w-25 md:h-25 w-20 h-20 object-contain'/>
                    </motion.div>
                    <motion.div variants={item} className='absolute md:bottom-7 md:left-55 bottom-11 left-40'>
                        <img src={history.src} alt=''  className='md:min-w-0 md:w-70 md:h-70 min-w-35 h-22 md:object-contain object-cover'/>
                    </motion.div>
                    <motion.div variants={item} className='absolute md:bottom-17 md:right-55 bottom-25 right-35'>
                        <img src={projects.src} alt=''  className='md:min-w-0 md:w-75 md:h-75 min-w-40 h-18 md:object-contain object-cover'/>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}