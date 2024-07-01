import { data } from "../../../data/data"
import { BagIcon } from "../../utils/icons/Bag"


export const AllProducts = () => {
    return (
        <div className="grid grid-cols-2 gap-4 xl:grid-cols-4">
            {data.map((product) => (
                <section key={product.id} className="flex flex-col gap-3 transition-all duration-300 cursor-pointer hover:scale-[1.02] active:scale-100">
                    <div className="w-36 md:w-auto rounded-xl">
                        <img className="w-full rounded-xl" src={product.image} alt="ropa imagen" />
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
