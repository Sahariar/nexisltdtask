import React from 'react';
import { useForm } from 'react-hooks-helper';
import LoginStep from '../LoginStep';
const defaultData = {
    email:"abc@example.com",
    password: "SuperSecretPassword"
  };
const LoginFrom = () => {
    const [formData, setForm] = useForm(defaultData);
    const props = { formData, setForm, navigation };
    return (
        <>
            <LoginStep {...props}></LoginStep>
        </>
    );
};

export default LoginFrom;