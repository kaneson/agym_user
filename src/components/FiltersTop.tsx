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
    { title: 'Treino' },
    { title: 'Idosos' },
    { title: 'Barriga' },
    { title: 'Pernas' },
    { title: 'Caminhada' },
    { title: 'Equilíbrio' },
    { title: 'Ginástica' },
    { title: 'Exercícios' },
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
    <div className="w-full">
      <motion.div 
        variants={container}
        initial="hidden"
        animate="visible"
        // style={{ overflowX: 'scroll', scrollbarWidth: 'thin', scrollbarColor: 'rgba(0, 0 ,50)', scrollBehavior: 'smooth' }}
        className="scroll flex-wrap bg-[#eff0f4] dark:bg-[#202020] text-sm flex 2xl:justify-between xl:justify-start py-4 px-6"
      >
      {filtersTop.map(({ title }, idx) => (
        <motion.button 
          key={idx}
          variants={item}
          onClick={() => title === 'Todos' ? setFilter("") : setFilter(title)}
        >
          <h3 className="bg-[#F8F9FC] dark:bg-[#606060] font-bold text-[#121212] dark:text-[#F9F9F9] hover:bg-[#14d4f1] dark:hover:bg-[#14d4f1] hover:text-[#5524d9] dark:hover:text-[#5524d9] cursor-pointer text-center px-3 py-3 my-1 mx-1">
            { title }
          </h3>
        </motion.button>
      ))}
      </motion.div>
    </div>
  )
}

export default FiltersTop;