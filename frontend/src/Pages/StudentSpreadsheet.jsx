import React, { useEffect, useState } from "react";
import SpreadsheetBody from "./SpreadsheetBody";
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

const Centers = [
  { label: "C1", value: "c1" },
  { label: "C2", value: "c2" },
  { label: "C3", value: "c3" },
  { label: "C5", value: "c5" },
  { label: "Anganwadi", value: "anganwadi" },
];

const SponsorshipStatus = [
  { label: "Yes", value: "yes" },
  { label: "No", value: "no" },
];

const Schools = [
  { label: "Education Academy", value: "education academy" },
  { label: "Vidiya Public School", value: "vidiya public school" },
  { label: "Vidya Bharti", value: "vidya bharti" },
  { label: "Lucious Public School", value: "lucious public school" },
  { label: "Tagore Academy", value: "tagore academy" },
  { label: "Saraswati Vidya Niketan", value: "saraswati vidya niketan" },
  { label: "Dhanbad Vikas Vidyalaya", value: "dhanbad vikas vidyalaya" },
  { label: "NIOS", value: "nios" },
  { label: "ISL Jhariya", value: "isl jhariya" },
  { label: "Dhanbad Public School", value: "dhanbad public school" },
  { label: "Physics Wallah", value: "physics wallah" },
  { label: "Akash", value: "akash" },
  { label: "Ram Krishna Public School", value: "ram krishna public school" },
];

const ActiveStatus = [
  { label: "Active", value: "active" },
  { label: "Inactive", value: "inactive" },
  { label: "Suspended", value: "suspended" },
];

const data = [
  {
    id: 1,
    name: "amit",
    center: "c1",
    class: "8",
    sponsorshipStatus: "yes",
    activeStatus: "active",
    school: "School X",
  },
  {
    id: 2,
    name: "ajay",
    center: "c2",
    class: "7",
    sponsorshipStatus: "no",
    activeStatus: "inactive",
    school: "School Y",
  },
  {
    id: 3,
    name: "aman",
    center: "c2",
    class: "9",
    sponsorshipStatus: "no",
    activeStatus: "inactive",
    school: "School Y",
  },
  {
    id: 4,
    name: "ayush",
    center: "c5",
    class: "5",
    sponsorshipStatus: "yes",
    activeStatus: "suspended",
    school: "School Y",
  },
];

const StudentSpreadsheet = () => {
  const [filters, setFilters] = useState({
    center: [],
    class: [],
    sponsorshipStatus: [],
    activeStatus: [],
    school: [],
  });
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    const sdfs = filterData();
    console.log(sdfs, "filterdata in parent");
    setFilteredData(sdfs);
  }, [filters]);

  const filterData = () => {
    return data.filter((student) => {
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
            filterLable={"Center"}
            filterName="center"
            filterOptions={Centers}
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
