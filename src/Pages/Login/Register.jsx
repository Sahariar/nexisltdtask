import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import MultiStepsFrom from "../../component/Shared/MultiStepsFrom";
import img from '../../assets/resig.svg'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Register = () => {
	const { register, handleSubmit } = useForm();
	const onSubmit = (data) => {};
	return (
		<section className="register-area mb-12 hero min-h-screen ">
			<ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
/>
			<div className="container mx-auto">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					xmlnsXlink="http://www.w3.org/1999/xlink"
					width="165"
					height="60"
					fill="none"
					viewBox="0 0 165 60"
					className=""
				>
					<path fill="url(#pattern0)" d="M0 0H164.211V60H0z"></path>
					<defs>
						<pattern
							id="pattern0"
							width="1"
							height="1"
							patternContentUnits="objectBoundingBox"
						>
							<use
								transform="matrix(.00423 0 0 .01158 -.141 -.421)"
								xlinkHref="#image0_3_150"
							></use>
						</pattern>
						<image
							id="image0_3_150"
							width="300"
							height="150"
							xlinkHref="data:image/png;base64,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"
						></image>
					</defs>
				</svg>
				<div className="flex flex-col xl:flex-row">
					<div className="xl:w-8/12 mx-auto">
						<img src={img} alt="" className="mx-auto" />
					</div>
					<div className="lg:w-4/12 xl:max-w-md p-4 rounded-md shadow-xl sm:p-8 mx-auto">
						<h2 className="mb-3 text-3xl font-semibold text-center">
							Sign Up From
						</h2>

						<div className="my-6 space-y-4">
							<div className="form">
							<MultiStepsFrom></MultiStepsFrom>
							</div>
							
						</div>

						<p className="text-sm text-center">
							Already have account?
							<Link to={"/login"}>
								<span className="focus:underline hover:underline">
									Login here
								</span>
							</Link>
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Register;
