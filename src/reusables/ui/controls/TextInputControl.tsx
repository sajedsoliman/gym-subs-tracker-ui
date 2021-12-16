import { forwardRef } from "react";
// ui
import {
	FormControl,
	FormLabel,
	Input,
	FormErrorMessage,
	InputProps,
} from "@chakra-ui/react";

// types
type Props = {
	errorMessage?: string;
	label: string;
};

const TextInputControl = forwardRef<HTMLInputElement, Props & InputProps>(
	(props, ref) => {
		// flat the props
		const { errorMessage, label, isRequired = false, ...otherProps } = props;

		return (
			<FormControl isInvalid={!!errorMessage} isRequired={isRequired}>
				<FormLabel>{label}</FormLabel>
				<Input
					ref={ref}
					variant="filled"
					errorBorderColor="red.600"
					isRequired={false}
					{...otherProps}
				/>
				<FormErrorMessage>{errorMessage}</FormErrorMessage>
			</FormControl>
		);
	}
);

export default TextInputControl;
