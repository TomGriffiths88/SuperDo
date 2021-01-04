import CloseIcon from '../../images/icons/X.svg';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Close() {
  return (
    <Link to={'/'}>
      <motion.img whileHover={{ rotate: 90 }} src={CloseIcon} alt='exit' />
    </Link>
  );
}
