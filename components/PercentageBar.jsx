import React from 'react'

const PercentageBar = () => {
  return (
    <>
    <h2 className="text-white text-3xl font-black w-full pt-8 ">
        Welcome back, Ella {/* name of user */}
      </h2>
      <p className="text-lightGrey font-s pb-4">Every Habit Count: What positive rhythms did you set today?</p>
        <div className="bg-lightGrey w-full h-8">
          <div className='bg-accentGreen w-2/3 h-8'/>
        </div>
        <p className='text-white text-right pt-1'>66% done</p>
    </>
  );
}

export default PercentageBar