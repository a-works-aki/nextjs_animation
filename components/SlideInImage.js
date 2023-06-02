import { motion } from 'framer-motion';
import { useScroll } from '../hooks/useScroll';

const SlideInImage = ({ src }) => {
  const scrollY = useScroll();

  return (
    <motion.img
      src={src}
      style={{ x: scrollY / 2 }}
      animate={{ x: scrollY > 200 ? 0 : '50%' }}
      transition={{ type: 'spring', stiffness: 50 }}
    />
  );
};

export default SlideInImage;
