import { useState } from "react";

const useToggle = (
	defaultValue = false
): [boolean, () => void, () => void, () => void] => {
	const [visible, setVisible] = useState(defaultValue);

	const handleToggle = () => {
		setVisible((prev) => !prev);
	};

	const handleShow = () => {
		setVisible(true);
	};

	const handleHide = () => {
		setVisible(false);
	};

	return [visible, handleToggle, handleShow, handleHide];
};

export default useToggle;
