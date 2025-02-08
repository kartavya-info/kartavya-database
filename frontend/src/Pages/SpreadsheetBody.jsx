import React, { useEffect, useMemo, useState } from "react";
import StudentTable from "./StudentTable";
import { Input } from "@/components/ui/input";

const SpreadsheetBody = ({ studentData }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [students, setStudents] = useState(studentData);
  const [studentsSearchedByName, setStudentsSearchedByName] =
    useState(students);

  useEffect(() => {
    setStudentsSearchedByName(studentData);
  }, [studentData]);

  useEffect(() => {
    setStudentsSearchedByName(
      studentData?.filter((student) =>
        student.studentName.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery, studentData]);

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="relative flex flex-col justify-center items-center gap-10">
      <div className="w-full h-auto sticky top-0 border-b bg-white z-[100]">
        <div className="heading w-full text-3xl font-bold text-center py-5">
          Student Details Spreadsheet
        </div>
        <div className="px-10 py-5">
          <Input
            type="text"
            placeholder="Search for student with name"
            value={searchQuery}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="w-full flex justify-center items-center">
        <StudentTable filteredStudents={studentsSearchedByName} />
      </div>
    </div>
  );
};

export default SpreadsheetBody;
