interface Props {
    open: boolean
 }

export const Menu =  ({ open }: Props) => {
    return (
        <div className="flex flex-col items-center justify-between h-6 cursor-pointer">
            <div className={`w-8 h-0.5 bg-gray-700 dark:bg-gray-200 transition-all duration-500 ${open ? "rotate-45 translate-y-[11.5px]" : ""}`}></div>
            <div className={`w-8 h-0.5 bg-gray-700 dark:bg-gray-200 transition-all duration-500 ${open ? "opacity-0" : "opacity-100"}`}></div>
            <div className={`w-8 h-0.5 bg-gray-700 dark:bg-gray-200 transition-all duration-500 ${open ? "-rotate-45 -translate-y-[11.5px]" : ""}`}></div>
        </div>
    )
}
