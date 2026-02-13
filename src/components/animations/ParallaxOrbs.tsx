import { motion, useScroll, useTransform } from 'framer-motion';

const ParallaxOrbs = () => {
  const { scrollYProgress } = useScroll();
  
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -500]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <div className="hidden md:block fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <motion.div
        style={{ y: y1 }}
        className="absolute top-[30%] left-[10%] w-[500px] h-[500px] rounded-full opacity-[0.04]"
        aria-hidden
      >
        <div className="w-full h-full rounded-full bg-primary blur-[120px]" />
      </motion.div>

      <motion.div
        style={{ y: y2 }}
        className="absolute top-[60%] right-[5%] w-[400px] h-[400px] rounded-full opacity-[0.03]"
        aria-hidden
      >
        <div className="w-full h-full rounded-full bg-primary blur-[100px]" />
      </motion.div>

      <motion.div
        style={{ y: y3 }}
        className="absolute top-[85%] left-[30%] w-[600px] h-[600px] rounded-full opacity-[0.035]"
        aria-hidden
      >
        <div className="w-full h-full rounded-full bg-primary blur-[140px]" />
      </motion.div>
    </div>
  );
};

export default ParallaxOrbs;
