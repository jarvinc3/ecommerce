import { Add } from "../../utils/icons/Add"
import { Delete } from "../../utils/icons/Delete"
import { Less } from "../../utils/icons/Less"

export const CartComponent = () => {
    return (
        <div className="relative bg-white dark:bg-[#242424] transition-all duration-300 flex gap-5 flex-col justify-start w-full overflow-y-scroll custom-scrollbar">
            <div className="flex items-center justify-between w-full gap-5 pb-3 border-b h-36 md:h-44 xl:h-72">
                <div className="flex items-center justify-start h-32 gap-5">
                    <div className="flex items-center h-full">
                        <img className="w-24 md:w-32 xl:w-52 rounded-2xl" src="https://inyourshoe.com/cdn/shop/products/white-hoodie-plain-hoodies-in-your-shoe-879927.jpg?v=1668057935" alt="" />
                    </div>
                    <div className="flex flex-col justify-between h-32 md:h-40 xl:h-64">
                        <h2 className="text-xl font-semibold text-black md:text-3xl dark:text-white">Product name</h2>
                        <div className="flex items-center w-full gap-3 text-black dark:text-white">
                            <span className="w-9 h-9 rounded-full dark:bg-slate-200 bg-[#313131] border border-black flex items-center justify-center dark:text-black text-white">M</span>
                            <span className="w-9 h-9 rounded-full bg-[#f3f7b3] border border-black"></span>
                        </div>
                        <ul className="flex items-center gap-3 text-black dark:text-white">
                            <li className="p-1 rounded-xl bg-slate-200 dark:bg-[#313131] text-lg"><Less /></li>
                            <li className="p-1 text-lg">01</li>
                            <li className="p-1 rounded-xl bg-slate-200 dark:bg-[#313131]" ><Add /></li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-between h-32 gap-3 md:h-full">
                    <h2 className="text-lg font-semibold text-black md:text-2xl dark:text-white">RD$500</h2>
                    <Delete />
                </div>
            </div>
            <div className="flex items-center justify-between w-full gap-5 pb-3 border-b h-36 md:h-44 xl:h-72">
                <div className="flex items-center justify-start h-32 gap-5">
                    <div className="flex items-center h-full">
                        <img className="w-24 md:w-32 xl:w-52 rounded-2xl" src="https://inyourshoe.com/cdn/shop/products/white-hoodie-plain-hoodies-in-your-shoe-879927.jpg?v=1668057935" alt="" />
                    </div>
                    <div className="flex flex-col justify-between h-32 md:h-40 xl:h-64">
                        <h2 className="text-xl font-semibold text-black md:text-3xl dark:text-white">Product name</h2>
                        <div className="flex items-center w-full gap-3 text-black dark:text-white">
                            <span className="w-9 h-9 rounded-full dark:bg-slate-200 bg-[#313131] border border-black flex items-center justify-center dark:text-black text-white">M</span>
                            <span className="w-9 h-9 rounded-full bg-[#f3f7b3] border border-black"></span>
                        </div>
                        <ul className="flex items-center gap-3 text-black dark:text-white">
                            <li className="p-1 rounded-xl bg-slate-200 dark:bg-[#313131] text-lg"><Less /></li>
                            <li className="p-1 text-lg">01</li>
                            <li className="p-1 rounded-xl bg-slate-200 dark:bg-[#313131]" ><Add /></li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-between h-32 gap-3 md:h-full">
                    <h2 className="text-lg font-semibold text-black md:text-2xl dark:text-white">RD$500</h2>
                    <Delete />
                </div>
            </div>
            <div className="flex items-center justify-between w-full gap-5 pb-3 border-b h-36 md:h-44 xl:h-72">
                <div className="flex items-center justify-start h-32 gap-5">
                    <div className="flex items-center h-full">
                        <img className="w-24 md:w-32 xl:w-52 rounded-2xl" src="https://inyourshoe.com/cdn/shop/products/white-hoodie-plain-hoodies-in-your-shoe-879927.jpg?v=1668057935" alt="" />
                    </div>
                    <div className="flex flex-col justify-between h-32 md:h-40 xl:h-64">
                        <h2 className="text-xl font-semibold text-black md:text-3xl dark:text-white">Product name</h2>
                        <div className="flex items-center w-full gap-3 text-black dark:text-white">
                            <span className="w-9 h-9 rounded-full dark:bg-slate-200 bg-[#313131] border border-black flex items-center justify-center dark:text-black text-white">M</span>
                            <span className="w-9 h-9 rounded-full bg-[#f3f7b3] border border-black"></span>
                        </div>
                        <ul className="flex items-center gap-3 text-black dark:text-white">
                            <li className="p-1 rounded-xl bg-slate-200 dark:bg-[#313131] text-lg"><Less /></li>
                            <li className="p-1 text-lg">01</li>
                            <li className="p-1 rounded-xl bg-slate-200 dark:bg-[#313131]" ><Add /></li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-between h-32 gap-3 md:h-full">
                    <h2 className="text-lg font-semibold text-black md:text-2xl dark:text-white">RD$500</h2>
                    <Delete />
                </div>
            </div>
        </div>
    )
}
