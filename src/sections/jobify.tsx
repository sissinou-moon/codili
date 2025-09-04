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
        <section className='bg-white px-18 py-7 justify-between h-screen overflow-y-hidden'>
            <motion.div variants={container} initial='hidden' whileInView='show' viewport={{once: true, amount: 0.2}} className='relative flex flex-row bg-white justify-between h-screen overflow-y-hidden'>
                <div>
                    <motion.div variants={items} className='inline-flex flex-row items-center classicCard rounded-full px-2 py-1 gap-1'>
                        <img src={logo.src} alt='logo' className='w-4 h-4'/>
                        <p className='text-xs text-[#87A2FF]'>Best Projects</p>
                    </motion.div>

                    <motion.div variants={items} className='flex flex-row gap-1 text-3xl font-medium mt-10'>
                        <p className='text-black'>Boost Your Career with</p>
                        <p className='text-[#87A2FF]'>Jobify</p>
                    </motion.div>
                    <motion.p variants={items} className='description max-w-150 mt-3'>One of our best projects , Jobify helps you find jobs faster, apply with ease, and manage opportunities all from your mobile. Designed to make job hunting simple, smart, and stress-free.</motion.p>

                    <div className="grid grid-cols-1 md:grid-cols-2 mt-5">
                        {jobifyDescribe.map((item, idx) => (
                            <motion.div
                                key={idx}
                                className="flex flex-col mt-10"
                                variants={items}
                            >
                                <div className='flex flex-row justify-center items-center h-10 w-10 classicCard bg-[#87A2FF] rounded-full mb-3'>
                                    <item.icon className="w-4 h-4 text-whit" />
                                </div>
                                <h3 className="text-xl font-semibold text-black">{item.name}</h3>
                                <p className="description max-w-50">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
                <motion.img variants={{hidden: {opacity: 0, y:20}, show: {opacity: 1, y: 0, transition: {duration: 0.5} } }} src={jobify_app.src} alt=''  className='w-95 h-160 object-contain'/>

                {/* Bottom shadow gradient */}
                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white via-white to-transparent z-0"></div>
            </motion.div>
        </section>
    );
}