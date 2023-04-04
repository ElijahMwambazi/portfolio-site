import { ReactNode } from "react";
import { motion } from "framer-motion";

export type SkillContainerProps = {
  children: ReactNode;
};

const SkillConatiner = ({
  children,
}: SkillContainerProps) => {
  return (
    <motion.div
      className="div"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1 }}
      variants={{
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0 },
      }}
    >
      {children}
    </motion.div>
  );
};

export default SkillConatiner;
