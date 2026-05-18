import { motion } from "motion/react";

export function BloodDrips() {
  const drips = [
    { left: "2%", delay: 0, scale: 1.2, duration: 8.5 },
    { left: "8%", delay: 1.5, scale: 0.8, duration: 12.2 },
    { left: "15%", delay: 3, scale: 1.5, duration: 7.8 },
    { left: "22%", delay: 0.8, scale: 1, duration: 9.5 },
    { left: "30%", delay: 2.3, scale: 1.3, duration: 8.2 },
    { left: "38%", delay: 4, scale: 0.9, duration: 14.1 },
    { left: "45%", delay: 1.2, scale: 1.1, duration: 10.8 },
    { left: "55%", delay: 2.8, scale: 1.4, duration: 9.9 },
    { left: "62%", delay: 0.5, scale: 0.7, duration: 13.8 },
    { left: "70%", delay: 3.5, scale: 1.2, duration: 11.2 },
    { left: "78%", delay: 1.8, scale: 1.6, duration: 7.1 },
    { left: "85%", delay: 4.5, scale: 0.8, duration: 15.8 },
    { left: "92%", delay: 1, scale: 1.1, duration: 11.6 },
    { left: "98%", delay: 3.2, scale: 1.3, duration: 16.4 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
      {drips.map((drip, i) => (
        <motion.div
          key={i}
          initial={{ y: -50, rotate: -45, scale: 1, opacity: 0 }}
          animate={{ 
            y: ["-10vh", "115vh"],
            x: [0, Math.sin(i * 1.5) * 40], // Varied trajectory using sine of index
            opacity: [0, 1, 1, 0],
            scaleY: [drip.scale, drip.scale * 2, drip.scale * 3], // Enhanced stretch
            scaleX: [drip.scale, drip.scale * 0.6, drip.scale * 0.4], // Thinner while falling
          }}
          transition={{
            duration: drip.duration,
            repeat: Infinity,
            delay: drip.delay,
            ease: [0.6, 0.01, 0.8, 0.01], // Custom steeper curve for faster acceleration
          }}
          className="absolute top-0 w-5 h-5 bg-blood shadow-[0_0_15px_rgba(204,0,0,0.6)]"
          style={{ 
            left: drip.left, 
            borderRadius: '50% 50% 50% 0',
            filter: 'blur(0.3px)',
          }}
        />
      ))}
    </div>
  );
}
