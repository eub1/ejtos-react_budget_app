import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Currency = () => {
	const { dispatch } = useContext(AppContext);

	const changeCurrency = (val) => {
		dispatch({
			type: "CHG_CURRENCY",
			payload: val
		});
	};

	return (
		<div className="alert alert-secondary block mb-2 text-sm font-medium text-green-900 dark:text-white">
			{" "}
			Currency{" "}
			{
				<select
					className="bg-green-50 border border-green-300 text-green-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-green-700 dark:border-green-600 dark:placeholder-green-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					name="Currency"
					id="Currency"
					onChange={(event) => changeCurrency(event.target.value)}
				>
					<option value="$">$ Dollar</option>
					<option value="£">£ Pound</option>
					<option value="€">€ Euro</option>
					<option value="₹">₹ Ruppee</option>
				</select>
			}
		</div>
	);
};

export default Currency;
