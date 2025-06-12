"use client";

import * as motion from "motion/react-client"

type TimeProps = {
    time: number;
    label: string;
}

const Time = ({time, label }: TimeProps) => {
    return (
        <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
        >
            <div className="flex flex-col p-6 px-16 md:px-6 bg-[#2a2a41] rounded-box text-neutral-content">
                        <span className="countdown text-5xl">
                            <span 
                                style={{"--value":time} as React.CSSProperties }
                                aria-live="polite">{time}
                            </span>
                        </span>
                {label}
            </div>
        </motion.div>
    );
}
export default Time;