'use client';
import { motion } from 'framer-motion';

export default function PageTransition({ children }) {
  return (
    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 6 }} transition={{ duration: 0.48, ease: [0.2, 0.9, 0.2, 1] }} className="min-h-screen">
      {children}
    </motion.div>
  );
}
