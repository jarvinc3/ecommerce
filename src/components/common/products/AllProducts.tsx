import { useNavigate } from "react-router-dom"
import { data, dataInterface } from "../../../data/data"
import { BagIcon } from "../../utils/icons/Bag"
import { useEffect, useState } from "react"

interface AllProductsProps {
    filter: string
    tableView?: boolean
}

export const AllProducts = ({ filter }: AllProductsProps) => {
    const [dataFiltered, setDataFiltered] = useState<dataInterface[]>([])
    const navigate = useNavigate()
    const Navigate = (id: number) => {
        navigate(`/producto/${id}`)
    }

    useEffect(() => {
        if (filter) {
            setDataFiltered(data.filter((product) => product.category === filter));
        } else {
            setDataFiltered(data);
        }
    }, [filter]);

    return (
        <div className="flex flex-wrap justify-center w-full gap-4 bg-white dark:bg-[#242424] transition-all duration-300 pb-36 ">
            {dataFiltered.map((product) => (
                <section key={product.id} onClick={() => Navigate(product.id)} className="flex w-[47%] md:w-[23%] xl:w-[18%] flex-col dark:text-white text-slate-900 gap-3 transition-all duration-300 cursor-pointer hover:scale-[1.02] active:scale-100">
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
