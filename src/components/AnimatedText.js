import React from "react";
import { motion } from "framer-motion";

const AnimatedTextWord = ({ text }) => {
    const words = text.split(" ");

// Variants for Container of words.
    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
        }),
    };

// Variants for each word.

    const child = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 10,
                stiffness: 100,

            },
        },
        hidden: {
            opacity: 0,
            y: 200,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,

            },
        },
    };

    return (
        <motion.div
            style={{ overflow: "hidden", display: "flex", fontSize: "2rem",
            }}
            variants={container}
            initial="hidden"
            animate="visible">
            {words.map((word, index) => (
                <motion.span className={'char'}
                             variants={child}
                             key={index}

                >
                    {word}
                </motion.span>
            ))}
        </motion.div>
    );
};

export default AnimatedTextWord;
