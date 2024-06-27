import { BagIcon } from "../../utils/icons/Bag"
import { Menu } from "../../utils/icons/nav-icons/Menu"
import { NavBarSearch } from "./NavBarSearch"

export const Nav = () => {
    return (
        <div className="fixed top-0 flex items-center justify-between w-full gap-2 px-3 pt-5 -translate-x-1/2 md:pt-8 md:px-10 left-1/2">
            <NavBarSearch />
            <div className="flex items-center gap-8">
                <BagIcon cart={12} />
                <div className="hidden md:block"><Menu /></div>
            </div>
        </div>
    )
}
