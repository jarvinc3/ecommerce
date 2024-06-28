import { Categories } from "../components/common/categories/Categories"
import { AllProducts } from "../components/common/products/AllProducts"
import { MainLayout } from "../components/layouts/MainLayout"

export const Home = () => {
    return (
        <div className="flex w-full">
            <div className="hidden rotate-90 transition-all duration-300 hover:scale-105 active:scale-100 absolute md:flex justify-center -left-14 top-[170px] items-center h-4 px-8 py-5 border-top bg-slate-200 dark:bg-[#474747] ">
                <h2 className="text-center md:text-xl">Categorias</h2>
            </div>
            <MainLayout>
                <div className="relative flex flex-col items-start w-full gap-10 px-4 pt-5">
                    <Categories />
                    <AllProducts />
                </div>
            </MainLayout>
        </div>
    )
}
