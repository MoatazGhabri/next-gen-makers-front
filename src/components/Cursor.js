import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <motion.div
      className="custom-cursor"
      animate={{
        left: position.x - 15, // Center the cursor
        top: position.y - 15,
      }}
      transition={{ type: "spring", stiffness: 100, damping: 10 }}
    >
      <div className="cursor-pointer"></div>
    </motion.div>
  );
};
