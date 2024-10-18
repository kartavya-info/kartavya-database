import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const SchoolDropdown = ({ handleChange, selectedSchools }) => {
  const schoolOptions = ['School A', 'School B', 'School C', 'School D'];
  const [selectAllSchools, setSelectAllSchools] = useState(false);

  useEffect(() => {
    if (selectedSchools.length === schoolOptions.length) {
      setSelectAllSchools(true);
    } else {
      setSelectAllSchools(false);
    }
  }, [selectedSchools]);

  const handleSelectAllSchools = (checked) => {
    setSelectAllSchools(checked);
    schoolOptions.forEach((option) => {
      handleChange({ target: { type: 'checkbox', name: 'school', value: option, checked } });
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Schools</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuCheckboxItem
          checked={selectAllSchools}
          onCheckedChange={handleSelectAllSchools}
        >
          Select all schools
        </DropdownMenuCheckboxItem>
        <DropdownMenuSeparator />
        {schoolOptions.map((option) => (
          <DropdownMenuCheckboxItem
            key={option}
            checked={selectedSchools.includes(option)}
            onCheckedChange={(checked) =>
              handleChange({ target: { type: 'checkbox', name: 'school', value: option, checked } })
            }
          >
            {option}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SchoolDropdown;
