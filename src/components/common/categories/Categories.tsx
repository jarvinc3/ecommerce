import { useState } from "react"
import { Closet } from "../../utils/icons/categories-icons/Closet"
import { Combined } from "../../utils/icons/categories-icons/Combined"
import { Hoodie } from "../../utils/icons/categories-icons/Hoodie"
import { Shorts } from "../../utils/icons/categories-icons/Shorts"
import { Sweater } from "../../utils/icons/categories-icons/Sweater"
import { Tshirt } from "../../utils/icons/categories-icons/Tshirt"
import { Waffit } from "../../utils/icons/categories-icons/Waffit"


export const Categories = () => {
    const [open, setOpen] = useState(true)

    return (
        <div className="flex flex-col w-full gap-4">
            <div onClick={() => setOpen(!open)} className="md:hidden transition-all duration-300 hover:scale-105 active:scale-100 flex justify-center -left-14 top-[170px] items-center h-4 px-8 py-5 border-top bg-slate-200 dark:bg-[#474747] ">
                <h2 className="text-center md:text-xl">Categorias</h2>
            </div>
            {open &&
                <ul className="grid w-full grid-cols-4 gap-4 links-container md:ml-4 md:grid-cols-8">
                    <li className="links link1 md:bg-slate-300 bg-slate-200 dark:bg-[#474747] md:dark:bg-[#474747] w-full cursor-pointer py-2 md:py-4 rounded-xl flex items-center flex-col gap-2 transition-all duration-300 hover:scale-105 scale-105 active:scale-100">
                        <Closet />
                        <h2 className="font-bold text-center">Todos</h2>
                    </li>
                    <li className="links link2 md:bg-slate-200 md:dark:bg-[#313131] w-full cursor-pointer py-2 md:py-4 rounded-xl flex items-center flex-col gap-2 transition-all duration-300 hover:scale-105 active:scale-100">
                        <Hoodie />
                        <h2 className="text-center">Hoodies</h2>
                    </li>
                    <li className="links link3 md:bg-slate-200 md:dark:bg-[#313131] w-full cursor-pointer py-2 md:py-4 rounded-xl flex items-center flex-col gap-2 transition-all duration-300 hover:scale-105 active:scale-100">
                        <Sweater />
                        <h2 className="text-center">Sweater</h2>
                    </li>
                    <li className="links link4 md:bg-slate-200 md:dark:bg-[#313131] w-full cursor-pointer py-2 md:py-4 rounded-xl flex items-center flex-col gap-2 transition-all duration-300 hover:scale-105 active:scale-100">
                        <Tshirt />
                        <h2 className="text-center">T-Shirts</h2>
                    </li>
                    <li className="links link5 md:bg-slate-200 md:dark:bg-[#313131] w-full cursor-pointer py-2 md:py-4 rounded-xl flex items-center flex-col gap-2 transition-all duration-300 hover:scale-105 active:scale-100">
                        <Waffit />
                        <h2 className="text-center">Polos Waffit</h2>
                    </li>
                    <li className="links link6 md:bg-slate-200 md:dark:bg-[#313131] w-full cursor-pointer py-2 md:py-4 rounded-xl flex items-center flex-col gap-2 transition-all duration-300 hover:scale-105 active:scale-100">
                        <Combined />
                        <h2 className="text-center">Combinados</h2>
                    </li>
                    <li className="links link7 md:bg-slate-200 md:dark:bg-[#313131] w-full cursor-pointer py-2 md:py-4 rounded-xl flex items-center flex-col gap-2 transition-all duration-300 hover:scale-105 active:scale-100">
                        <Shorts />
                        <h2 className="text-center">Shorts</h2>
                    </li>
                    <li className="links link8 md:bg-slate-200 md:dark:bg-[#313131] w-full cursor-pointer py-2 md:py-4 rounded-xl flex items-center  md:justify-between flex-col gap-4 md:gap-2 transition-all duration-300 hover:scale-105 active:scale-100">
                        <div className="flex items-center gap-2">
                            <Shorts width={"w-8 h-8 md:w-16 md:h-16"} />
                            <Tshirt width={"w-8 h-8 md:w-16 md:h-16"} />
                        </div>
                        <h2 className="text-center">Conjuntos</h2>
                    </li>
                </ul>
            }
        </div>
    )
}