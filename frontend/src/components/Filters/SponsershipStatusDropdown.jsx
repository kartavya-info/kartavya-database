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

const SponsorshipStatusDropdown = ({ handleChange, selectedStatus }) => {
  const sponsorshipOptions = ['Yes', 'No'];
  const [selectBoth, setSelectBoth] = useState(false);

  useEffect(() => {
    if (selectedStatus.length ===sponsorshipOptions.length) {
      setSelectBoth(true);
    } else {
      setSelectBoth(false);
    }
  }, [selectedStatus]);

  const handleSelectBoth = (checked) => {
    setSelectBoth(checked);
    sponsorshipOptions.forEach((option) => {
      handleChange({ target: { type: 'checkbox', name: 'sponsorshipStatus', value: option, checked } });
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Sponsorship Status</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        {/* Select Both Option */}
        <DropdownMenuCheckboxItem
          checked={selectBoth}
          onCheckedChange={handleSelectBoth}
        >
          Select Both
        </DropdownMenuCheckboxItem>
        <DropdownMenuSeparator />
        {/* Individual Yes/No Checkboxes */}
        {sponsorshipOptions.map((option) => (
          <DropdownMenuCheckboxItem
            key={option}
            checked={selectedStatus.includes(option)}
            onCheckedChange={(checked) =>
              handleChange({ target: { type: 'checkbox', name: 'sponsorshipStatus', value: option, checked } })
            }
          >
            {option}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SponsorshipStatusDropdown;
