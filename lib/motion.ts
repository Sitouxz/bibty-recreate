import { Variants } from "framer-motion";

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, ease: [0, 0, 0.58, 1] as const } },
};

export const slideInLeft: Variants = {
  hidden: { x: -50, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.6, ease: [0, 0, 0.58, 1] as const } },
};

export const slideInRight: Variants = {
  hidden: { x: 50, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.6, ease: [0, 0, 0.58, 1] as const } },
};

export const slideInUp: Variants = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0, 0, 0.58, 1] as const } },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const cardHover: Variants = {
  rest: { scale: 1, y: 0 },
  hover: { 
    scale: 1.02, 
    y: -5,
    transition: { type: "spring", stiffness: 300, damping: 20 } 
  },
};

export const buttonHover: Variants = {
  rest: { scale: 1 },
  hover: { 
    scale: 1.05, 
    transition: { type: "spring", stiffness: 400, damping: 10 } 
  },
  tap: { scale: 0.95 },
};

export const floatAnimation = {
  y: [-10, 10, -10] as [number, number, number],
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: [0.4, 0, 0.6, 1] as const, // Custom easeInOut curve
  },
};

export const pulseAnimation = {
  scale: [1, 1.05, 1] as [number, number, number],
  opacity: [0.8, 1, 0.8] as [number, number, number],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: [0.4, 0, 0.6, 1] as const, // Custom easeInOut curve
  },
};

