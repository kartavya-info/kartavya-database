import React, { useEffect, useMemo, useState } from "react";
import StudentTable from "./StudentTable";
import { Input } from "@/components/ui/input";
import { toast } from "react-toastify";

const SpreadsheetBody = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await fetch("http://localhost:3500/students/", {
          method: "GET",
          credentials: "include",
        });
        const data = await response.json();
        setStudents(data);

        // function to simulate an artificial delay
        // const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
        // await delay(3000);

        setLoading(false);
      } catch (error) {
        setLoading(false);
        toast.error("Error fetching students");
        console.error("Error fetching students:", error);
      }
    };

    fetchStudents();
  }, []);

  const filteredStudents = useMemo(() => {
    return students?.filter((student) =>
      student?.studentName?.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [students, searchQuery]);

  return (
    <div className="flex flex-col justify-center items-center gap-10">
      <h1 className="text-3xl font-bold text-center pt-5 pb-5 border-b w-full">
        Student Details Spreadsheet
      </h1>
      <div className="flex flex-col gap-10 w-full px-10">
        <Input
          type="text"
          placeholder="Search for student by name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <div className="max-h-[600px] min-h-[400px] overflow-y-auto">
          {loading ? (
            <div className="flex justify-center items-center text-4xl font-semibold">
              Loading...
            </div>
          ) : (
            <StudentTable filteredStudents={filteredStudents} />
          )}
        </div>
      </div>
    </div>
  );
};

export default SpreadsheetBody;
