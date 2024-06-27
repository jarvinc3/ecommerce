import Categories from "../components/common/categories/Categories"
import { MainLayout } from "../components/layouts/MainLayout"

export const Home = () => {
    return (
        <div className="flex w-full px-3 pt-5">
            <MainLayout>
                <div>
                    <Categories />
                </div>
            </MainLayout>
        </div>
    )
}
