import React from 'react';
import { useForm, useStep } from 'react-hooks-helper';
import Step1 from '../Step1';
import Step2 from '../Step2';
import Step3 from '../Step3';

const steps = [
    { id: "step1" },
    { id: "step2" },
    { id: "step3" },
  ];
  
const defaultData = {
    first_name: "Write First Name",
    last_Name: "Write Last Name", 
    phone_number: "0000000000", 
    email:"abc@example.com",
    password: "SuperSecretPassword"

  };
const MultiStepsFrom = () => {
    const [formData, setForm] = useForm(defaultData);
  const { step, navigation } = useStep({ initialStep: 0, steps });
  const { id } = step;
  const props = { formData, setForm, navigation };

  switch (id) {
    case "step1":
      return <Step1 {...props}/>;
    case "step2":
      return <Step2 {...props}/>;
    case "step3":
      return <Step3 {...props} />;
    default:
      return null;
  }
  
};

export default MultiStepsFrom;