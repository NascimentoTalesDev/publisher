"use client"

interface InputProps {
    type: string;
    label: string;
}

const Input = ({ type, label, ...props }: InputProps ) => {

    return (
        <div className="relative">
            <input 
                type={type}
                className="
                block
                px-1
                pt-4
                pb-0
                w-full
                text-md
                text-white
                bg-transparent
                appearance-none
                focus:outline-none
                focus:ring-0
                peer
                border-b    
                "
                placeholder=" "
                {...props}
            />
            <label 
                className="
                    absolute
                    text-md
                    text-zinc-400
                    duration-150
                    transform
                    -translate-y-3
                    scale-75
                    top-3
                    -z-10
                    origin-[0]
                    left-1
                    peer-placeholder-shown:scale-100
                    peer-placeholder-shown:translate-y-[2px]
                    peer-focus:scale-75    
                    peer-focus:-translate-y-5  
                "
                >{label}</label>
        </div>
    );
}
 
export default Input;