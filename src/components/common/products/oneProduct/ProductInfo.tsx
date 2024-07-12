import { useState } from "react";
import { Add } from "../../../utils/icons/Add";
import { Less } from "../../../utils/icons/Less";
import { getOneInterface } from "../../../utils/interfaces/getOne.interface";
import { BagIcon } from "../../../utils/icons/Bag";

interface ProductInfoProps {
    product: getOneInterface
}

export const ProductInfo = ({ product }: ProductInfoProps) => {
    const [counter, setCounter] = useState<number>(1)
    const [isColor, setIsColor] = useState<number>(0)
    const [isSize, setIsSize] = useState<number>(0)

    const colors = [
        "#E5E5E5",
        "#313131",
        "#242424",
        "#f3f7b3",
        "#eee7da",
        "#75e0e2",
    ]

    const sizes = [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "XXL",
    ]

    return (
        <div className="flex flex-col items-start gap-5 p-4 md:gap-10 md:w-1/2">
            <h2 className="text-3xl font-medium text-black dark:text-white">{product.name}</h2>
            <div className="flex items-center justify-between w-full">
                <h2 className="text-3xl font-semibold text-black dark:text-white">RD${product.price}</h2>
                <ul className="flex items-center gap-3 text-black dark:text-white">
                    <li onClick={() => setCounter(counter > 1 ? counter - 1 : counter)} className="p-2 rounded-xl bg-slate-200 dark:bg-[#313131] text-lg"><Less /></li>
                    <li className="p-2 text-lg">{counter}</li>
                    <li onClick={() => setCounter(counter + 1)} className="p-2 rounded-xl bg-slate-200 dark:bg-[#313131]" ><Add /></li>
                </ul>
            </div>
            <div className="flex items-center justify-between w-full">
                <div>
                    <h2 className="text-xl font-medium text-black dark:text-white">Color</h2>
                    <ul className="grid items-center grid-cols-3 gap-3">
                        {colors.map((color, index) => (
                            <li key={index} onClick={() => setIsColor(index)} className={`w-9 h-9 cursor-pointer transition-all duration-300 rounded-full bg-[${color}] border-2 ${isColor === index ? "border-blue-500" : "border-black"}`}></li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h2 className="text-xl font-medium text-black dark:text-white">Size</h2>
                    <ul className="grid grid-cols-3 gap-3">
                        {sizes.map((size, index) => (
                            <li key={index} onClick={() => setIsSize(index)} className={`w-9 h-9 cursor-pointer transition-all duration-300 rounded-full flex items-center justify-center text-black dark:text-white ${isSize === index ? "bg-[#474747] text-white border-2 border-blue-500" : "  bg-slate-200 dark:bg-[#313131] border border-black"}`}>{size}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <section className="px-4">
                    <div>
                        <h2 className="text-3xl font-medium text-black dark:text-white">Descripcion del producto</h2>
                        <div className="mt-6">
                            <p className="text-black dark:text-white">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam enim sapiente ad fugiat ut! Veritatis, praesentium impedit. Amet ipsum quam dolore dignissimos ipsam minima sed dolores illo quo assumenda ea soluta alias, doloremque nemo consectetur cum quidem aperiam modi saepe?</p>
                        </div>
                    </div>
                    <div className="fixed xl:relative bottom-0 flex justify-between w-full gap-4 p-3 -translate-x-1/2 left-1/2 bg-white z-50 dark:bg-[#242424] transition-all duration-300 ">
                        <button className="p-2 rounded-2xl bg-slate-200 dark:bg-[#313131]" type="button" title="Add to cart"><BagIcon add="+" /></button>
                        <button className="p-2 rounded-2xl dark:bg-slate-400 bg-[#313131] w-full dark:text-black text-white text-xl font-medium" type="button">Comprar ahora</button>
                    </div>
                </section>
        </div>
    )
}
