import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Link } from "react-router-dom";

const StudentTable = ({ filteredStudents }) => {
  return (
    <Table className="w-[95%] relative">
      <TableHeader className="w-full">
        <TableRow className="w-full">
          <TableHead className="text-black pl-2">Name </TableHead>
          <TableHead className="text-black">Class</TableHead>
          <TableHead className="text-black">Center</TableHead>
          <TableHead className="text-black">Active Status</TableHead>
          <TableHead className="text-black">School</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {filteredStudents?.map((student) => (
          <TableRow key={student._id} className="w-full hover:bg-gray-100">
            <TableCell>
              <Link
                to={`/admin/${encodeURIComponent(student.rollNumber)}`}
                className="flex items-center h-full pl-2"
              >
                <div className="font-medium">{student.studentName}</div>
              </Link>
            </TableCell>
            <TableCell>
              <Link
                to={`/admin/${encodeURIComponent(student.rollNumber)}`}
                className="flex items-center h-full"
              >
                {student.class}
              </Link>
            </TableCell>
            <TableCell>
              <Link
                to={`/admin/${encodeURIComponent(student.rollNumber)}`}
                className="flex items-center h-full"
              >
                {student.centre}
              </Link>
            </TableCell>
            <TableCell>
              <Link
                to={`/admin/${encodeURIComponent(student.rollNumber)}`}
                className={`flex items-center h-full font-semibold ${
                  student.activeStatus ? "text-green-600" : "text-red-600"
                }`}
              >
                {student.activeStatus ? "Active" : "Inactive"}
              </Link>
            </TableCell>
            <TableCell>
              <Link
                to={`/admin/${encodeURIComponent(student.rollNumber)}`}
                className="flex items-center h-full"
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
