import { forwardRef } from "react";
// ui
import {
	FormControl,
	FormLabel,
	Select,
	FormErrorMessage,
	SelectProps,
} from "@chakra-ui/react";

// types
type Props = {
	errorMessage?: string;
	label?: string;
	options: { value: string; label: string }[];
};

const TextInputControl = forwardRef<HTMLSelectElement, Props & SelectProps>(
	(props, ref) => {
		// flat the props
		const {
			errorMessage,
			options,
			label,
			isRequired = false,
			...otherProps
		} = props;

		return (
			<FormControl isInvalid={!!errorMessage} isRequired={isRequired}>
				{label && <FormLabel>{label}</FormLabel>}
				<Select
					ref={ref}
					variant="filled"
					errorBorderColor="red.600"
					isRequired={false}
					{...otherProps}
				>
					{options.map((option) => (
						<option key={option.value} value={option.value}>
							{option.label}
						</option>
					))}
				</Select>
				<FormErrorMessage>{errorMessage}</FormErrorMessage>
			</FormControl>
		);
	}
);

export default TextInputControl;
