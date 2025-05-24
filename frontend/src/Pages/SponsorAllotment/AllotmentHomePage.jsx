import React from "react";
import VerifiedDonations from "./VerifiedDonations";

const AllotmentHomePage = () => {
  return (
    <div>
      <div className="header text-3xl font-semibold text-center my-16">
        Child Sponsor Allotment Page
      </div>
      <div className="tables mx-10">
        <VerifiedDonations />
      </div>
    </div>
  );
};

export default AllotmentHomePage;
