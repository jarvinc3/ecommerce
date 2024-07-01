import { Categories } from "../components/common/categories/Categories"
import { AllProducts } from "../components/common/products/AllProducts"
import { MainLayout } from "../components/layouts/MainLayout"

export const Home = () => {
    return (
        <div className="flex w-full">
            <MainLayout>
                <div className="relative flex flex-col items-start w-full gap-10 px-4 md:pt-5">
                    <Categories />
                    <AllProducts />
                </div>
            </MainLayout>
        </div>
    )
}
