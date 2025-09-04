'use client'

import logo from "@/assets/logo.png";
import jobify from "@/assets/jobify.jpg";
import carewise from "@/assets/carewise.png";
import versili from "@/assets/versili.png";
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

const cardAnimation = {
    hidden: {opacity: 0, y: 25},
    show: {opacity: 1, y: 0, transition: {duration: 0.5} }
}

const items = {
    hidden: {opacity: 0, y: 10},
    show: {opacity: 1, y: 0, transition: {duration: 0.5} }
}

const projects = [
    {name: 'Freelancers platform', description: 'A modern platform that connects job seekers with opportunities in a fast and intuitive way. The website serves as the entry point for both candidates and employers, offering a seamless experience across.', picture: jobify},
    {name: 'CareWise', description: 'Carewise is a smart platform designed to make healthcare management simple and accessible. It connects patients, doctors, and caregivers in one seamless experience.', picture: carewise},
    {name: 'Versili – Crypto Wallet App', description: 'Versili is a secure and user-friendly mobile wallet designed for managing digital assets with ease. It combines simplicity with powerful features, making crypto accessible to everyone.', picture: versili},
];

export default function Projects() {
    return (
        <section className='bg-white px-18 py-7 pb-20'>
            <motion.div variants={container} initial='hidden' whileInView='show' viewport={{once: true, amount: 0.2}} className='flex flex-col bg-white justify-center items-center text-center'>
                <motion.div variants={items} className='inline-flex flex-row items-center classicCard rounded-full px-2 py-1 gap-1'>
                    <img src={logo.src} alt='logo' className='w-4 h-4'/>
                    <p className='text-xs text-[#87A2FF]'>Projects</p>
                </motion.div>

                <motion.p variants={items} className='text-3xl text-black font-medium mt-5'>Turning Ideas Into Digital Products</motion.p>
                <motion.p variants={items} className='description mt-3 max-w-110'>From landing pages to full-stack mobile apps, here are some of the projects I’ve delivered using React, Next.js, and React Native.</motion.p>

                <motion.div variants={items} className='flex flex-row gap-5 justify-center items-center mt-10'>
                    {projects.map((item, i) => (
                        <div className='flex flex-col max-w-80 border border-black/20 rounded-2xl px-7 py-5 justify-between items-start min-h-140' key={i}>
                            <div className='flex flex-col justify-start items-start'>
                                <img src={item.picture.src} alt='' className='rounded-xl h-70 w-70 object-cover'/>
                                <p className='text-lg text-black font-medium mt-3'>{item.name}</p>
                                <p className='description text-start mt-3'>{item.description}</p>
                            </div>
                            <div className={`flex flex-row justify-center items-center classicCard w-full py-3 rounded-full mt-6 text-black text-sm transition-all duration-400 ease-in-out hover:bg-[#87A2FF] hover:text-white hover:scale-94 cursor-pointer`}>Read More</div>
                        </div>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
}