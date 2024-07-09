import { Add } from "../../../utils/icons/Add";
import { Less } from "../../../utils/icons/Less";
import { getOneInterface } from "../../../utils/interfaces/getOne.interface";

interface ProductInfoProps {
    product: getOneInterface
}

export const ProductInfo = ({ product }: ProductInfoProps) => {
    return (
        <div className="flex flex-col items-start gap-5 p-4 md:gap-10 md:w-1/2">
            <h2 className="text-3xl font-medium text-black dark:text-white">{product.name}</h2>
            <div className="flex items-center justify-between w-full">
                <h2 className="text-3xl font-semibold text-black dark:text-white">RD${product.price}</h2>
                <ul className="flex items-center gap-3 text-black dark:text-white">
                    <li className="p-2 rounded-xl bg-slate-200 dark:bg-[#313131] text-lg"><Less /></li>
                    <li className="p-2 text-lg">01</li>
                    <li className="p-2 rounded-xl bg-slate-200 dark:bg-[#313131]" ><Add /></li>
                </ul>
            </div>
            <div className="flex items-center justify-between w-full">
                <div>
                    <h2 className="text-xl font-medium text-black dark:text-white">Color</h2>
                    <ul className="flex items-center gap-3">
                        <li className="w-9 h-9 rounded-full bg-[#eee7da] border-2 border-blue-500"></li>
                        <li className="w-9 h-9 rounded-full bg-[#FFFFFF] border border-black"></li>
                        <li className="w-9 h-9 rounded-full bg-[#75e0e2] border border-black"></li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-xl font-medium text-black dark:text-white">Size</h2>
                    <ul className="flex items-center gap-3">
                        <li className="w-9 h-9 rounded-full bg-[#474747] border-2 border-blue-500 flex items-center justify-center text-white">S</li>
                        <li className="w-9 h-9 rounded-full bg-slate-200 dark:bg-[#313131] border border-black flex items-center justify-center text-black dark:text-white">M</li>
                        <li className="w-9 h-9 rounded-full bg-slate-200 dark:bg-[#313131] border border-black flex items-center justify-center text-black dark:text-white">L</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
