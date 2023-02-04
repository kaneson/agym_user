import React from "react";

interface FilterTopProps {
  setFilter: (title: string) => void;
}

const FiltersTop: React.FC<FilterTopProps> = ({ setFilter }) => {
  const filtersTop = [
    { title: 'Todos' },
    { title: 'Javascript' },
    { title: 'Fitness' },
    { title: 'Music' },
    { title: 'Html' },
    { title: 'Css' },
    { title: 'Typescript' },
    { title: 'Universal Code' },
    { title: 'Sanity' },
    { title: 'FullStack' },
    { title: 'React' },
    { title: 'Next' },
    { title: 'Mobigap' },
  ];

  return (
    <div className="flex-1 bg-gray-200 text-sm flex flex-wrap justify-between border border-r-0 border-l-0 border-t-[0.4px] border-b-[1px] border-gray-300 py-4 px-6">
    {filtersTop.map(({ title }, idx) => (
      <button 
        key={idx}
        onClick={() => title === 'Todos' ? setFilter("") : setFilter(title)}
      >
        <h3 className="bg-gray-300 color-[#121212] hover:bg-gray-400 cursor-pointer rounded-full text-center px-3 py-1 my-1 mx-1">
          { title }
        </h3>
      </button>
    ))}
    </div>
  )
}

export default FiltersTop;