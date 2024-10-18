import React, { useEffect, useMemo, useState } from 'react';
import StudentTable from './StudentTable';
import { Input } from '@/components/ui/input';

const students = [
  { id: '1', name: 'Amit Bhagat', class: '8', center: 'C2', activeStatus: 'Active', school: 'Abhinav Vidya Vihar High School' },
  { id: '2', name: 'Vishal Bende', class: '8', center: 'C2', activeStatus: 'Active', school: 'Abhinav Vidya Vihar High School' },
  { id: '3', name: 'Vaibhav Lalpotu', class: '8', center: 'C2', activeStatus: 'Active', school: 'Abhinav Vidya Vihar High School' },
  { id: '4', name: 'Vedant Mahajan', class: '8', center: 'C2', activeStatus: 'Active', school: 'Abhinav Vidya Vihar High School' },
  { id: '5', name: 'Bob', class: '8', center: 'C2', activeStatus: 'Active', school: 'Abhinav Vidya Vihar High School' },
 ];


const SpreadsheetBody = () => {

  const [searchQuery, setSearchQuery] = useState('');

  const filteredStudents = useMemo(() => {
    return students.filter((student) => student.name.toLowerCase().includes(searchQuery.toLowerCase()));
  }, [students,searchQuery]);

  const handleInputChange = e => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="flex flex-col justify-center items-center gap-10">
      <div className="heading text-3xl font-bold text-center pt-5 pb-5 border-b w-full">
        Student Details Spreadsheet
      </div>
      <div className="flex flex-col gap-10 w-full pl-10 pr-10">
        <div>
          <Input
            type="text"
            placeholder="Search for student with name"
            value={searchQuery}
            onChange={handleInputChange}
          />
        </div>
        <div className="max-h-[600px] overflow-y-auto">
          <StudentTable filteredStudents={filteredStudents} />
        </div>
      </div>
    </div>
  );
};

export default SpreadsheetBody;
