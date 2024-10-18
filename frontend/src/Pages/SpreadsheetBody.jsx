import React from 'react';
import StudentTable from './StudentTable';

const SpreadsheetBody = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-20">
      <div className="heading text-3xl font-bold text-center pt-5 pb-5 border-b w-full">
        Student Details Spreadsheet
      </div>
      <div className='w-[95%] max-h-[650px] overflow-y-auto'>
        <StudentTable />
      </div>
    </div>
  );
};

export default SpreadsheetBody;
