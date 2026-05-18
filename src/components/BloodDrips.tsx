import { motion } from "motion/react";

export function BloodDrips() {
  const drips = [
    { left: "5%", delay: 0 },
    { left: "15%", delay: 1.5 },
    { left: "25%", delay: 3 },
    { right: "5%", delay: 0.8 },
    { right: "15%", delay: 2.3 },
    { right: "25%", delay: 3.8 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
      {drips.map((drip, i) => (
        <motion.div
          key={i}
          initial={{ y: -50, opacity: 0.7 }}
          animate={{ y: "110vh", opacity: [0.7, 0.9, 0] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            delay: drip.delay,
            ease: "linear",
          }}
          className="absolute top-0 w-2 h-12 bg-blood rounded-full"
          style={{ 
            left: drip.left, 
            right: drip.right,
            filter: 'blur(1px)'
          }}
        />
      ))}
    </div>
  );
}
