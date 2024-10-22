import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const StudentTable = ({filteredStudents}) => {

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[300px] text-black">Name </TableHead>
          <TableHead className=" text-black">Class</TableHead>
          <TableHead className=" text-black">Center</TableHead>
          <TableHead className=" text-black">Active Status</TableHead>
          <TableHead className=" text-black">School</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {filteredStudents.map((student) => (
          <TableRow key={student.id} className="hover:bg-gray-100">
            <TableCell>
              <Link
                to={`/student/${student.id}`}
                className="block w-full h-full"
              >
                <div className="font-medium">{student.name}</div>
              </Link>
            </TableCell>
            <TableCell>
              <Link
                to={`/student/${student.id}`}
                className="block w-full h-full"
              >
                {student.class}
              </Link>
            </TableCell>
            <TableCell>
              <Link
                to={`/student/${student.id}`}
                className="block w-full h-full"
              >
                {student.center}
              </Link>
            </TableCell>
            <TableCell>
              <Link
                to={`/student/${student.id}`}
                className="block w-full h-full"
              >
                {student.activeStatus}
              </Link>
            </TableCell>
            <TableCell>
              <Link
                to={`/student/${student.id}`}
                className="block w-full h-full"
              >
                {student.school}
              </Link>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default StudentTable;
