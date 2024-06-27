import { Hoodie } from "../../utils/icons/categories-icons/Hoodie"
import { Sweater } from "../../utils/icons/categories-icons/Sweater"
import { Tshirt } from "../../utils/icons/categories-icons/Tshirt"
import { Waffit } from "../../utils/icons/categories-icons/Waffit"


export const Categories = () => {
    return (
        <div className="flex flex-col gap-4">
            <h2>Elige una categoria</h2>
            <ul className="grid w-full grid-cols-4 gap-4 md:grid-cols-8">
                <li className="md:bg-slate-200 md:dark:bg-[#313131] w-full cursor-pointer py-4 rounded-xl flex items-center flex-col gap-2">
                    <Hoodie />
                    <h2>Hoodies</h2>
                </li>
                <li className="md:bg-slate-200 md:dark:bg-[#313131] w-full cursor-pointer py-4 rounded-xl flex items-center flex-col gap-2">
                    <Sweater />
                    <h2>Sweater</h2>
                </li>
                <li className="md:bg-slate-200 md:dark:bg-[#313131] w-full cursor-pointer py-4 rounded-xl flex items-center flex-col gap-2">
                    <Tshirt />
                    <h2>T-Shirts</h2>
                </li>
                <li className="md:bg-slate-200 md:dark:bg-[#313131] w-full cursor-pointer py-4 rounded-xl flex items-center flex-col gap-2">
                    <Waffit />
                    <h2>Polos Waffit</h2>
                </li>
            </ul>
        </div>
    )
}