import { TableFooter } from "@/components/ui/table";
import { TableCell } from "@/components/ui/table";
import { TableBody } from "@/components/ui/table";
import { TableHead } from "@/components/ui/table";
import { TableRow } from "@/components/ui/table";
import { TableHeader } from "@/components/ui/table";
import { Table } from "@/components/ui/table";
import { Link } from "react-router-dom";

const sponsorDonations = [
  {
    user: "adfsdfsdfsdssdfsdfsd", // userId
    name: "Divyash Gupta",
    donations: [
      {
        donationId: "dfsdfsdfsdfsdffs",
        date: new Date("2024-02-20T10:30:00Z"), // MongoDB date format
        numChild: 3,
      },
      {
        donationId: "aabbccddeeffgghh",
        date: new Date("2024-01-15T14:45:00Z"),
        numChild: 2,
      },
      {
        donationId: "zzxxccvvbbnnmm",
        date: new Date("2023-12-10T09:00:00Z"),
        numChild: 5,
      },
    ],
  },
  {
    user: "ghijklmnoqrstuvwxyz", // userId
    name: "Ananya Sharma",
    donations: [
      {
        donationId: "123456789abcdef",
        date: new Date("2024-02-01T12:00:00Z"),
        numChild: 4,
      },
      {
        donationId: "abcdef123456789",
        date: new Date("2023-11-25T16:20:00Z"),
        numChild: 6,
      },
    ],
  },
  {
    user: "pqrs9876543210xyz", // userId
    name: "Rahul Verma",
    donations: [
      {
        donationId: "qwertyuiopasdfgh",
        date: new Date("2024-01-10T08:15:00Z"),
        numChild: 1,
      },
      {
        donationId: "zxcvbnmlkjhgfdsa",
        date: new Date("2023-10-05T18:30:00Z"),
        numChild: 3,
      },
    ],
  },
];

export default function VerifiedDonations() {
  return (
    <div className="flex flex-col items-center space-y-8">
      {sponsorDonations.map((sponsor, index1) => (
        <div
          key={sponsor.user}
          className="w-[80%] border rounded-lg overflow-hidden"
        >
          <div className="bg-muted p-4 font-medium text-lg">{sponsor.name}</div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="pl-4">Date</TableHead>
                <TableHead>No of Children</TableHead>
                <TableHead className="text-end pr-4">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sponsor.donations.map((donation, index2) => (
                <TableRow key={donation.donationId}>
                  <TableCell className="pl-4">
                    {new Date(donation.date).toLocaleDateString("en-GB")}
                  </TableCell>
                  <TableCell>{donation.numChild}</TableCell>
                  <TableCell className="text-end pr-4">
                    {index1 === 0 && index2 == 0 && (
                      <Link to={`/allotment/action`}>
                        <button className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded text-sm transition-colors">
                          Allot Child
                        </button>
                      </Link>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      ))}
    </div>
  );
}
