import { motion } from "framer-motion";
import { useScroll } from "../hooks/useScroll";

type Props = {
  src: string;
};

const SlideInImage: React.FC<Props> = ({ src }) => {
  const scrollY = useScroll();

  return (
    <motion.img
      src={src}
      initial={{ x: "-100%", opacity: 0 }}
      animate={{
        x: scrollY > 100 ? 0 : "-100%",
        opacity: scrollY > 100 ? 1 : 0,
      }}
      transition={{
        type: "tween",
        duration: 1,
        ease: "linear",
        delay: 0.3,
      }}
    />
  );
};

export default SlideInImage;
