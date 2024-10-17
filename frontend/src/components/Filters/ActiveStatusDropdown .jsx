import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const ActiveStatusDropdown = ({ handleChange, selectedStatus }) => {
  const statusOptions = ['Active', 'Inactive', 'Suspended'];
  const [selectAllStatus, setSelectAllStatus] = useState(false);

  const handleSelectAllStatus = (checked) => {
    setSelectAllStatus(checked);
    statusOptions.forEach((option) => {
      handleChange({ target: { type: 'checkbox', name: 'activeStatus', value: option, checked } });
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Active Status</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuCheckboxItem
          checked={selectAllStatus}
          onCheckedChange={handleSelectAllStatus}
        >
          Select All
        </DropdownMenuCheckboxItem>
        <DropdownMenuSeparator />
        {statusOptions.map((option) => (
          <DropdownMenuCheckboxItem
            key={option}
            checked={selectedStatus.includes(option)}
            onCheckedChange={(checked) =>
              handleChange({ target: { type: 'checkbox', name: 'activeStatus', value: option, checked } })
            }
          >
            {option}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ActiveStatusDropdown;
