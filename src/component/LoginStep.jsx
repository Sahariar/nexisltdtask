import axios from 'axios';
import React from 'react';
import FromItem from './Shared/FromItem';
const LoginStep = ({ setForm, formData, navigation }) => {
    const { password, email } = FormData;
    const handleSubmit =() => {
        console.log(formData);
        const url = `Endpoint: https://test.nexisltd.com/login `;
                axios.post(url,formData)
                .then(function (res) {
                    console.log(res);
                    }).catch(function (error) {
            console.log(error);
          });
            }
    return (
        <>
            		<div className="w-full py-2">
				<FromItem
					type="email"
					label="email"
					name="email"
					placeholder="Write email"
					value={email}
					onChange={setForm}
				/>
			</div>
			<div className="w-full py-2">
                         <FromItem 
                         label="Password"
                         name="password"
                         value={password}
                         type="password"
                         placeholder="Password"
                         onChange={setForm}
                         />
                         <div className="bg-info p-4 my-2">
                         **Password must be at-least 8 characters. 
                         </div>
                         </div>
                         <div className="w-full py-2 flex justify-center items-center">
                             <button
                                 className="text-white text-center mx-auto btn btn-primary px-14 py-2 rounded-3xl gap-2 flex"
                             onClick={handleSubmit}
                             >
                                Login
                             </button>
                         </div>
        </>
    );
};

export default LoginStep;