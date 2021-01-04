import { Link } from 'react-router-dom';
import icon from '../../images/icons/Add.svg';
import { motion } from 'framer-motion';

export default function Add() {
  return (
    <Link to={'/add'}>
      <motion.img
        src={icon}
        whileHover={{ rotate: 90 }}
        alt='Add Tasks'
        style={{ cursor: 'pointer' }}
      />
    </Link>
  );
}
