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

const DropdownMenuCheckboxes = ({ handleChange, selectedClasses }) => {
  const classList = Array.from({ length: 12 }, (_, i) => (i + 1).toString());
  const [selectAll, setSelectAll] = useState(false);

  const handleSelectAll = (checked) => {
    setSelectAll(checked);
    // If checked is true, select all classes; otherwise, deselect all
    classList.forEach((classNum) => {
      handleChange({ target: { type: 'checkbox', name: 'className', value: classNum, checked } });
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Class</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        {/* Select All Option */}
        <DropdownMenuCheckboxItem
          checked={selectAll}
          onCheckedChange={handleSelectAll}
        >
          Select All
        </DropdownMenuCheckboxItem>
        <DropdownMenuSeparator />
        {/* Individual Class Checkboxes */}
        {classList.map((classNum) => (
          <DropdownMenuCheckboxItem
            key={classNum}
            checked={selectedClasses.includes(classNum)}
            onCheckedChange={(checked) =>
              handleChange({ target: { type: 'checkbox', name: 'className', value: classNum, checked } })
            }
          >
            {classNum}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropdownMenuCheckboxes;
