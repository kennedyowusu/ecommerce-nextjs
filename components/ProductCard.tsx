import { productData } from '@/constants/data';
import React from 'react'
import Image from 'next/image'

const ItemList = () => {
  return (
    <div className='py-10'>
      <div className='w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center'>
          <h2 className='text-3xl font-extrabold text-gray-900 sm:text-4xl'>
            Featured Items
          </h2>
          <p className='mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4'>
            Check out some of our featured items.
          </p>
        </div>

        <div className='mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-32'>
          {productData.map(({ id, title, image }) => (
            <div key={id} className='bg-white overflow-hidden shadow rounded-lg'>
              <div className='px-4 py-5 sm:p-6 justify-between flex flex-col'>
                <div className='flex items-center justify-center'>
                  <Image
                    src={image}
                    alt={title}
                    width={400}
                    height={400}
                    className='object-cover'
                  />
                </div>
                <h3 className='text-lg font-medium text-gray-900'>{title}</h3>
                <p className='mt-1 text-sm text-gray-500'>
                  Description of {title.toLowerCase()}.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ItemList
