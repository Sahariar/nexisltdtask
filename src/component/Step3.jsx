import axios from 'axios';
import React from 'react';
import FromItem from './Shared/FromItem';
import { toast } from 'react-toastify';
const Step3 = ({ setForm, formData, navigation }) => {
    const { password } = formData;
    const { go } = navigation;
    
    const handleSubmit =() => {
console.log(formData);
const url = `https://test.nexisltd.com/signup`;
        axios.post(url,formData)
        .then(function (res) {
            console.log(res);
            toast.success('Successfully sign up', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
            }).catch(function (error) {
    console.log(error);
    toast.error(error.message);
  });
    }
    return (
        <>
        <div className="w-full py-2">
                         <FromItem 
                         label="Password"
                         name="password"
                         value={password}
                         type="password"
                         placeholder="Write phone number"
                         onChange={setForm}
                         />
                         <div className="bg-info p-4 my-2">
                         **Password must be at-least 8 characters. 
                         </div>
                         </div>
                         <div className="w-full py-2 flex justify-center items-center">
                         <button onClick={() => go("step2")}>Back</button>

                             <button
                                 className="text-white text-center mx-auto btn btn-primary px-14 py-2 rounded-3xl gap-2 flex"
                             onClick={handleSubmit}
                             >
                                Submit
                             </button>
                         </div>
 </>
    );
};

export default Step3;