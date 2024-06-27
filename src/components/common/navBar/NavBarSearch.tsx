import { Search } from "../../utils/icons/nav-icons/Search"
import { Filter } from '../../utils/icons/nav-icons/Filter';


export const NavBarSearch = () => {
    return (
        <div className="w-full md:w-1/2">
            <form className="">
                <label
                    htmlFor="default-search"
                    className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                >
                    Search
                </label>
                <div className="relative">
                    <div className="absolute inset-y-0 flex items-center pointer-events-none start-0 ps-3">
                        <Search />
                    </div>
                    <input
                        type="search"
                        id="default-search"
                        className="block w-full p-4 text-sm text-gray-900 border border-gray-300 outline-none rounded-xl ps-10 bg-slate-100 dark:bg-[#313131] focus:ring-slate-500 focus:border-slate-500 dark:placeholder-gray-400 dark:text-white"
                        placeholder="Buscar"
                    />
                    <div className="absolute inset-y-0 flex items-center cursor-pointer end-2 pe-3">
                        <Filter />
                    </div>
                </div>
            </form>
        </div>
    )
}
