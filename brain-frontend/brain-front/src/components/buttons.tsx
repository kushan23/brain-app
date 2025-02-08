/* eslint-disable @typescript-eslint/no-explicit-any */
export interface ButtonProps {
    variant: "primary" | "secondary";
    size: "sm" | "md" | "lg";
    text: string;
    startIcon?: any;
    endIcon?: any;
    onClick: () => void;
}

const variantStyles = {
    "primary": "bg-purple-600 text-white",
    "secondary": "bg-purple-300 text-purple-600"
}
const defaultStyles = "rounded-md flex"

const sizeStyles = {
    "sm": "py-1 px-2 text-sm rounded-sm", 
    "md": "py-2 px-4 text-md rounded-md",
    "lg": "py-4 px-6 text-xl rounded-xl"
}

export const Button = (props: ButtonProps) => {

    return <button className= {`${variantStyles[props.variant]} ${defaultStyles} ${sizeStyles[props.size]}`}> 
    <div className="flex items-center">
    {props.startIcon}
    <div className="pl-2 pr-2">
    {props.text}
    </div>
    {props.endIcon}
    </div>
    </button>

}

 