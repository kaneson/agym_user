import React from "react"

import { motion } from "framer-motion";

import HorizontalScroll from "react-scroll-horizontal";
import { ArrowLeft, ArrowRight } from "heroicons-react";

interface FilterTopProps {
  setFilter: (title: string) => void;
}

const FiltersTop: React.FC<FilterTopProps> = ({ setFilter }) => {
  const filtersTop = [
    { title: 'Todos' },
    { title: 'Equilíbrio' },
    { title: 'Cardio / Respiratório' },
    { title: 'Fortalecimento' },
    { title: 'Flexibilidade' },
    { title: 'Pernas' },
    { title: 'Caminhada' },
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
    <div className="flex bg-[#eff0f4] dark:bg-[#202020]">
      <HorizontalScroll
        className="scroll items-center w-full flex xl:mx-40 lg:mx-30 md:mx-20" 
        style={{ height: '120px' }}
      >
        {/* <div className="rounded-full bg-#000">
          <ArrowLeft className="relative top-10" size={32} />
        </div> */}
        <motion.div 
          variants={container}
          initial="hidden"
          animate="visible"
          className="flex"
        >
          {filtersTop.map(({ title }, idx) => (
            <motion.button 
              key={idx}
              variants={item}
              className="my-8 mx-2 text-[#121212] dark:text-[#F9F9F9] min-w-[250px] bg-[#F8F9FC] dark:bg-[#606060] hover:bg-[#14d4f1] dark:hover:bg-[#14d4f1] hover:text-[#5524d9] dark:hover:text-[#5524d9] cursor-pointer"
              onClick={() => title === 'Todos' ? setFilter("") : setFilter(title)}
            >
              <h3 className="font-bold text-sm text-center">
                { title }
              </h3>
            </motion.button>
          ))}
        </motion.div>
        
        {/* <ArrowRight className="relative left-10" size={32} /> */}

      </HorizontalScroll>
    </div>
  )
}

export default FiltersTop;