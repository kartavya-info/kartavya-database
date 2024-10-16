import React from 'react';
import CheckboxComponent from '../components/CheckboxComponent';

const EnterStudentDetails2 = ({
  handleClick,
  handleSubmitForm,

  aadhar,
  domicile,
  birthCertificate,
  disability,
  singleParent,
  releventCertificate,

  handleAadharChange,
  handleDomicileChange,
  handleBirthCertificateChange,
  handleDisabilityChange,
  handleSingleParentChange,
  handleReleventCertificateChange,
}) => {
  return (
    <div className="flex flex-col items-center w-full h-full pt-5">
      <div className="progress1 flex justify-center items-center w-full h-7">
        <img
          src="/progress1.png"
          alt="first-step"
          className="object-contain h-full"
        />
      </div>

      <div className="inputs flex flex-col items-end w-full pt-20 gap-5">
        <div className="file-input w-full  flex justify-between">
          <label htmlFor="fileInput" className="text-sm font-semibold">
            Upload passport size picture of student{' '}
            <span className="text-red-500">*</span>
          </label>
          <input type="file" id="fileInput" required></input>
        </div>
      </div>

      <div className="documents flex flex-col w-full mt-20">
        <div className="text-sm font-semibold mb-6">
          Document details of student
        </div>

        <div className='flex flex-col gap-3 w-full'>
          <CheckboxComponent
            title="Aadhar Card"
            name="aadhar"
            checked={aadhar}
            handleChange={handleAadharChange}
          />

          <CheckboxComponent
            title="Domicile Certificate"
            name="domicile"
            checked={domicile}
            handleChange={handleDomicileChange}
          />

          <CheckboxComponent
            title="Birth Certificate"
            name="birthCertificate"
            checked={birthCertificate}
            handleChange={handleBirthCertificateChange}
          />

          <CheckboxComponent
            title="Disability Certificate"
            name="disability"
            checked={disability}
            handleChange={handleDisabilityChange}
          />

          <CheckboxComponent
            title="Single Parent"
            name="singleParent"
            checked={singleParent}
            handleChange={handleSingleParentChange}
          />

          <div className='ml-10'>
          <CheckboxComponent
            title="Do you have Relevent Certificate ?"
            name="releventCertificate"
            checked={releventCertificate}
            handleChange={handleReleventCertificateChange}
          />
          </div>

        </div>
      </div>

      <div className="flex items-center w-full pt-24">
        <div className="flex justify-center w-[90%] pl-[2.5%] pr-[2.5%] gap-10">
          <button
            onClick={handleClick}
            className="w-[150px] p-2 rounded-lg bg-[#21526E] text-white"
          >
            Back
          </button>
          <button
            onClick={handleSubmitForm}
            className="w-[150px] p-2 rounded-lg bg-[#21526E] text-white"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default EnterStudentDetails2;
