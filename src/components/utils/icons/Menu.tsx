import { useState } from "react"


export const Menu = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className="flex flex-col items-center justify-between h-6 cursor-pointer" onClick={() => setOpen(!open)}>
            <div className={`w-8 h-0.5 bg-gray-700 dark:bg-gray-200 transition-transform duration-500 ${open ? "rotate-45 translate-y-[11.5px]" : ""}`}></div>
            <div className={`w-8 h-0.5 bg-gray-700 dark:bg-gray-200 transition duration-500 ${open ? "opacity-0" : "opacity-100"}`}></div>
            <div className={`w-8 h-0.5 bg-gray-700 dark:bg-gray-200 transition-transform duration-500 ${open ? "-rotate-45 -translate-y-[11.5px]" : ""}`}></div>
        </div>
    )
}
