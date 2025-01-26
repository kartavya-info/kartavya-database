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
        {filteredStudents.map((student) => (
          <TableRow key={student.id} className="hover:bg-gray-100">
            <TableCell>
              <Link
                to={`/admin/${student.id}`}
                className="flex items-center w-full h-full pl-2"
              >
                <div className="font-medium">{student.name}</div>
              </Link>
            </TableCell>
            <TableCell>
              <Link
                to={`/admin/${student.id}`}
                className="flex items-center w-full h-full"
              >
                {student.class}
              </Link>
            </TableCell>
            <TableCell>
              <Link
                to={`/admin/${student.id}`}
                className="flex items-center w-full h-full"
              >
                {student.center}
              </Link>
            </TableCell>
            <TableCell>
              <Link
                to={`/admin/${student.id}`}
                className={`flex items-center w-full h-full`}
              >
                {student.activeStatus === "active" && (
                  <span className="text-green-500">{student.activeStatus}</span>
                )}
                {student.activeStatus === "inactive" && (
                  <span className="text-yellow-400">
                    {student.activeStatus}
                  </span>
                )}
                {student.activeStatus === "suspended" && (
                  <span className="text-red-500">{student.activeStatus}</span>
                )}
              </Link>
            </TableCell>
            <TableCell>
              <Link
                to={`/admin/${student.id}`}
                className="flex items-center w-full h-full"
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
