'use client';
import { motion, AnimatePresence } from 'framer-motion';

export default function Modal({ item, onClose }){
  return (
    <AnimatePresence>
      {item && (
        <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }} className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
          <motion.div initial={{ y:20, scale:0.98 }} animate={{ y:0, scale:1 }} exit={{ y:10, scale:0.98 }} transition={{ duration:0.3 }} className="bg-neutral-900 p-6 rounded-2xl max-w-4xl w-full border border-white/6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="text-sm text-gray-400">Featured</div>
                <div className="text-2xl font-bold">{item.title}</div>
              </div>
              <button onClick={onClose} className="px-3 py-2 bg-white/6 rounded-md">Close</button>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white/4 rounded-lg aspect-[16/10]"></div>
              <div>
                <p className="text-gray-300 mb-4">{item.description}</p>
                <div className="text-sm text-gray-400 mb-2">Tags</div>
                <div className="flex gap-2 flex-wrap">{item.tags && item.tags.map(t=> <span key={t} className="text-xs px-2 py-1 bg-white/6 rounded">{t}</span>)}</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
