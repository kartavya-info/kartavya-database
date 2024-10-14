import React from 'react';
import InputComponent from '../components/InputComponent';
import SelectComponent from '../components/SelectComponent';

const EnterStudentDetails1 = ({handleClick}) => {
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
              placeholder={'Name'}
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
            />
          </div>
          <div className="w-full xl:w-1/2">
            <InputComponent
              title={'Date of birth of Student'}
              name={'dob'}
              type={'date'}
              placeholder={'Date of birth'}
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
            />
          </div>
          <div className="w-full xl:w-1/2">
            <SelectComponent
              title={'Center of Student'}
              name={'Center'}
              options={[
                { value: 'C1' },
                { value: 'C2' },
                { value: 'C3' },
                { value: 'C5' },
                { value: 'Anganwadi' },
              ]}
            />
          </div>
        </div>

        {/* Row 4 */}
        <div className="flex flex-col gap-5 xl:gap-0 xl:flex-row flex-wrap w-full">
          <div className="w-full xl:w-1/2">
            <InputComponent
              title={"Father's Name"}
              name={'father-name'}
              type={'text'}
              placeholder={"Father's Name"}
            />
          </div>
          <div className="w-full xl:w-1/2">
            <InputComponent
              title={"Fathers's Occupation"}
              name={'father-occupation'}
              type={'text'}
              placeholder={"Father's Occupation"}
            />
          </div>
        </div>

        {/* Row 5 */}
        <div className="flex flex-col gap-5 xl:gap-0 xl:flex-row flex-wrap w-full">
          <div className="w-full xl:w-1/2">
            <InputComponent
              title={"Mother's Name"}
              name={'mother-name'}
              type={'text'}
              placeholder={"Mother's Name"}
            />
          </div>
          <div className="w-full xl:w-1/2">
            <InputComponent
              title={"Mothers's Occupation"}
              name={'mother-occupation'}
              type={'text'}
              placeholder={"Mother's Occupation"}
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
            />
          </div>
          <div className="w-full xl:w-1/2">
            <InputComponent
              title={'Annual Family Income'}
              name={'family-income'}
              type={'number'}
              placeholder={'Family Income'}
            />
          </div>
        </div>

        <div className="flex items-center w-1/2 pt-8">
          <div className="flex justify-end w-[90%] pl-[2.5%] pr-[2.5%]">
            <button onClick={handleClick} className="w-[150px] p-2 rounded-lg bg-[#21526E] text-white">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnterStudentDetails1;
