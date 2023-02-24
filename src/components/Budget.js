import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
	const { dispatch, budget, expenses, currency } = useContext(AppContext);

	const totalExpenses = expenses.reduce((total, item) => {
		return (total += item.cost);
	}, 0);

	const submitEvent = (value, totalExpenses) => {
		dispatch({ type: "SET_BUDGET", payload: value });
		if (value > 20000) {
			alert(`The value cannot exceed ${currency}20.000`);
		} else if (totalExpenses > budget) {
			alert("You cannot reduce the budget value lower than the spending");
		}
	};

	return (
		<div className="alert alert-secondary">
			<span>
				Budget: {currency}
				<input
					required="required"
					type="number"
					id="cost"
					value={budget}
					style={{ marginLeft: "6px" }}
					onChange={(event) => submitEvent(event.target.value, totalExpenses)}
					// min={0}
					// max={20000}
					step={10} //to increase or decrease the input option by 10
				></input>
			</span>
		</div>
	);
};

export default Budget;
