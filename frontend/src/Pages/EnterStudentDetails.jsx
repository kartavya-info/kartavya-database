import React, { useState } from 'react';
import HeaderForEnputStudentDetails from '../components/HeaderForEnputStudentDetails';
import EnterStudentDetails1 from './EnterStudentDetails1';
import EnterStudentDetails2 from './EnterStudentDetails2';

const EnterStudentDetails = () => {
  const [isFirstPage, setIsFirstPage] = useState(true);

  const handleClick = () => {
    setIsFirstPage((prev) => !prev);
  };

  return (
    <div className="w-screen">
      <HeaderForEnputStudentDetails />

      <div className="flex flex-col w-full xl:flex-row xl:h-[calc(100vh-7rem)]">
        <div className="flex justify-center items-center w-full h-[500px] xl:w-2/5 xl:h-full">
          <img
            src="/girl_photo.png"
            alt="girl_photo"
            className="object-contain h-4/5"
          />
        </div>

        <div className="w-full h-[500px] xl:w-3/5 xl:h-full">
          {isFirstPage ? <EnterStudentDetails1 /> : <EnterStudentDetails2 />}
        </div>
      </div>

      {/* <button
        onClick={() => {
          handleClick();
        }}
      >
        {isFirstPage ? 'Next' : 'Back'}{' '}
      </button> */}
    </div>
  );
};

export default EnterStudentDetails;
