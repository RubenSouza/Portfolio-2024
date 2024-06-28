import { motion } from "framer-motion";

const stairAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};

const reverseIndex = (index: number, length: number) => {
  return length - index - 1;
};

const Stairs = () => {
  return (
    <>
      {[...Array(6)].map((_, index) => {
        return (
          <motion.div
            key={index}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={stairAnimation}
            transition={{
              duration: 0.4,
              ease: "easeInOut",
              delay: 0.1 * reverseIndex(index, 6),
            }}
            className="h-full w-full bg-primary-100 relative"
          />
        );
      })}
    </>
  );
};

export default Stairs;
