import { useNavigate } from "react-router-dom"
import { BagIcon } from "../components/utils/icons/Bag"
import { Back } from "../components/utils/icons/Back"
import { CartComponent } from "../components/common/cart/CartComponent"


export const Cart = () => {
    const navigate = useNavigate()
    return (
        <div className="relative bg-white transition-all duration-300 dark:bg-[#242424] w-screen h-screen overflow-y-hidden">
            <section className="fixed top-0 left-0 z-50 flex items-center justify-between w-full px-5 py-3 bg-white dark:bg-[#242424] transition-all duration-300 shadow-lg">
                <div onClick={() => navigate("/")} className="p-3 bg-white dark:bg-[#242424] md:shadow-2xl rounded-2xl md:shadow-gray-400 md:dark:shadow-gray-950 cursor-pointer">
                    <Back />
                </div>
                <h2 className="text-3xl font-medium text-black dark:text-white">Carrito</h2>
                <BagIcon cart={12} />
            </section>
            <section className="w-full h-full p-5 mt-20">
                <CartComponent />
            </section> 
        </div>
    )
}
