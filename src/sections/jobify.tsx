'use client'

import logo from '@/assets/logo.png'
import jobify_app from '@/assets/jobify_app.png'
import {
    Search,
    MousePointerClick,
    FolderKanban,
    SmartphoneNfc,
} from "lucide-react";
import { motion } from 'framer-motion';

const container = {
    hidden: {opacity: 0},
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.25,
        },
    },
}

const items = {
    hidden: {opacity: 0, y: 10},
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
        }
    },
}

const jobifyDescribe = [
    {
        name: "Smart Job Search",
        icon: Search,
        description:
            "Discover tailored opportunities that match your skills and goals.",
    },
    {
        name: "One-Tap Applications",
        icon: MousePointerClick,
        description: "Apply instantly with saved profiles and CVs.",
    },
    {
        name: "Career Management",
        icon: FolderKanban,
        description:
            "Track applications, interviews, and offers in one place.",
    },
    {
        name: "Mobile First Experience",
        icon: SmartphoneNfc,
        description:
            "Fast, intuitive, and built for modern job seekers on the go.",
    },
];

export default function Jobify() {
    return (
        <section className='bg-white lg:px-18 md:px-10 px-7 py-7 md:h-screen overflow-y-hidden'>
            <motion.div variants={container} initial='hidden' whileInView='show' viewport={{once: true, amount: 0.2}} className='relative flex md:flex-row flex-col bg-white justify-between h-full md:max-h-185 md:overflow-y-hidden'>
                <div>
                    <motion.div variants={items} className='inline-flex flex-row items-center classicCard rounded-full px-2 py-1 gap-1'>
                        <img src={logo.src} alt='logo' className='w-4 h-4'/>
                        <p className='text-xs text-[#87A2FF]'>Best Projects</p>
                    </motion.div>

                    <motion.div variants={items} className='flex flex-row gap-1 md:text-3xl text-2xl font-medium md:mt-10 mt-4'>
                        <p className='text-black'>Boost Your Career with</p>
                        <p className='text-[#87A2FF]'>Jobify</p>
                    </motion.div>
                    <motion.p variants={items} className='md:max-w-180 text-black/70 md:text-black font-light md:font-light text-sm md:text-md max-w-150 mt-3'>One of our best projects , Jobify helps you find jobs faster, apply with ease, and manage opportunities all from your mobile. Designed to make job hunting simple, smart, and stress-free.</motion.p>

                    <div className="grid grid-cols-1 md:grid-cols-2 mt-5">
                        {jobifyDescribe.map((item, idx) => (
                            <motion.div
                                key={idx}
                                className="flex md:flex-col flex-row mt-10 gap-5 md:gap-0"
                                variants={items}
                            >
                                <div className='flex flex-row justify-center items-center h-10 w-10 classicCard bg-[#87A2FF] rounded-full mb-3'>
                                    <item.icon className="w-4 h-4 text-whit" />
                                </div>
                                <div className='flex flex-col '>
                                    <h3 className="text-xl font-semibold text-black">{item.name}</h3>
                                    <p className="text-black/70 md:text-black font-light md:font-normal text-sm md:text-md max-w-50">{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
                <motion.div variants={{hidden: {opacity: 0, y:20}, show: {opacity: 1, y: 0, transition: {duration: 0.5} } }} className='flex flex-row justify-start items-start md:mt-10 w-full md:max-w-95 mt-10 md:mt-0 lg:mt-10'>
                    <img src={jobify_app.src} alt=''  className='md:w-95 md:h-160 w-70 h-130 object-contain'/>
                </motion.div>

                {/* Bottom shadow gradient */}
                <div className="absolute bottom-0 lg:-bottom-5 left-0 w-full h-32 bg-gradient-to-t from-white via-white to-transparent"></div>
            </motion.div>
        </section>
    );
}