import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import SpreadsheetBody from "./SpreadsheetBody";
import { toast } from "react-toastify";
import FilterComponent from "@/components/Filters/DropdownMenu";

const Classes = [
  {
    value: "1",
    label: "1",
  },
  {
    value: "2",
    label: "2",
  },
  {
    value: "3",
    label: "3",
  },
  {
    value: "4",
    label: "4",
  },
  {
    value: "5",
    label: "5",
  },
  {
    value: "6",
    label: "6",
  },
  {
    value: "7",
    label: "7",
  },
  {
    value: "8",
    label: "8",
  },
  {
    value: "9",
    label: "9",
  },
  {
    value: "10",
    label: "10",
  },
];

const Centres = [
  { label: "C1", value: "C1" },
  { label: "C2", value: "C2" },
  { label: "C3", value: "C3" },
  { label: "C5", value: "C5" },
  { label: "Anganwadi", value: "Anganwadi" },
];

const SponsorshipStatus = [
  { label: "Yes", value: "yes" },
  { label: "No", value: "no" },
];

const Schools = [
  { label: "Education Academy", value: "Education Academy" },
  { label: "Vidiya Public School", value: "Vidiya Public School" },
  { label: "Vidya Bharti", value: "Vidya Bharti" },
  { label: "Lucious Public School", value: "Lucious Public School" },
  { label: "Tagore Academy", value: "Tagore Academy" },
  { label: "Saraswati Vidya Niketan", value: "Saraswati Vidya Niketan" },
  { label: "Dhanbad Vikas Vidyalaya", value: "Dhanbad Vikas Vidyalaya" },
  { label: "NIOS", value: "NIOS" },
  { label: "ISL Jhariya", value: "ISL Jhariya" },
  { label: "Dhanbad Public School", value: "Dhanbad Public School" },
  { label: "Physics Wallah", value: "Physics Wallah" },
  { label: "Akash", value: "Akash" },
  { label: "Ram Krishna Public School", value: "Ram Krishna Public School" },
];

const ActiveStatus = [
  { label: "Active", value: "Active" },
  { label: "Inactive", value: "Inactive" },
  { label: "Suspended", value: "Suspended" },
];

const StudentSpreadsheet = () => {
  const [students, setStudents] = useState(null);
  const [filteredData, setFilteredData] = useState(students);
  const [loading, setLoading] = useState(true);

  const [filters, setFilters] = useState({
    centre: [],
    class: [],
    sponsorshipStatus: [],
    activeStatus: [],
    school: [],
  });

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

  useEffect(() => {
    const sdfs = filterData();
    console.log(sdfs, "filterdata in parent");
    setFilteredData(sdfs);
  }, [filters]);

  const filterData = () => {
    return students?.filter((student) => {
      for (const filterKey in filters) {
        const activeFilterValues = filters[filterKey].map((item) => item.value);

        if (activeFilterValues.length === 0) continue;

        if (!activeFilterValues.includes(student[filterKey])) {
          return false;
        }
      }
      return true;
    });
  };

  const handleFilterChange = (name, queries) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: queries,
    }));
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="flex select-none overflow-hidden relative">
      <div className="w-[21%] h-screen flex flex-col gap-10 sticky top-0 overflow-y-auto pl-[10px] pr-[10px] border-r border-r-[#DDE4EB]">
        <div className="logo w-full">
          <img src="/logos.png" alt="logos" className="object-contain h-4/5" />
        </div>
        <div className="filters flex flex-col items-center gap-5">
          <div className="text-3xl font-semibold text-center">Filters</div>

          <FilterComponent
            filterLable={"Class"}
            filterName="class"
            filterOptions={Classes}
            handleFilterChange={handleFilterChange}
          />

          <FilterComponent
            filterLable={"Centre"}
            filterName="centre"
            filterOptions={Centres}
            handleFilterChange={handleFilterChange}
          />

          <FilterComponent
            filterLable={"Sponsorship Status"}
            filterName="sponsorshipStatus"
            filterOptions={SponsorshipStatus}
            handleFilterChange={handleFilterChange}
          />

          <FilterComponent
            filterLable={"School"}
            filterName="school"
            filterOptions={Schools}
            handleFilterChange={handleFilterChange}
          />

          <FilterComponent
            filterLable={"Active Status"}
            filterName="activeStatus"
            filterOptions={ActiveStatus}
            handleFilterChange={handleFilterChange}
          />
          {/* 
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="flex flex-col gap-5 pt-10">
              <Button type="submit"> Apply Filters</Button>
              <Button variant="secondary">Clear Filters</Button>
            </div>
          </form> */}
        </div>
      </div>
      <div className="hero w-[80%] h-screen overflow-y-auto">
        <SpreadsheetBody studentData={filteredData} />
      </div>
    </div>
  );
};

export default StudentSpreadsheet;
