"use client";

import Time from '@/components/card/time'
import { motion, useAnimation } from "framer-motion";
import { useState, useEffect } from 'react'
import { CircleChevronDown } from 'lucide-react';
import { Button } from "@/components/ui/button"
import { useRouter } from 'next/navigation';
import Img from 'next/image';

const Home = () => {
    const [expiryTime , setExpiryTime] = useState(false);
    const [rDay, setRDay] = useState(0);
    const [rHour, setRHour] = useState(0);
    const [rMin, setRMin] = useState(0);
    const [rSec, setRSec] = useState(0);
    const router = useRouter()
    
    const countDownTimer = () => {
        const date_future = new Date(
            Date.UTC(2025, 6, 20, 0, 0, 0),
        ).getTime();
        
        const date_now: number = new Date().getTime();
    
        let seconds = Math.floor((date_future - (date_now))/1000);
        let minutes = Math.floor(seconds/60);
        let hours = Math.floor(minutes/60);
        const days = Math.floor(hours/24);
    
        hours = hours-(days*24);
        minutes = minutes-(days*24*60)-(hours*60);
        seconds = seconds-(days*24*60*60)-(hours*60*60)-(minutes*60);
        
        setRDay(days);
        setRHour(hours);
        setRMin(minutes);
        setRSec(seconds);
        
        if (date_future - date_now <= 0) {
            setExpiryTime(true)
            
        }
    }
    const controlImage = useAnimation();
    useEffect(() => {
        const updateScroll = () => {
            const scrollY = window.scrollY;
            controlImage.start({ y: -scrollY * 1 });
        };

        window.addEventListener("scroll", updateScroll);

        return () => {
            window.removeEventListener("scroll", updateScroll);
        };
    }, [controlImage]);
    
    useEffect(()=>{
        const timer = setInterval(() => {
            countDownTimer()
        }, 1000)
        return () =>  clearInterval(timer);
    }, []);
    
    return (
        <div className="w-full">
            <motion.div
                className="relative w-full min-h-screen flex items-center justify-center"
            >
                <motion.img
                    initial={{ y: 0 }}
                    animate={controlImage}
                    src="/hearth.png"
                    alt="Hearth"
                    className="md:h-[600px] object-cover absolute p-6 md:p-0"
                />
                <div className="z-10 relative">
                    <div className="flex flex-col items-center justify-center">
                        <h1 className="md:text-5xl font-bold text-white text-4xl">Waddee auang 👋</h1>
                        <p className="text-white mb-6 md:mb-0">I have special gift for you</p>
                        <div className="h-26 bg-pink-200 w-1 rounded-md my-6 hidden md:block"></div>
                        <motion.div
                            animate={{ y: [10, 0, 10] }}
                            transition={{
                                repeat: Infinity,
                                duration: 0.7,
                                ease: "easeInOut",
                            }}
                        >
                            <CircleChevronDown 
                                className="text-white cursor-pointer md:w-[50px] md:h-[50px] h-[35px] w-[35px]"
                                onClick={() => {
                                    window.scrollTo({
                                        top: document.body.scrollHeight,
                                        left: 0,
                                        behavior: 'smooth',
                                    });
                                }}
                            />
                        </motion.div>
                    </div>
                </div>
            </motion.div>
            <section className="flex flex-col justify-center items-center min-h-screen">
                {!expiryTime ? (
                    <>
                        <h1 className="md:text-5xl font-bold text-white md:pb-16 text-center text-3xl pb-10">Count your birthday 🎂</h1>
                        <div className="grid md:grid-flow-col gap-5 text-center auto-cols-max">
                            <Time time={rDay} label="Days" />
                            <Time time={rHour} label="Hours" />
                            <Time time={rMin} label="Minutes" />
                            <Time time={rSec} label="Seconds" />
                        </div>
                    </>
                ) : (
                    <div>
                        <Img
                            alt="gif"
                            src="https://media.giphy.com/media/FTGah7Mx3ss04PcasF/giphy.gif"
                        />
                        <div className="grid grid-cols justify-center mt-6">
                            <Button onClick={() => {
                                router.push('/log-in')
                            }}>Click</Button>
                        </div>
                    </div>
                )}
            </section>
        </div>
    );
}
export default Home;