import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Closet } from "../../../utils/icons/categories-icons/Closet";
import { Combined } from "../../../utils/icons/categories-icons/Combined";
import { Hoodie } from "../../../utils/icons/categories-icons/Hoodie";
import { Shorts } from "../../../utils/icons/categories-icons/Shorts";
import { Sweater } from "../../../utils/icons/categories-icons/Sweater";
import { Tshirt } from "../../../utils/icons/categories-icons/Tshirt";
import { Waffit } from "../../../utils/icons/categories-icons/Waffit";
import { SetsIcon } from "../../../utils/icons/categories-icons/SetsIcon";

interface CategoriesProps { 
    setFilter: (category: string) => void
}

export const Categories = ({ setFilter }: CategoriesProps) => {
    const [open, setOpen] = useState(true);
    const [categories, setCategories] = useState<number>(0);

    const categoriesList = [
        { name: "Todos", value: '', icon: <Closet /> },
        { name: "Hoodies", value: 'Hoodies' , icon: <Hoodie /> },
        { name: "Sweater", value: 'Sweater', icon: <Sweater /> },
        { name: "T-Shirts", value: 'T-Shirts', icon: <Tshirt /> },
        { name: "Waffit", value: 'Waffit', icon: <Waffit /> },
        { name: "Combi", value: 'Combinados', icon: <Combined /> },
        { name: "Shorts", value: 'Shorts', icon: <Shorts /> },
        { name: "Conjuntos", value: 'Conjuntos', icon: <SetsIcon /> },
    ];

    return (
        <div className="flex flex-col w-full gap-4">
            <div
                onClick={() => setOpen(!open)}
                className="transition-all duration-300 cursor-pointer hover:scale-105 active:scale-100 flex justify-center items-center h-4 px-8 py-5 border-top bg-slate-200 dark:bg-[#474747]"
            >
                <h2 className="text-center transition-all duration-300 md:text-xl dark:text-white text-slate-900 ">Categorias</h2>
            </div>
            <AnimatePresence>
                {open && (
                    <ul className="grid w-full grid-cols-4 gap-4 links-container xl:grid-cols-1 dark:text-white text-slate-900">

                        {categoriesList.map((category, index) => (
                            <div className="w-full h-full" key={category.value}>
                                <motion.li
                                    onClick={() => {
                                        setCategories(index);
                                        setFilter(category.value);
                                    }}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 1 }}
                                    className={`w-full h-full transition-all duration-300 cursor-pointer py-2 md:py-4 rounded-xl justify-between flex items-center flex-col gap-2 ${index === categories
                                        ? " md:bg-slate-300 md:dark:bg-[#474747] border-y-2 border-slate-300 dark:border-[#474747] md:border-none scale-105"
                                        : " md:bg-slate-200 md:dark:bg-[#313131]"
                                        }`}
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.1, delay: index * 0.05 }}
                                >
                                    {category.icon}
                                    <h2 className="text-center">{category.name}</h2>
                                </motion.li>
                            </div>
                        ))}
                    </ul>
                )}
            </AnimatePresence>
        </div>
    );
};
