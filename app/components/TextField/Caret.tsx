import { motion, AnimatePresence } from "framer-motion";

const Caret = () => {
  return (
    <AnimatePresence>
      <motion.div
        aria-hidden={true}
        initial={{ opacity: 1, scale: 1.2 }}
        animate={{ opacity: 0, scale: 1 }}
        exit={{ opacity: 1, scale: 1.2 }}
        transition={{ repeat: Infinity, duration: 0.8, ease: "easeInOut" }}
        className="inline-block bg-primary-500 w-[3px] h-7"
      />
    </AnimatePresence>
  );
};

export default Caret;
