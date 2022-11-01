import { Button, useRadio } from "@chakra-ui/react";

export default function RadioButton(props) {
    const { state, getInputProps, getCheckboxProps } = useRadio(props);

    const input = getInputProps();
    const checkbox = getCheckboxProps();

    return (
        <Button as="label" {...checkbox} variant={state.isChecked ? "solid" : "outline"} className={state.isDisabled ? "cursor-not-allowed" : "cursor-pointer"}>
            <input {...input} hidden />
            {props.children}
        </Button>
    )
}