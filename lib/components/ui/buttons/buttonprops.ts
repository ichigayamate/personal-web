import { AllHTMLAttributes } from "react";

export interface ButtonProps extends AllHTMLAttributes<HTMLElement> {
    overrideHoverColor?: boolean | undefined;
}