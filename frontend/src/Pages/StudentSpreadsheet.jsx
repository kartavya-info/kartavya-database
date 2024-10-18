import DropdownForClassSelection from '@/components/Filters/ClassSelectionDropdown';
import DropdownForCenterSelection from '@/components/Filters/CenterSelectionDropdown';
import DropdownForSponsorshipSelection from '@/components/Filters/SponsershipStatusDropdown';
import DropdownForActiveStatusSelection from '@/components/Filters/ActiveStatusDropdown ';
import DropdownForSchoolSelection from '@/components/Filters/SchoolDropdown';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import SpreadsheetBody from './SpreadsheetBody';

const StudentSpreadsheet = () => {
  const [filters, setFilters] = useState({
    name: '',
    center: [],
    className: [],
    sponsorshipStatus: [],
    activeStatus: [],
    school: [],
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      if (checked) {
        setFilters((prevFilters) => ({
          ...prevFilters,
          [name]: [...prevFilters[name], value],
        }));
      } else {
        setFilters((prevFilters) => ({
          ...prevFilters,
          [name]: prevFilters[name].filter((c) => c !== value),
        }));
      }
    } else {
      setFilters({ ...filters, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(filters);
    // fetchStudents();
  };

  return (
    <div className="flex select-none">
      <div className="flex flex-col gap-10 sidebar w-[21%] h-screen pl-[10px] pr-[10px] border-r border-r-[#DDE4EB]">
        <div className="logo w-full">
          <img src="/logos.png" alt="logos" className="object-contain h-4/5" />
        </div>
        <div className="filters flex flex-col gap-10 p-[25px] border border[#DDE4EB] rounded-lg">
          <div className="text-3xl font-semibold text-center">Filters</div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <DropdownForClassSelection
              handleChange={handleChange}
              selectedClasses={filters.className}
            />

            <DropdownForCenterSelection
              handleChange={handleChange}
              selectedCenters={filters.center}
            />

            <DropdownForSponsorshipSelection
              handleChange={handleChange}
              selectedStatus={filters.sponsorshipStatus}
            />

            <DropdownForActiveStatusSelection
              handleChange={handleChange}
              selectedStatus={filters.activeStatus}
            />

            <DropdownForSchoolSelection
              handleChange={handleChange}
              selectedSchools={filters.school}
            />

            <div className="flex flex-col gap-5 pt-10">
              <Button type="submit"> Apply Filters</Button>
              <Button variant="secondary">Clear Filters</Button>
            </div>
          </form>
        </div>
      </div>
      <div className="hero w-[80%] h-screen ">
        <SpreadsheetBody />
      </div>
    </div>
  );
};

export default StudentSpreadsheet;
