import { Categories } from "../components/common/categories/Categories"
import { AllProducts } from "../components/common/products/AllProducts"
import { MainLayout } from "../components/layouts/MainLayout"

export const Home = () => {
    return (
        <div className="flex bg-white dark:bg-[#242424] transition-all duration-300  w-full">
            <MainLayout>
                <div className="relative bg-white dark:bg-[#242424] transition-all duration-300  flex flex-col items-start w-full gap-10 px-4 md:pt-5">
                    <Categories />
                    <AllProducts />
                </div>
            </MainLayout>
        </div>
    )
}
