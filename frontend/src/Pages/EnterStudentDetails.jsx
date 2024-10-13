import React, { useState } from 'react'
import HeaderForEnputStudentDetails from '../components/HeaderForEnputStudentDetails'
import EnterStudentDetails1 from './EnterStudentDetails1';
import EnterStudentDetails2 from './EnterStudentDetails2';



const EnterStudentDetails = () => {

  const [isFirstPage, setIsFirstPage] = useState(true);

  const handleClick = () => {
    setIsFirstPage((prev) => !prev);
  }

  return (
    <div className='w-screen'>
      <HeaderForEnputStudentDetails />

      {isFirstPage ? <EnterStudentDetails1 /> : <EnterStudentDetails2 />}

      <button onClick={() => {handleClick()}}> {isFirstPage? 'Next' : 'Back'} </button>
      
    </div>
  )
}

export default EnterStudentDetails
