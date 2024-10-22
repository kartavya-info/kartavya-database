import React from 'react';
import InputComponent from '../components/InputComponent';
import SelectComponent from '../components/SelectComponent';

const EnterStudentDetails1 = ({ handleClick, handleInputChange, formData }) => {
  return (
    <div className="flex flex-col items-center w-full h-full pt-5">
      <div className="progress1 flex justify-center items-center w-full h-7">
        <img
          src="/progress1.png"
          alt="first-step"
          className="object-contain h-full"
        />
      </div>

      {/* Inputs Section */}
      <div className="input-section flex flex-col items-end w-full pt-8 gap-5">
        {/* Row 1 */}
        <div className="flex flex-col gap-5 xl:gap-0 xl:flex-row flex-wrap w-full">
          <div className="w-full xl:w-1/2">
            <InputComponent
              title={'Name of Student'}
              name={'name'}
              type={'text'}
              value={formData.name}
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
              value={formData.gender}
            />
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex flex-col gap-5 xl:gap-0 xl:flex-row flex-wrap w-full">
          <div className="w-full xl:w-1/2">
            <InputComponent
              title={'Date of birth of Student'}
              name={'dob'}
              type={'date'}
              placeholder={'Date of birth'}
              handleInputChange={handleInputChange}
              value={formData.dob}
            />
          </div>
          <div className="w-full xl:w-1/2">
            <InputComponent
              title={'Address of Student'}
              name={'address'}
              type={'text'}
              placeholder={'Address'}
              handleInputChange={handleInputChange}
              value={formData.address}
            />
          </div>
        </div>

        {/* Row 3 */}
        <div className="flex flex-col gap-5 xl:gap-0 xl:flex-row flex-wrap w-full">
          <div className="w-full xl:w-1/2">
            <InputComponent
              title={'Current Session'}
              name={'session'}
              type={'text'}
              placeholder={'Session'}
              handleInputChange={handleInputChange}
              value={formData.session}
            />
          </div>
          <div className="w-full xl:w-1/2">
            <InputComponent
              title={'Class of Student'}
              name={'class'}
              type={'text'}
              placeholder={'Class'}
              handleInputChange={handleInputChange}
              value={formData.class}
            />
          </div>
        </div>

        {/* Row 4 */}

        <div className="flex flex-col gap-5 xl:gap-0 xl:flex-row flex-wrap w-full">
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
              value={formData.center}
            />
          </div>
          <div className="w-full xl:w-1/2">
            <SelectComponent
              title={'School of Student'}
              name={'school'}
              options={[
                { value: 'Education Academy' },
                { value: 'Vidiya Public School' },
                { value: 'Vidya Bharti' },
                { value: 'Lucious Public School' },
                { value: 'Tagore Academy' },
                { value: 'Saraswati Vidya Niketan' },
                { value: 'Dhanbad Vikas Vidyalaya' },
                { value: 'NIOS' },
                { value: 'ISL Jhariya' },
                { value: 'Dhanbad Public School' },
                { value: 'Physics Wallah' },
                { value: 'Akash' },
                { value: 'Ram Krishna Public School' },
              ]}
              handleInputChange={handleInputChange}
              value={formData.school}
            />
          </div>
        </div>

        {/* Row 5 */}

        <div className="flex flex-col gap-5 xl:gap-0 xl:flex-row flex-wrap w-full">
          <div className="w-full xl:w-1/2">
            <InputComponent
              title={"Father's Name"}
              name={'fatherName'}
              type={'text'}
              placeholder={"Father's Name"}
              handleInputChange={handleInputChange}
              value={formData.fatherName}
            />
          </div>
          <div className="w-full xl:w-1/2">
            <InputComponent
              title={"Fathers's Occupation"}
              name={'fatherOccupation'}
              type={'text'}
              placeholder={"Father's Occupation"}
              handleInputChange={handleInputChange}
              value={formData.fatherOccupation}
            />
          </div>
        </div>

        {/* Row 6 */}
        <div className="flex flex-col gap-5 xl:gap-0 xl:flex-row flex-wrap w-full">
          <div className="w-full xl:w-1/2">
            <InputComponent
              title={"Mother's Name"}
              name={'motherName'}
              type={'text'}
              placeholder={"Mother's Name"}
              handleInputChange={handleInputChange}
              value={formData.motherName}
            />
          </div>
          <div className="w-full xl:w-1/2">
            <InputComponent
              title={"Mothers's Occupation"}
              name={'motherOccupation'}
              type={'text'}
              placeholder={"Mother's Occupation"}
              handleInputChange={handleInputChange}
              value={formData.motherOccupation}
            />
          </div>
        </div>

        {/* Row 7 */}
        <div className="flex flex-col gap-5 xl:gap-0 xl:flex-row flex-wrap w-full">
          <div className="w-full xl:w-1/2">
            <InputComponent
              title={'Annual Family Income'}
              name={'familyIncome'}
              type={'number'}
              placeholder={'Family Income'}
              handleInputChange={handleInputChange}
              value={formData.familyIncome}
            />
          </div>
          <div className="w-full xl:w-1/2">
            <InputComponent
              title={'Contact Number'}
              name={'contactNumber'}
              type={'text'}
              placeholder={'Contact Number'}
              handleInputChange={handleInputChange}
              value={formData.contactNumber}
            />
          </div>
        </div>

        <div className="flex items-center w-full pt-2">
          <div className="flex justify-center w-[90%] pl-[6%] pr-[2.5%]">
            <button
              onClick={handleClick}
              className="w-[150px] p-2 rounded-lg bg-[#21526E] text-white"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnterStudentDetails1;
