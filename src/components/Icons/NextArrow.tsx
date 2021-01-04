import React from 'react';
import { motion } from 'framer-motion';

import Icon from '../../images/icons/NextArrow.svg';

interface props {
  alt: string;
}

export default function NextArrow({ alt }: props) {
  return <motion.img whileHover={{ x: 10 }} src={Icon} alt={alt} />;
}
