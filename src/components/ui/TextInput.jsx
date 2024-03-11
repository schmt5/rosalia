import { cn } from "@/lib/utils";
import { forwardRef } from "react";

export const TextInput = forwardRef(function TextInput({ label, name, className, ...props }, ref) {

    return (
        <div className="bg-neutral-100 has-[:focus-within]:bg-neutral-200 flex flex-col p-4 rounded-md mb-6">
            <label
                className="text-sm font-semibold"
                htmlFor={name}
            >
                {label}
            </label>
            <input
                {...props}
                ref={ref}
                className={cn('bg-inherit outline-none disabled:opacity-65', className)}
                name={name}
            />
        </div>
    )
})