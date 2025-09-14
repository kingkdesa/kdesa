'use client';
import { motion } from 'framer-motion';
export default function PageOverlay(){ return (<motion.div initial={{opacity:1}} animate={{opacity:0}} transition={{duration:0.9,ease:[0.2,0.9,0.2,1]}} className="fixed inset-0 bg-gradient-to-br from-[var(--accent-a)] to-[var(--accent-b)] pointer-events-none z-50 opacity-0" />); }
