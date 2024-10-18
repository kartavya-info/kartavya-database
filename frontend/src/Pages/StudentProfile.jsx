import InputComponent from '@/components/InputComponent';
import SelectComponent from '@/components/SelectComponent';
import React, { useState } from 'react';

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
      <div className="hero w-[80%] h-[200vh] bg-fixed inset-0 bg-[radial-gradient(ellipse_at_center,rgba(222,80,85,0.4),transparent),radial-gradient(ellipse_at_top_left,rgba(205,214,219,0.8),rgba(255,255,255,0.8),rgba(255,255,255,0)),radial-gradient(ellipse_at_top_right,rgba(205,214,219,0.8),rgba(255,255,255,0.8),rgba(255,255,255,0)),radial-gradient(ellipse_at_bottom_left,rgba(205,214,219,0.8),rgba(255,255,255,0.8),rgba(255,255,255,0)),radial-gradient(ellipse_at_bottom_right,rgba(205,214,219,0.8),rgba(255,255,255,0.8),rgba(255,255,255,0))]">
        <div className="heading text-3xl font-semibold text-center pt-5 pb-5 border-b w-full">
          Student Profile
        </div>
        <div className="general-details scale-90">
          <div className='w-full text-2xl font-semibold text-[#21526E]'> General Details</div>
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
      </div>
    </div>
  );
};

export default StudentProfile;
