import InputComponent from '@/components/InputComponent';
import SelectComponent from '@/components/SelectComponent';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import React, { useState } from 'react';
import StudentProgressGraph from './StudentProgressGraph';
import AttendanceMonitoringGraph from './AttendenceMonitoringGraph';

const studentDataFromBackend = {
  id: '1',
  name: 'Mahi Kumari',
  gender: 'Female',
  session: '2024-25',
  dob: '2014-06-06',
  class: '4',
  center: 'C2',
  fatherName: 'FatherName',
  fatherOccupation: 'FatherOccupation',
  motherName: 'MotherName',
  motherOccupation: 'MotherOccupation',
  address: 'Dhanbad',
  familyIncome: 120000,
  aadhar: true,
  domicile: true,
  birthCertificate: true,
  disability: false,
  singleParent: true,
  releventCertificate: true,
  isSponsored: true,
  annualFees: 0,
  payTotalFees: true,
  feesWePay: 0,
  sponserId: 1,
  sponserName: 'XYZ',
  amountBySponsor: 10000,
  results: {
    '2022-23': {
      midTerm: '60%',
      endTerm: '80%',
    },
    '2023-24': {
      midTerm: '70%',
      endTerm: '92%',
    },
    '2024-25': {
      midTerm: '85%',
      endTerm: '90%',
    },
  },
  attendence: {
    January: { totalDays: 22, presentDays: 18 },
    February: { totalDays: 20, presentDays: 16 },
    March: { totalDays: 20, presentDays: 16 },
    April: { totalDays: 20, presentDays: 16 },
    May: { totalDays: 20, presentDays: 16 },
    June: { totalDays: 20, presentDays: 16 },
    July: { totalDays: 20, presentDays: 16 },
    August: { totalDays: 20, presentDays: 16 },
    September: { totalDays: 20, presentDays: 16 },
    October: { totalDays: 20, presentDays: 16 },
    Novermber: { totalDays: 20, presentDays: 16 },
    December: { totalDays: 20, presentDays: 16 },
  }
};

