import { useState } from "react";
import { Add } from "../../../utils/icons/Add";
import { Less } from "../../../utils/icons/Less";
import { getOneInterface } from "../../../utils/interfaces/getOne.interface";

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
        </div>
    )
}
