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
                className="relative classicCard rounded-3xl p-5 justify-start items-center h-screen
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

                    <motion.div className='text-center text-black text-[45px] font-bold mt-15' variants={item}
                    >
                        Building Web & Mobile Experiences That Scale
                    </motion.div>
                    <motion.div variants={item} className='flex flex-row w-full justify-center items-center text-center text-black text-[45px] font-bold mt-4'>
                        with
                        <div className='classicCard rounded-xl px-3 py-1 ml-2 text-white text-[45px] font-bold bg-gradient-to-b from-[#C4D7FF] to-[#87A2FF]'>
                            Codili
                        </div>
                    </motion.div>

                    <motion.div variants={item} className='flex flex-row text-center w-full justify-center items-center mt-10'>
                        <p className='max-w-180 text-black text-md'>
                            We design and develop modern applications with React, Next.js, and React Native, helping startups and businesses turn ideas into seamless digital products.
                        </p>
                    </motion.div>

                    <motion.div variants={item} className='flex flex-row w-full justify-center items-center max-h-84 overflow-y-hidden pt-75'>
                        <img src={iphone.src} alt=''  className='w-75 h-145'/>
                    </motion.div>
                    <motion.div variants={item} className='absolute bottom-20 left-129'>
                        <img src={logo.src} alt=''  className='w-25 h-25 object-contain'/>
                    </motion.div>
                    <motion.div variants={item} className='absolute bottom-7 left-55'>
                        <img src={history.src} alt=''  className='w-70 h-70 object-contain'/>
                    </motion.div>
                    <motion.div variants={item} className='absolute bottom-17 right-55'>
                        <img src={projects.src} alt=''  className='w-75 h-75 object-contain'/>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}