import React, { useEffect, useMemo, useState } from "react";
import StudentTable from "./StudentTable";
import { Input } from "@/components/ui/input";

const students = [
  {
    id: "1",
    name: "Amit Bhagat",
    class: "8",
    center: "C2",
    activeStatus: "Active",
    school: "Abhinav Vidya Vihar High School",
  },
  {
    id: "2",
    name: "Vishal Bende",
    class: "8",
    center: "C2",
    activeStatus: "Active",
    school: "Abhinav Vidya Vihar High School",
  },
  {
    id: "3",
    name: "Vaibhav Lalpotu",
    class: "8",
    center: "C2",
    activeStatus: "Active",
    school: "Abhinav Vidya Vihar High School",
  },
  {
    id: "4",
    name: "Vedant Mahajan",
    class: "8",
    center: "C2",
    activeStatus: "Active",
    school: "Abhinav Vidya Vihar High School",
  },
  {
    id: "5",
    name: "Bob",
    class: "8",
    center: "C2",
    activeStatus: "Active",
    school: "Abhinav Vidya Vihar High School",
  },
  {
    id: "5",
    name: "Bob",
    class: "8",
    center: "C2",
    activeStatus: "Active",
    school: "Abhinav Vidya Vihar High School",
  },
  {
    id: "5",
    name: "Bob",
    class: "8",
    center: "C2",
    activeStatus: "Active",
    school: "Abhinav Vidya Vihar High School",
  },
  {
    id: "5",
    name: "Bob",
    class: "8",
    center: "C2",
    activeStatus: "Active",
    school: "Abhinav Vidya Vihar High School",
  },
  {
    id: "5",
    name: "Bob",
    class: "8",
    center: "C2",
    activeStatus: "Active",
    school: "Abhinav Vidya Vihar High School",
  },
  {
    id: "5",
    name: "Bob",
    class: "8",
    center: "C2",
    activeStatus: "Active",
    school: "Abhinav Vidya Vihar High School",
  },
  {
    id: "5",
    name: "Bob",
    class: "8",
    center: "C2",
    activeStatus: "Active",
    school: "Abhinav Vidya Vihar High School",
  },
  {
    id: "5",
    name: "Bob",
    class: "8",
    center: "C2",
    activeStatus: "Active",
    school: "Abhinav Vidya Vihar High School",
  },
  {
    id: "5",
    name: "Bob",
    class: "8",
    center: "C2",
    activeStatus: "Active",
    school: "Abhinav Vidya Vihar High School",
  },
  {
    id: "5",
    name: "Bob",
    class: "8",
    center: "C2",
    activeStatus: "Active",
    school: "Abhinav Vidya Vihar High School",
  },
  {
    id: "5",
    name: "Bob",
    class: "8",
    center: "C2",
    activeStatus: "Active",
    school: "Abhinav Vidya Vihar High School",
  },
  {
    id: "5",
    name: "Bob",
    class: "8",
    center: "C2",
    activeStatus: "Active",
    school: "Abhinav Vidya Vihar High School",
  },
  {
    id: "5",
    name: "Bob",
    class: "8",
    center: "C2",
    activeStatus: "Active",
    school: "Abhinav Vidya Vihar High School",
  },
  {
    id: "5",
    name: "Bob",
    class: "8",
    center: "C2",
    activeStatus: "Active",
    school: "Abhinav Vidya Vihar High School",
  },
  {
    id: "5",
    name: "Bob",
    class: "8",
    center: "C2",
    activeStatus: "Active",
    school: "Abhinav Vidya Vihar High School",
  },
];

const SpreadsheetBody = ({ studentData }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [studentsSearchedByName, setStudentsSearchedByName] =
    useState(studentData);

  useEffect(() => {
    console.log(studentData, "updatedStudentData in children");
    setStudentsSearchedByName(studentData);
  }, [studentData]);

  useEffect(() => {
    setStudentsSearchedByName(
      studentData.filter((student) =>
        student.name.toLowerCase().includes(searchQuery.toLowerCase())
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
