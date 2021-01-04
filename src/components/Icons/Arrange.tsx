import icon from '../../images/icons/Arrange.svg';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Arrange() {
  return (
    <Link to='/arrange'>
      <motion.img
        src={icon}
        whileHover={{ rotate: 180 }}
        alt='Prioritie Tasks'
        style={{ cursor: 'pointer' }}
      />
    </Link>
  );
}
