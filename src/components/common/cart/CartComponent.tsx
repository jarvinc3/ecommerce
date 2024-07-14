import { useState } from "react"
import { Delete } from "../../utils/icons/Delete"
import { CartProducts } from "./CartProducts"

export const CartComponent = () => {
    const [checked, setChecked] = useState<boolean>(true)
    return (
        <div className="relative bg-white dark:bg-[#242424] transition-all duration-300 flex xl:flex-row gap-5 flex-col justify-start xl:px-48 w-full">
            <section className="w-full xl:w-3/5 xl:bg-[#f1f5f9] xl:p-2 xl:px-3 rounded-xl xl:dark:bg-[#303030] xl:border xl:dark:border-none transition-all duration-300">
                <div className="flex items-center justify-start w-full gap-5 pb-3 border-b">
                    <div className="flex items-center justify-start w-[55%] md:w-auto gap-2">
                        <label htmlFor="checkbox" className={`relative h-6 w-6 transition-all duration-300 cursor-pointer rounded-full dark:text-white text-[#313131] border-2 border-[#313131] dark:border-white ${checked ? ' bg-[#313131] dark:bg-white' : ''}`}> .
                            <input
                                onChange={() => setChecked(!checked)}
                                type="checkbox"
                                name="checkbox"
                                id="checkbox"
                                checked={undefined}
                                className="appearance-none peer"
                            />
                            <svg
                                viewBox="-3.2 -3.2 38.40 38.40"
                                xmlns="http://www.w3.org/2000/svg"
                                className="absolute w-5 h-5 -translate-x-1/2 -translate-y-1/2 fill-white dark:fill-black left-1/2 top-1/2 peer-checked:opacity-0"
                            >
                                <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                                <g
                                    id="SVGRepo_tracerCarrier"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <g id="SVGRepo_iconCarrier">
                                    <path d="M5 16.577l2.194-2.195 5.486 5.484L24.804 7.743 27 9.937l-14.32 14.32z" />
                                </g>
                            </svg>
                        </label>
                        <h2 className="font-medium text-black cursor-pointer dark:text-white">Seleccionar todos</h2>
                    </div>
                    <div className="w-[2px] h-9 bg-[#edeff1]"></div>
                    <div className="flex items-center justify-start w-[45%] md:w-auto gap-2">
                        <Delete />
                        <h2 className="font-medium text-black cursor-pointer text-font-medium dark:text-white">Eliminar todos</h2>
                    </div>
                </div>
                <div className="h-[80vh] xl:h-[83vh] overflow-y-scroll custom-scrollbar ">
                    <CartProducts checked={checked} setChecked={setChecked} />
                </div>
            </section>
            <section className="fixed xl:relative xl:w-2/5 bottom-0 flex flex-col items-center justify-start w-full border xl:h-[100%] gap-4 p-3 -translate-x-1/2 xl:translate-x-0 xl:left-0 xl:p-3 rounded-xl left-1/2 xl:bg-[#f1f5f9] bg-white z-50 dark:bg-[#242424] xl:dark:bg-[#303030] transition-all duration-300 ">
                <form className="flex items-center justify-between w-full bg-slate-50 shadow-lg dark:bg-[#313131] rounded-lg">
                    <input
                        type="text"
                        className="w-full pl-2 text-base font-semibold text-black bg-transparent dark:text-white outline-0"
                        placeholder="Tienes un cupón de descuento?"
                    />
                    <button type="button" className="dark:bg-slate-400 bg-[#313131] p-3 rounded-tr-lg rounded-br-lg text-white font-semibold transition-colors">Aplicar</button>
                </form>
                <div className="items-center justify-between hidden w-full gap-5 pb-3 xl:flex ">
                    <p className="text-xl font-medium text-black dark:text-white">Subtotal:</p>
                    <h2 className="text-xl font-medium text-black dark:text-white">$500</h2>
                </div>
                <div className="items-center justify-between hidden w-full gap-5 pb-3 xl:flex ">
                    <p className="text-xl font-medium text-black dark:text-white">Descuento:</p>
                    <h2 className="text-xl font-medium text-black dark:text-white">$00</h2>
                </div>
                <div className="flex items-center justify-between w-full gap-5 pb-3">
                    <p className="text-3xl font-medium text-black dark:text-white">Total:</p>
                    <h2 className="text-3xl font-medium text-black dark:text-white">$500</h2>
                </div>
                <button className="p-3 rounded-xl dark:bg-slate-400 bg-[#313131] w-full dark:text-black text-white text-xl font-medium" type="button">Comprar (7 productos)</button>
            </section>
        </div>
    )
}
