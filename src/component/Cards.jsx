import React from 'react';
import { Link } from 'react-router-dom';
import cardsData from './cardsData';

function Cards() {
  return (
    <div>
      <ul className='p-4 sm:p-8 md:p-12 lg:p-16 xl:p-24 flex flex-wrap items-center justify-center'>
        {cardsData.map((card, id) => (
          <li key={card.id} className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-3'>
            <div className='bg-white border p-4 m-2 shadow-lg rounded-lg'>
              <div className='flex items-center justify-center'>
                <img src={card.image} alt={card.name} className='max-w-l w-[200px] h-48 object-cover mb-4 shadow-lg' />
              </div>
              <div className='flex justify-center items-center flex-col '>
                <h3 className='text-lg font-semibold mb-2'>{card.name}</h3>
                <p className='text-sm text-gray-700 mb-2'>{card.description}</p>
                <Link to={card.link} className='text-blue-500 border p-2 rounded-md px-7 hover:bg-teal-300 hover:text-white'>Link</Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cards;