const StudentProfile = () => {
  // get student details from backend to use in this component
  // currently I am using a temp student

  const [studentData, setstudentData] = useState(studentDataFromBackend);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setstudentData({
      ...studentData,
      [name]: type === 'checkbox' ? checked : value,
    });
    console.log(studentData);
  };

  return (
    <div className="flex select-none">
      <div className="sticky top-0 flex flex-col gap-10 sidebar w-[21%] h-screen pl-[10px] pr-[10px] border-r border-r-[#DDE4EB]">
        <div className="logo w-full">
          <img src="/logos.png" alt="logos" className="object-contain" />
        </div>

        <div className="basic-details">
          <div className="filters flex flex-col gap-10 p-[25px]">
            <div className="profile-photo w-full h-[250px] rounded-lg border">
              <img src="/profile.png" alt="profile-photo"></img>
            </div>
          </div>

          <div className="basic-details p-[25px] font-semibold">
            <div className="label text-2xl text-[#21526E] mb-4">
              Basic Details
            </div>
            <div className="name"> Name : {studentData.name}</div>
            <div className="class"> Class : {studentData.class}</div>
            <div className="center"> Center : {studentData.center}</div>
          </div>
        </div>
      </div>
      <div className="hero flex flex-col gap-10 w-[80%]  bg-fixed inset-0 bg-[radial-gradient(ellipse_at_center,rgba(222,80,85,0.4),transparent),radial-gradient(ellipse_at_top_left,rgba(205,214,219,0.8),rgba(255,255,255,0.8),rgba(255,255,255,0)),radial-gradient(ellipse_at_top_right,rgba(205,214,219,0.8),rgba(255,255,255,0.8),rgba(255,255,255,0)),radial-gradient(ellipse_at_bottom_left,rgba(205,214,219,0.8),rgba(255,255,255,0.8),rgba(255,255,255,0)),radial-gradient(ellipse_at_bottom_right,rgba(205,214,219,0.8),rgba(255,255,255,0.8),rgba(255,255,255,0))]">
        <div className="heading text-3xl font-semibold text-center pt-5 pb-5 border-b w-full">
          Student Profile
        </div>

        {/* --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}

        {/* General Details */}

        <div className="general-details scale-90">
          <div className="w-full text-2xl font-semibold text-[#21526E]">
            General Details
          </div>
          <div className="input-section flex flex-col items-end w-full pt-8 gap-5">
            {/* Row 1 */}
            <div className="flex flex-col gap-5 xl:gap-0 xl:flex-row flex-wrap w-full">
              <div className="w-full xl:w-1/2">
                <InputComponent
                  title={'Name of Student'}
                  name={'name'}
                  type={'text'}
                  value={studentData.name}
                  placeholder={'Name'}
                  handleInputChange={handleInputChange}
                />
              </div>
              <div className="w-full xl:w-1/2">
                <SelectComponent
                  title={'Gender'}
                  name={'gender'}
                  options={[
                    { value: 'Male' },
                    { value: 'Female' },
                    { value: 'Other' },
                  ]}
                  handleInputChange={handleInputChange}
                  value={studentData.gender}
                />
              </div>
            </div>

            {/* Row 2 */}
            <div className="flex flex-col gap-5 xl:gap-0 xl:flex-row flex-wrap w-full">
              <div className="w-full xl:w-1/2">
                <InputComponent
                  title={'Current Session'}
                  name={'session'}
                  type={'text'}
                  placeholder={'Session'}
                  handleInputChange={handleInputChange}
                  value={studentData.session}
                />
              </div>
              <div className="w-full xl:w-1/2">
                <InputComponent
                  title={'Date of birth of Student'}
                  name={'dob'}
                  type={'date'}
                  placeholder={'Date of birth'}
                  handleInputChange={handleInputChange}
                  value={studentData.dob}
                />
              </div>
            </div>

            {/* Row 3 */}
            <div className="flex flex-col gap-5 xl:gap-0 xl:flex-row flex-wrap w-full">
              <div className="w-full xl:w-1/2">
                <InputComponent
                  title={'Class of Student'}
                  name={'class'}
                  type={'text'}
                  placeholder={'Class'}
                  handleInputChange={handleInputChange}
                  value={studentData.class}
                />
              </div>
              <div className="w-full xl:w-1/2">
                <SelectComponent
                  title={'Center of Student'}
                  name={'center'}
                  options={[
                    { value: 'C1' },
                    { value: 'C2' },
                    { value: 'C3' },
                    { value: 'C5' },
                    { value: 'Anganwadi' },
                  ]}
                  handleInputChange={handleInputChange}
                  value={studentData.center}
                />
              </div>
            </div>

            {/* Row 4 */}
            <div className="flex flex-col gap-5 xl:gap-0 xl:flex-row flex-wrap w-full">
              <div className="w-full xl:w-1/2">
                <InputComponent
                  title={"Father's Name"}
                  name={'fatherName'}
                  type={'text'}
                  placeholder={"Father's Name"}
                  handleInputChange={handleInputChange}
                  value={studentData.fatherName}
                />
              </div>
              <div className="w-full xl:w-1/2">
                <InputComponent
                  title={"Fathers's Occupation"}
                  name={'fatherOccupation'}
                  type={'text'}
                  placeholder={"Father's Occupation"}
                  handleInputChange={handleInputChange}
                  value={studentData.fatherOccupation}
                />
              </div>
            </div>

            {/* Row 5 */}
            <div className="flex flex-col gap-5 xl:gap-0 xl:flex-row flex-wrap w-full">
              <div className="w-full xl:w-1/2">
                <InputComponent
                  title={"Mother's Name"}
                  name={'motherName'}
                  type={'text'}
                  placeholder={"Mother's Name"}
                  handleInputChange={handleInputChange}
                  value={studentData.motherName}
                />
              </div>
              <div className="w-full xl:w-1/2">
                <InputComponent
                  title={"Mothers's Occupation"}
                  name={'motherOccupation'}
                  type={'text'}
                  placeholder={"Mother's Occupation"}
                  handleInputChange={handleInputChange}
                  value={studentData.motherOccupation}
                />
              </div>
            </div>

            {/* Row 6 */}
            <div className="flex flex-col gap-5 xl:gap-0 xl:flex-row flex-wrap w-full">
              <div className="w-full xl:w-1/2">
                <InputComponent
                  title={'Address of Student'}
                  name={'address'}
                  type={'text'}
                  placeholder={'Address'}
                  handleInputChange={handleInputChange}
                  value={studentData.address}
                />
              </div>
              <div className="w-full xl:w-1/2">
                <InputComponent
                  title={'Annual Family Income'}
                  name={'familyIncome'}
                  type={'number'}
                  placeholder={'Family Income'}
                  handleInputChange={handleInputChange}
                  value={studentData.familyIncome}
                />
              </div>
            </div>
          </div>
        </div>

        {/* ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}

        <div className="w-full flex scale-90">
          {/* Document Details */}
          <div className="document-details flex flex-col w-full gap-[1.55rem]">
            <div className="w-full text-2xl font-semibold text-[#21526E] mb-5">
              Document Details
            </div>
            {/* Aadhar Details */}
            <div className="flex items-center space-x-2 pl-[2.5%] pr-[2.5%] ">
              <Checkbox
                id="aadhar"
                checked={studentData.aadhar}
                onCheckedChange={(checked) =>
                  handleInputChange({
                    target: {
                      name: 'aadhar',
                      type: 'checkbox',
                      checked: checked,
                    },
                  })
                }
              />
              <label
                htmlFor="aadhar"
                className="text-lg font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Aadhar Card
              </label>
            </div>

            {/* Domicile Details */}
            <div className="flex items-center space-x-2 pl-[2.5%] pr-[2.5%]">
              <Checkbox
                id="domicile"
                checked={studentData.domicile}
                onCheckedChange={(checked) =>
                  handleInputChange({
                    target: {
                      name: 'domicile',
                      type: 'checkbox',
                      checked: checked,
                    },
                  })
                }
              />
              <label
                htmlFor="domicile"
                className="text-lg font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Domicile Certificate
              </label>
            </div>

            {/* Birth Certificate Details */}
            <div className="flex items-center space-x-2 pl-[2.5%] pr-[2.5%]">
              <Checkbox
                id="birthCertificate"
                checked={studentData.birthCertificate}
                onCheckedChange={(checked) =>
                  handleInputChange({
                    target: {
                      name: 'birthCertificate',
                      type: 'checkbox',
                      checked: checked,
                    },
                  })
                }
              />
              <label
                htmlFor="birthCertificate"
                className="text-lg font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Birth Certificate
              </label>
            </div>

            {/* Disability  Details */}
            <div className="flex items-center space-x-2 pl-[2.5%] pr-[2.5%]">
              <Checkbox
                id="disability"
                checked={studentData.disability}
                onCheckedChange={(checked) =>
                  handleInputChange({
                    target: {
                      name: 'disability',
                      type: 'checkbox',
                      checked: checked,
                    },
                  })
                }
              />
              <label
                htmlFor="disability"
                className="text-lg font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Disability Certificate
              </label>
            </div>

            {/* Single Parent  Details */}
            <div className="flex items-center space-x-2 pl-[2.5%] pr-[2.5%]">
              <Checkbox
                id="singleParent"
                checked={studentData.singleParent}
                onCheckedChange={(checked) =>
                  handleInputChange({
                    target: {
                      name: 'singleParent',
                      type: 'checkbox',
                      checked: checked,
                    },
                  })
                }
              />
              <label
                htmlFor="singleParent"
                className="text-lg font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Single Parent Certificate
              </label>
            </div>

            {/* Relevant Ceritificate  Details */}
            <div className="flex items-center space-x-2 pl-[2.5%] pr-[2.5%]">
              <Checkbox
                id="releventCertificate"
                checked={studentData.releventCertificate}
                onCheckedChange={(checked) =>
                  handleInputChange({
                    target: {
                      name: 'releventCertificate',
                      type: 'checkbox',
                      checked: checked,
                    },
                  })
                }
              />
              <label
                htmlFor="releventCertificate"
                className="text-lg font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Relevent Certificate for single parent
              </label>
            </div>
          </div>

          {/* ----------------------------------------------------------------------------------------------------------------------------------------- */}

          {/* Sponsorship Details */}
          <div className="sponsorhip-details flex flex-col w-full gap-2">
            <div className="w-full text-2xl font-semibold text-[#21526E] mb-5">
              Sponsorship Details
            </div>

            <div className="flex items-center w-full h-9 pl-[2.5%] pr-[2.5%] ">
              <label
                htmlFor="isSponsored"
                className="w-[60%] text-lg font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Do we sponsor this student?
              </label>
              <Checkbox
                id="isSponsored"
                checked={studentData.isSponsored}
                onCheckedChange={(checked) =>
                  handleInputChange({
                    target: {
                      name: 'isSponsored',
                      type: 'checkbox',
                      checked: checked,
                    },
                  })
                }
              />
              <span className="font-semibold ml-5">
                {studentData.isSponsored ? 'Yes' : 'No'}
              </span>
            </div>

            <div className="annual-school-fees flex items-center w-full h-9 pl-[2.5%] pr-[2.5%]">
              <label className="w-[60%] text-lg font-semibold">
                Annual School Fees of student
              </label>
              <div className="w-[200px]">
                <input
                  type="number"
                  name="annualFees"
                  placeholder="Annual Fees"
                  className="p-2 font-semibold rounded-lg"
                  value={studentData.annualFees}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="flex items-center w-full h-9 pl-[2.5%] pr-[2.5%]">
              <label
                htmlFor="payTotalFees"
                className="w-[60%] text-lg font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Do we pay total school fees
              </label>
              <Checkbox
                id="payTotalFees"
                checked={studentData.payTotalFees}
                onCheckedChange={(checked) =>
                  handleInputChange({
                    target: {
                      name: 'payTotalFees',
                      type: 'checkbox',
                      checked: checked,
                    },
                  })
                }
              />
              <span className="font-semibold ml-5">
                {studentData.payTotalFees ? 'Yes' : 'No'}
              </span>
            </div>

            <div className="flex items-center w-full h-9 pl-[2.5%] pr-[2.5%]">
              <label
                htmlFor="feesWePay"
                className="w-[60%] text-lg font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Total Fees we pay
              </label>
              <div className="w-[200px]">
                <input
                  type="number"
                  name="feesWePay"
                  placeholder={
                    studentData.payTotalFees === false ? 'Enter the amount' : ''
                  }
                  className="p-2 font-semibold rounded-lg"
                  value={
                    studentData.payTotalFees === true
                      ? studentData.annualFees
                      : studentData.feesWePay
                  }
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="flex items-center w-full h-9 pl-[2.5%] pr-[2.5%]">
              <label
                htmlFor="sponserName"
                className="w-[60%] text-lg font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Name of Sponsor
              </label>
              <div className="w-[200px]">
                <input
                  type="text"
                  name="sponserName"
                  className="p-2 font-semibold rounded-lg"
                  placeholder="Enter sponser name"
                  value={studentData.sponserName}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="flex items-center w-full h-9 pl-[2.5%] pr-[2.5%]">
              <label
                htmlFor="amountBySponsor"
                className="w-[60%] text-lg font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Total Amount by Sponsor
              </label>
              <div className="w-[200px]">
                <input
                  type="number"
                  name="amountBySponsor"
                  className="p-2 font-semibold rounded-lg"
                  placeholder="Enter total amount"
                  value={studentData.amountBySponsor}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>

          {/* -------------------------------------------------------------------------------------------------------------------------------------------- */}
        </div>

        {/* Result Details */}

        <div className="result-details w-[90%] m-auto">
          <div className="w-full text-2xl font-semibold text-[#21526E] mb-5">
            Result Details
          </div>

          <div className="flex flex-col gap-4 pl-[2.5%] pr-[2.5%] mb-20">
            {Object.keys(studentData.results).map((session) => (
              <div key={session} className="flex justify-between  w-full">
                <div className="session flex items-center text-xl font-bold w-1/2">
                  Session : {session}
                </div>

                <div className="flex justify-between items-center w-1/2">
                  <div className="mid-term flex items-center">
                    <div className="text-lg font-semibold mr-4">Mid-term:</div>
                    <div className="pl-10 pr-10 pt-2 pb-2 font-semibold bg-white rounded-lg">
                      {studentData.results[session].midTerm}
                    </div>
                  </div>

                  <div className="end-term flex items-center">
                    <div className="text-lg font-semibold mr-4">End-term:</div>
                    <div className="pl-10 pr-10 pt-2 pb-2 font-semibold bg-white rounded-lg">
                      {studentData.results[session].endTerm}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Result Graph */}

          <div className="result-graph w-full h-[400px]">
            <StudentProgressGraph results={studentData.results} />
          </div>
        </div>

        {/* --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}

        {/* Attendence details */}
        <div className="attendence-details w-[90%] m-auto mt-10">

          <div className="w-full text-2xl font-semibold text-[#21526E] mb-5">
            Attendence Details
          </div>


          {/* Attendence Graph */}
          <div className="result-graph w-full h-[400px]">
            <AttendanceMonitoringGraph attendanceData={studentData.attendence} />
          </div>

        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
