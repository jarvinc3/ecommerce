import { OneProduct } from "../components/common/products/oneProduct/OneProduct"
export const Product = () => {
    return (
        <div className="relative bg-white transition-all duration-300 dark:bg-[#242424] w-screen h-screen overflow-y-scroll custom-scrollbar">
            <OneProduct />
        </div>
    )
}
