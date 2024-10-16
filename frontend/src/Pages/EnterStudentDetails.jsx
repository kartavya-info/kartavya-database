import React, { useState } from 'react';
import HeaderForEnputStudentDetails from '../components/HeaderForEnputStudentDetails';
import EnterStudentDetails1 from './EnterStudentDetails1';
import EnterStudentDetails2 from './EnterStudentDetails2';
import { toast } from 'react-toastify';

const EnterStudentDetails = () => {
  const [isFirstPage, setIsFirstPage] = useState(true);

  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    session: '',
    dob: '',
    class: '',
    center: '',
    fatherName: '',
    fatherOccupation: '',
    motherName: '',
    motherOccupation: '',
    address: '',
    familyIncome: 0,
  });

  const [aadhar, setAadhar] = useState(false);
  const [domicile, setDomicile] = useState(false);
  const [birthCertificate, setBirthCertificate] = useState(false);
  const [disability, setDisability] = useState(false);
  const [singleParent, setSingleParent] = useState(false);
  const [releventCertificate, setReleventCertificate] = useState(false);

  const handleAadharChange = (e) => {
    setAadhar(e.target.checked);
  };
  const handleDomicileChange = (e) => {
    setDomicile(e.target.checked);
  };
  const handleBirthCertificateChange = (e) => {
    setBirthCertificate(e.target.checked);
  };
  const handleDisabilityChange = (e) => {
    setDisability(e.target.checked);
  };
  const handleSingleParentChange = (e) => {
    setSingleParent(e.target.checked);
  };
  const handleReleventCertificateChange = (e) => {
    setReleventCertificate(e.target.checked);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(formData);
  };

  const handleClick = () => {
    setIsFirstPage((prev) => !prev);
  };

  const convertToFormData = (formDataObject) => {
    const formData = new FormData();
  
    try {
      for (const key in formDataObject) {
        if (Object.prototype.hasOwnProperty.call(formDataObject, key)) {

          if (formDataObject[key] === '') {
            throw new Error(`Field '${key}' cannot be empty`);
          }

          if (key === 'familyIncome' && formDataObject[key] <= 0) {
            throw new Error(`'Family Income' must be greater than zero`);
          }

          formData.append(key, formDataObject[key]);
        }
      }
    } catch (e) {
      console.error(e.message); 
      throw e; 
    }
  
    return formData;
  };
  
  const handleSubmitForm = (e) => {
    e.preventDefault();
  
    try {
      const formDataToSubmit = convertToFormData(formData);
  
      formDataToSubmit.append('aadhar', aadhar);
      formDataToSubmit.append('domicile', domicile);
      formDataToSubmit.append('birthCertificate', birthCertificate);
      formDataToSubmit.append('disability', disability);
      formDataToSubmit.append('singleParent', singleParent);
      formDataToSubmit.append('releventCertificate', releventCertificate);
  
      // Log the form data for debugging
      for (let pair of formDataToSubmit.entries()) {
        console.log(`${pair[0]}: ${pair[1]}`);
      }

      toast.success('Form submitted successfully!');
  
    } catch (e) {
      toast.error(`Error submitting form: ${e.message}`);
      return;
    }
  
  };

  return (
    <div className="w-screen h-screen bg-[radial-gradient(ellipse_at_center,rgba(222,80,85,0.4),transparent),radial-gradient(ellipse_at_top_left,rgba(205,214,219,0.8),rgba(255,255,255,0.8),rgba(255,255,255,0)),radial-gradient(ellipse_at_top_right,rgba(205,214,219,0.8),rgba(255,255,255,0.8),rgba(255,255,255,0)),radial-gradient(ellipse_at_bottom_left,rgba(205,214,219,0.8),rgba(255,255,255,0.8),rgba(255,255,255,0)),radial-gradient(ellipse_at_bottom_right,rgba(205,214,219,0.8),rgba(255,255,255,0.8),rgba(255,255,255,0))]">
      <HeaderForEnputStudentDetails />
      <div className="flex flex-col w-full xl:flex-row xl:h-[calc(100vh-7rem)]">
        <div className="flex justify-center items-center w-full h-[500px] xl:w-2/5 xl:h-full">
          <img
            src="/girl_photo.png"
            alt="girl_photo"
            className="object-contain h-4/5"
          />
        </div>

        <div className="relative w-full h-[500px] xl:w-3/5 xl:h-full overflow-hidden">
          {/* Animation Class */}
          <div
            className={`transition-transform duration-500 ease-in-out absolute inset-0 ${
              isFirstPage ? 'translate-x-0' : '-translate-x-full'
            }`}
          >
            <EnterStudentDetails1
              handleClick={handleClick}
              handleInputChange={handleInputChange}
              formData={formData}
            />
          </div>
          <div
            className={`transition-transform duration-500 ease-in-out absolute inset-0 ${
              isFirstPage ? 'translate-x-full' : 'translate-x-0'
            }`}
          >
            <EnterStudentDetails2
              handleClick={handleClick}
              handleSubmitForm={handleSubmitForm}

              aadhar={aadhar}
              domicile={domicile}
              birthCertificate={birthCertificate}
              disability={disability}
              singleParent={singleParent}

              releventCertificate={releventCertificate}
              handleAadharChange={handleAadharChange}
              handleDomicileChange={handleDomicileChange}
              handleBirthCertificateChange={handleBirthCertificateChange}
              handleDisabilityChange={handleDisabilityChange}
              handleSingleParentChange={handleSingleParentChange}
              handleReleventCertificateChange={handleReleventCertificateChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnterStudentDetails;
