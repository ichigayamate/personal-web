import { forwardRef, ReactElement } from "react";
import { ButtonProps } from "./buttonprops";

interface Props extends ButtonProps {
    variant?: string;
    outline?: boolean | undefined;
    icon?: "iconOnly" | "left" | "right" | undefined;
    iconValue?: ReactElement;
    type?: "button" | "submit" | "reset";
}

const Button = forwardRef<HTMLAnchorElement, Props>(({overrideHoverColor, variant, outline, icon, iconValue, ...props}, ref: null) => {
    const ButtonTag = props.href ? "a" : "button";

    let outlineColor: string, bgColor: string;
    if (props.disabled && typeof props.href !== 'undefined') throw new Error ("You are including a disabled link button. To prevent unintended clicks, it is advisable to remove href to disable this button")
    
    if (outline) {
        outlineColor = "bg-transparent border";
        switch (variant) {
            case "primary":
                bgColor = `border-primary-500 ${!props.disabled && `hover:bg-primary-500 active:border-primary-700 active:bg-primary-700 hover:text-white active:text-white`}`;
                break;
            case "secondary":
                bgColor = `border-secondary-500 ${!props.disabled && `hover:bg-secondary-500 active:border-secondary-700 active:bg-secondary-700 hover:text-white active:text-white`}`;
                break;
            case "accent":
                bgColor = `border-accent-600 ${!props.disabled && `hover:bg-accent-600 active:border-accent-800 active:bg-accent-800 hover:text-white active:text-white`}`;
                break;
            case "danger":
                bgColor = `border-red-500 ${!props.disabled && `hover:bg-red-500 active:border-red-700 active:bg-red-700 hover:text-white active:text-white`}`;
                break;
            case "transparent":
                console.warn("Color may not appear by using transparent variant. Disable outline props to use transparent variant.");
                break;
            default:
                console.error("The only supported values for variant are primary, secondary, accent, danger, and transparent. Otherwise, use tailwind class(es) instead.");
                break;
        }
    } else {
        outlineColor = "border";
        switch (variant) {
            case "primary":
                bgColor = `bg-primary-500 border-primary-500 text-white ${!props.disabled && !overrideHoverColor ? `hover:bg-primary-600 hover:border-primary-600 active:border-primary-700 active:bg-primary-700` : ''}`;
                break;
            case "secondary":
                bgColor = `bg-secondary-500 border-secondary-500 text-white ${!props.disabled && !overrideHoverColor ? `hover:bg-secondary-600 hover:border-secondary-600 active:border-secondary-700 active:bg-secondary-700` : ''}`;
                break;
            case "accent":
                bgColor = `bg-accent-600 border-accent-600 text-white ${!props.disabled && !overrideHoverColor ? `hover:bg-accent-700 hover:border-accent-700 active:border-accent-800 active:bg-accent-800` : ''}`;
                break;
            case "danger":
                bgColor = `bg-red-500 border-red-500 text-white ${!props.disabled && !overrideHoverColor ? `hover:bg-red-600 hover:border-red-600 active:border-red-700 active:bg-red-700` : ''}`;
                break;
            case "transparent":
                bgColor = `border-none bg-transparent text-white ${!props.disabled && !overrideHoverColor ? `hover:bg-black dark:hover:bg-white hover:bg-opacity-10 dark:hover:bg-opacity-10 active:bg-black dark:active:bg-white active:bg-opacity-25 dark:active:bg-opacity-25` : ''}`
                break;
            default:
                console.error("The only supported values for variant are primary, secondary, accent, danger, and transparent. Otherwise, use tailwind class(es) instead.");
                break;
        }
    }
    return (
        <ButtonTag
            {...props}
            ref={ref}
            className={`inline-block align-middle ${outlineColor} ${bgColor} px-4 py-2 transition-all rounded-md ${props.disabled && `opacity-40 cursor-not-allowed`} no-underline ${props.className ? props.className : ``}`}
        >
            {icon == "iconOnly" ? iconValue : icon == "left" &&
                <span className="mr-2">
                    {iconValue}
                </span>
            }
            <span className={icon == "iconOnly" ? "sr-only" : ""}>
                {props.children}
            </span>
            {icon == "right" &&
                <span className="ml-2">
                    {iconValue}
                </span>
            }
        </ButtonTag>
    );
})

Button.defaultProps = {
    variant: "primary",
    type: "button"
}

Button.displayName = "Button";

export default Button;