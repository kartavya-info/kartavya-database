import { useState } from 'react'; // Import useState for managing local state
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Pencil1Icon } from '@radix-ui/react-icons';

const DialogForResultEdit = ({ studentData, setStudentData }) => {
  const [academicYear, setAcademicYear] = useState('');
  const [midTerm, setMidTerm] = useState('');
  const [endTerm, setEndTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleResultEdit = () => {
    if (midTerm === '') setMidTerm(0);
    if (endTerm === '') setEndTerm(0);

    const updatedResult = {
      ...studentData.results,
      [academicYear]: {
        midTerm: midTerm,
        endTerm: endTerm,
      },
    };

    const updatedStudentData = {
      ...studentData,
      results: updatedResult,
    };

    setStudentData(updatedStudentData);
    setMidTerm('');
    setEndTerm('');
    setIsOpen(false);
  };

  const handleAcademicYearChange = (value) => {
    setAcademicYear(value);
    console.log(value, studentData.results[value]);
    setMidTerm(studentData.results[value].midTerm);
    setEndTerm(studentData.results[value].endTerm);
  };

  const handleMidTermChange = (event) => {
    if (event.target.value > 100) {
      return;
    }
    setMidTerm(event.target.value);
  };

  const handleEndTermChange = (event) => {
    if (event.target.value > 100) {
      return;
    }
    setEndTerm(event.target.value);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="bg-[#21526E] text-white">
          <Pencil1Icon /> <span className="ml-2"> Edit Result</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Result</DialogTitle>
          <DialogDescription>
            Make changes to result here. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-[2fr_2fr] items-center gap-4">
            <Label htmlFor="academicYear" className="">
              Academic Year
            </Label>
            <Select
              className="col-span-3 w-full"
              onValueChange={handleAcademicYearChange}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select academic year" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Academic Year</SelectLabel>
                  <SelectItem value="2024-25">2024-25</SelectItem>
                  <SelectItem value="2023-24">2023-24</SelectItem>
                  <SelectItem value="2022-23">2022-23</SelectItem>
                  <SelectItem value="2021-22">2021-22</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="midTerm" className=" col-span-2">
              Mid Term Marks (in %)
            </Label>
            <Input
              id="midTerm"
              className="col-span-2 w-full"
              value={midTerm}
              onChange={handleMidTermChange}
            />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="endTerm" className="col-span-2">
              End Term Marks (in %)
            </Label>
            <Input
              id="endTerm"
              className="col-span-2 w-full"
              value={endTerm}
              onChange={handleEndTermChange}
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={handleResultEdit}>
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DialogForResultEdit;
