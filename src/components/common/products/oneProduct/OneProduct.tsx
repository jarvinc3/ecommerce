import { useParams } from "react-router-dom";
import { data } from "../../../../data/data";
import { ImageComponent } from "./ImageComponent";
import { useEffect, useState } from "react";
import { ProductInfo } from "./ProductInfo";
import { MayBeInteresed } from "./MayBeInteresed";

export const OneProduct = () => {
    const [image, setImage] = useState<string>('');
    const [filter, setFilter] = useState<string>('');
    const { id } = useParams();
    const product = data.find((p) => p.id === parseInt(id as string));

    useEffect(() => {
        if (product) {
            setImage(product.image);
            setFilter(product.category);
        }
    }, [product]);

    if (!product) {
        return (
            <div>Producto no encontrado</div>
        );
    }

    return (
        <div className="relative gap-4 bg-white z-50 dark:bg-[#242424] pb-28 transition-all duration-300 h-auto flex flex-col justify-start w-full">
            <section className="w-full md:flex">
                <ImageComponent image={image} />
                <ProductInfo product={product} />
            </section>
            <section className="flex flex-col w-full gap-3 px-4">
                <div className="flex items-center justify-start w-full">
                    <h2 className="font-medium text-black dark:text-white">Te puede interesar</h2>
                    <div className=" border-t w-full h-[2px]"></div>
                </div>
                <MayBeInteresed filter={filter} />
            </section>
        </div>
    )
}
