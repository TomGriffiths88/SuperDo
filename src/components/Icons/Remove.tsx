import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import icon from '../../images/icons/Remove.svg';

export default function Remove() {
  return (
    <Link to={'/remove'}>
      <motion.img
        whileHover={{ rotate: 180 }}
        src={icon}
        alt='Remove Tasks'
        style={{ cursor: 'pointer' }}
      />
    </Link>
  );
}
