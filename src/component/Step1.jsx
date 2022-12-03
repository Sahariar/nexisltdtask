import React from 'react';
import FromItem from './Shared/FromItem';
import { BsArrowRight } from "react-icons/bs";

const Step1 = ({ setForm, formData, navigation }) => {
    const { first_name, last_Name } = formData;
    const { next } = navigation;

    return (
        <>
           	<div className="w-full py-2">
								<FromItem 
                                label="First Name"
                                name="first_name"
                                value={first_name}
                                placeholder="Write First Name"
                                onChange={setForm}
                                />
								</div>
								<div className="w-full py-2">
                                <FromItem 
                                label="Last Name"
                                name="last_Name"
                                placeholder="Write Last Name"
                                value={last_Name}
                                onChange={setForm}
                                />
								</div> 
                                <div className="w-full py-2 flex justify-center items-center">
									<button
										className="text-white text-center mx-auto btn btn-primary px-14 py-2 rounded-3xl gap-2 flex"
									onClick={next}
                                    >
										Next <BsArrowRight className="text-2xl" />
									</button>
								</div>
                                </>
                                    );
};

export default Step1;