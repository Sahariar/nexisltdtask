import React from "react";
import FromItem from "./Shared/FromItem";
import { BsArrowRight } from "react-icons/bs";

const step2 = ({ setForm, formData, navigation }) => {
	const { phone_number, email } = formData;
	const { go } = navigation;

	return (
		<>
			<div className="w-full py-2">
				<FromItem
					label="phone Number"
					name="firstName"
					value={phone_number}
					placeholder="Write phone number"
					onChange={setForm}
				/>
			</div>
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
			<div className="w-full py-2 flex justify-center items-center">
				<button onClick={() => go("step1")}>Back</button>

				<button
					className="text-white text-center mx-auto btn btn-primary px-14 py-2 rounded-3xl gap-2 flex"
					onClick={() => go("step3")}
				>
					Next <BsArrowRight className="text-2xl" />
				</button>
			</div>
		</>
	);
};

export default step2;
