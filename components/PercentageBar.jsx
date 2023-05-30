import React from 'react'

const PercentageBar = () => {
  return (
    <>
        <div className="bg-lightGrey w-full h-8">
          <div className='bg-accentGreen w-2/3 h-8'/>
        </div>
        <p className='text-white text-right pt-1'>66% done</p>
    </>
  );
}

export default PercentageBar