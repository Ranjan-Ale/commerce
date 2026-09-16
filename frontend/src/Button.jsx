import { useState } from "react";

function Button () {
	const [counter, setCounter] = useState(0);

	function onClickIncrement() {
		setCounter(counter + 1);
	}

	function onClickDecrement() {
		setCounter(counter - 1);
	}

	return (
		<div>
			<div>{ counter }</div>
			<div className="flex gap-2 justify-center mt-5">
			<button 
				className="border-gray-600 rounded-sm bg-gray-700 px-5 py-2 text-white hover:bg-gray-900"
				onClick={() => {onClickIncrement()}}
				>Increment</button>
			<button
			 className="border-gray-600 rounded-sm bg-gray-700 px-5 py-2 text-white hover:bg-gray-900"
			 onClick={() => {onClickDecrement()}}>Decrement</button>
			</div>
		</div>	
	);
}

export default Button;