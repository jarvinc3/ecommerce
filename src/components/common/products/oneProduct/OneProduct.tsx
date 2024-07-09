import { useParams } from "react-router-dom";
import { data } from "../../../../data/data";
import { BagIcon } from "../../../utils/icons/Bag";
import { ImageComponent } from "./ImageComponent";
import { useEffect, useState } from "react";
import { ProductInfo } from "./ProductInfo";

export const OneProduct = () => {
    const [image, setImage] = useState<string>('');
    const { id } = useParams();
    const product = data.find((p) => p.id === parseInt(id as string));

    useEffect(() => {
        if (product) {
            setImage(product.image);
        }
    }, [product]);

    if (!product) {
        return <div>Producto no encontrado</div>;
    }

    return (
        <div className="relative bg-white z-50 dark:bg-[#242424] pb-28 transition-all duration-300 h-auto flex flex-col justify-start w-full">
            <div className="xl:flex">
                <section className="w-full md:flex">
                    <ImageComponent image={image} />
                    <ProductInfo product={product} />
                </section>
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
        </div>
    )
}
