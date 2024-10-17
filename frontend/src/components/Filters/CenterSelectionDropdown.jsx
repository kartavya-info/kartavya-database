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


const DropdownMenuCenters = ({ handleChange, selectedCenters }) => {
  const centers = ['C1', 'C2', 'C3', 'C5', 'Anganwadi'];
  const [selectAllCenters, setSelectAllCenters] = useState(false);

  const handleSelectAllCenters = (checked) => {
    setSelectAllCenters(checked);
    centers.forEach((center) => {
      handleChange({ target: { type: 'checkbox', name: 'center', value: center, checked } });
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Center</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        {/* Select All Option for Centers */}
        <DropdownMenuCheckboxItem
          checked={selectAllCenters}
          onCheckedChange={handleSelectAllCenters}
        >
          Select All Centers
        </DropdownMenuCheckboxItem>
        <DropdownMenuSeparator />
        {/* Individual Center Checkboxes */}
        {centers.map((center) => (
          <DropdownMenuCheckboxItem
            key={center}
            checked={selectedCenters.includes(center)}
            onCheckedChange={(checked) =>
              handleChange({ target: { type: 'checkbox', name: 'center', value: center, checked } })
            }
          >
            {center}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropdownMenuCenters;
