import React, { useCallback } from "react";
import { emptyFunc } from "@/utils/function/emptyFunction";

interface IForm {
	children?: any;
	className?: string;
	onSubmit?: (ev: React.SyntheticEvent) => void;
	onReset?: (ev: React.SyntheticEvent) => void;
}

const Form: React.FC<IForm> = (props) => {
	const { children, className, onSubmit = emptyFunc, onReset = emptyFunc } = props;
	const handleSubmit = useCallback(
		(ev: React.SyntheticEvent) => {
			ev.preventDefault();
			onSubmit(ev);
		},
		[onSubmit]
	);

	const handleReset = useCallback(
		(ev: React.SyntheticEvent) => {
			onReset(ev);
		},
		[onReset]
	);

	return (
		<form className={className} onSubmit={handleSubmit} onReset={handleReset}>
			{children}
		</form>
	);
};

export default React.memo(Form);
