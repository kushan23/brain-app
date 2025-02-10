interface InputProps {
    placeholder: string;
    ref?: any
    type?: string
}


export function Input({placeholder, ref, type}: InputProps) {
    return <div>
        <input placeholder={placeholder} type={type} className="px-4 py-2 pb-2 m-2 border rounded-md"
       ref={ref} ></input>
    </div>
}