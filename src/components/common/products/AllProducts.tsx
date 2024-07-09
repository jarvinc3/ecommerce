import { useNavigate } from "react-router-dom"
import { data } from "../../../data/data"
import { BagIcon } from "../../utils/icons/Bag"


export const AllProducts = () => {
    const navigate = useNavigate()
    const Navigate = (id: number) => {
        navigate(`/producto/${id}`)
     }
    
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:grid-cols-6 bg-white dark:bg-[#242424] transition-all duration-300 pb-36 ">
            {data.map((product) => (
                <section key={product.id} onClick={() => Navigate(product.id)} className="flex flex-col dark:text-white text-slate-900 gap-3 transition-all duration-300 cursor-pointer hover:scale-[1.02] active:scale-100">
                    <div className="w-36 md:w-auto rounded-xl">
                        <img className="w-full rounded-xl" src={product.image} alt="clothes image" />
                    </div>
                    <div className="flex items-start justify-between">
                        <div className="flex flex-col gap-1">
                            <h2 className="md:text-xl">{product.name}</h2>
                            <p className="text-lg font-bold">RD${product.price}</p>
                        </div>
                        <BagIcon add="+" />
                    </div>
                </section>
            ))}

        </div>
    )
}
