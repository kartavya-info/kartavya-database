import React from 'react';

const EnterStudentDetails2 = ({ handleClick }) => {
  return (
    <div>
      <h2>This is EnterStudentDetails2 </h2>
      <button
        onClick={handleClick}
        className="w-[150px] p-2 rounded-lg bg-[#21526E] text-white"
      >
        Back
      </button>
    </div>
  );
};

export default EnterStudentDetails2;
