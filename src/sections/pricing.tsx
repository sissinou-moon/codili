'use client'

import logo from '@/assets/logo.png'
import check from '@/assets/check.png'
import { motion } from 'framer-motion'
import {createCheckoutUrl} from "@/lib/lemon-squeezy/server";
import Link from "next/link";
import {useState} from "react";

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
    show: {opacity: 1, y: 0, transition: {duration: 0.5} },
}

const cardAnimation = {
    hidden: {opacity: 0, y: 25},
    show: {opacity: 1, y: 0, transition: {duration: 0.5} }
}

const pricing = [
    {name: 'Starter', price: 120, description: 'For small businesses or individuals who need a simple online presence.', services: ['1 landing page (Next.js / React)', '1 simple mobile app (if needed)', 'Responsive design (mobile-friendly)', 'Basic SEO setup', 'Delivery in 14 days']},
    {name: 'Professional', price: 250, description: 'For growing businesses that need advanced features and scalability.', services: ['Multi-page website or mobile app', 'API integration (auth, payments, etc.)', 'Custom design tailored to brand', 'Performance optimization', 'Delivery in 14 days']},
    {name: 'Enterprise', price: 550, description: 'For enterprises or long-term projects requiring complex solutions.', services: ['Full-stack web or mobile app', 'Dashboard / Admin panel', 'Cloud deployment & CI/CD setup', 'Advanced security & scalability', 'Ongoing support & maintenance']},
]

export default function Pricing() {

    const [loading, setLoading] = useState(false);

    const handleCheckout = async () => {
        try {
            setLoading(true);
            const res = await fetch("/api/checkout", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ variantId: "988243", embed: false }),
            });

            if (!res.ok) throw new Error("Checkout request failed");
            const data = await res.json();

            if (!data.url) throw new Error("No checkout URL returned");
            window.location.href = data.url;
        } catch (err) {
            console.error("Checkout failed:", err);
            alert("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className='bg-white md:px-18 px-7 py-7 pb-20'>
            <motion.div variants={container} whileInView='show' initial='hidden' viewport={{once: true, amount: 0.2}} className='flex flex-col bg-white justify-center items-center text-center'>
                <motion.div variants={items} className='inline-flex flex-row items-center classicCard rounded-full px-2 py-1 gap-1'>
                    <img src={logo.src} alt='logo' className='w-4 h-4'/>
                    <p className='text-xs text-[#87A2FF]'>Pricing</p>
                </motion.div>

                <motion.p variants={items} className='md:text-3xl text-2xl max-w-70 md:max-w-300 text-black font-medium mt-5'>Choose the Right Plan for Your Project</motion.p>
                <motion.p variants={items} className='text-black/70 md:text-black font-light md:font-light text-sm md:text-md mt-3 max-w-110'>We offer flexible plans tailored to your business goals. Pick the package that fits your vision and let’s build it together.</motion.p>

                <div className='flex md:flex-row flex-col gap-5 justify-center items-center mt-10'>
                    {pricing.map((item, i) => (
                        <motion.div variants={cardAnimation} className='flex flex-col max-w-80 border border-black/20 hover:border-[#87A2FF] rounded-2xl px-7 py-5 justify-start items-start transition-all duration-300 ease-in-out hover:scale-101' key={i}>
                            <p className='text-black text-md'>{item.name}</p>
                            <p className='text-2xl text-black font-semibold mt-3'>${item.price}</p>
                            <p className='text-black/70 md:text-black font-light text-sm md:text-md text-start mt-3'>{item.description}</p>
                            <div onClick={handleCheckout} className={i === 1 ? `flex flex-row justify-center items-center classicCard w-full py-3 rounded-full mt-6 text-white bg-gradient-to-b from-[#C4D7FF] to-[#87A2FF] text-sm font-medium cursor-pointer transition-all duration-400 ease-in-out hover:scale-96 ${loading ? `opacity-40` : `opacity-100`}` : `flex flex-row justify-center items-center classicCard w-full py-3 rounded-full mt-6 text-black text-sm font-medium  cursor-pointer transition-all duration-400 ease-in-out hover:scale-96 ${loading ? `opacity-40` : `opacity-100`}`}>{loading ? "Loading..." : "Get Started Now!"}</div>
                            <div className='flex flex-col gap-4 mt-10 mb-2'>
                                {item.services.map((service, index) => (
                                    <div className='flex flex-row gap-2 items-center' key={index}>
                                        <img src={check.src} alt='' className='w-3 h-3'/>
                                        <p className='text-sm text-black '>{service}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}