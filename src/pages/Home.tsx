import { Categories } from "../components/common/products/categories/Categories";
import { AllProducts } from "../components/common/products/AllProducts";
import { MainLayout } from "../components/layouts/MainLayout";
import { useState } from "react";

export const Home = () => {
    const [filter, setFilter] = useState<string>('');
    // const [tableView, setTableView] = useState<boolean>(false);

    return (
        <div className="flex bg-white dark:bg-[#242424] transition-all duration-300 w-full">
            <MainLayout>
                <div className="relative bg-white dark:bg-[#242424] transition-all duration-300 flex flex-col xl:flex-row items-start w-full gap-10 px-4 md:py-5 h-screen overflow-y-scroll xl:overflow-hidden custom-scrollbar ">
                    <div className="relative bg-white dark:bg-[#242424] transition-all duration-300 flex justify-center w-full xl:w-[10%] xl:h-[84.5vh] xl:overflow-y-scroll custom-scrollbar">
                        <Categories setFilter={setFilter} />
                    </div>
                    <div className="relative bg-white dark:bg-[#242424] transition-all duration-300 flex justify-center w-full xl:w-[90%] pb-10 xl:h-[85.5vh] xl:overflow-y-scroll custom-scrollbar">
                        <AllProducts filter={filter} />
                    </div>
                </div>
            </MainLayout>
        </div>
    );
};
