import React, { forwardRef } from "react";
// ui
import {
	FormControl,
	FormLabel,
	NumberInputField,
	FormErrorMessage,
	NumberInputProps,
	NumberInput,
} from "@chakra-ui/react";

// types
type Props = {
	errorMessage?: string;
	label: string;
	placeholder?: string;
	isRequired?: boolean;
};

const TextInputControl = forwardRef<HTMLInputElement, Props>((props, ref) => {
	// flat the props
	const {
		errorMessage,
		label,
		placeholder,
		isRequired = false,
		...otherProps
	} = props;

	return (
		<FormControl isInvalid={!!errorMessage} isRequired={isRequired}>
			<FormLabel>{label}</FormLabel>
			<NumberInput
				variant="filled"
				errorBorderColor="red.600"
				isRequired={false}
				clampValueOnBlur={false}
				{...otherProps}
			>
				<NumberInputField ref={ref} placeholder={placeholder} />
			</NumberInput>
			<FormErrorMessage>{errorMessage}</FormErrorMessage>
		</FormControl>
	);
});

export default TextInputControl;
