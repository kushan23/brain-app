/* eslint-disable @typescript-eslint/no-explicit-any */
export interface ButtonProps {
    variant: "primary" | "secondary";
    size: "sm" | "md" | "lg";
    text: string;
    startIcon?: any;
    endIcon?: any;
    onClick?: () => void;
    loading?: boolean 
}

const variantStyles = {
    "primary": "bg-purple-600 text-white",
    "secondary": "bg-purple-300 text-purple-600"
}
const defaultStyles = "rounded-md font-light flex"

const sizeStyles = {
    "sm": "py-1 px-2 text-sm rounded-sm", 
    "md": "py-2 px-4 text-md rounded-md",
    "lg": "py-4 px-6 text-xl rounded-2xl"
}

export function Button ({variant, text,size, startIcon, endIcon, onClick}: ButtonProps){
    return <button onClick={onClick} className= {`${variantStyles[variant]} ${defaultStyles} ${sizeStyles[size]}`}> 
    
    <div className="flex items-center">
    {startIcon}
    <div className="pl-2 pr-2">
    {text}
    </div>
    {endIcon}
    </div>
    </button>

}

 