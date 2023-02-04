import React from "react"

import { motion } from "framer-motion";

interface FilterTopProps {
  setFilter: (title: string) => void;
}

const FiltersTop: React.FC<FilterTopProps> = ({ setFilter }) => {
  const filtersTop = [
    { title: 'Todos' },
    { title: 'Fortalecimento Joelho' },
    { title: 'Fortalecimento Tornozelo e pé' },
    { title: 'Respiração Pos Covid I' },
    { title: 'Respiração Pos Covid II' },
    { title: 'Fortalecimento Ombro' },
    { title: 'Cardio Pós covid' },
    { title: 'Fortalecimento Mão' },
    { title: 'Agachamento Livre' },
    { title: 'Equilibrio' },
    { title: 'Inferiores' },
    { title: 'Superiores' },
  ];

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };
  
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <motion.div 
      variants={container}
      initial="hidden"
      animate="visible"
      className="flex-1 bg-gray-200 dark:bg-[#202020] text-sm flex flex-wrap justify-between border border-r-0 border-l-0 border-t-[0.4px] border-b-[1px] border-gray-300 dark:border-gray-800 py-4 px-6"
    >
    {filtersTop.map(({ title }, idx) => (
      <motion.button 
        key={idx}
        variants={item}
        onClick={() => title === 'Todos' ? setFilter("") : setFilter(title)}
      >
        <h3 className="bg-gray-300 dark:bg-[#606060] text-[#121212] dark:text-[#F9F9F9] hover:bg-gray-400 cursor-pointer rounded-full text-center px-3 py-1 my-1 mx-1">
          { title }
        </h3>
      </motion.button>
    ))}
    </motion.div>
  )
}

export default FiltersTop;