import { HomeIcon } from "../../utils/icons/HomeIcon"
import { Menu } from "../../utils/icons/Menu"
import { Profile } from "../../utils/icons/Profile"

export const NavBarDown = () => {
    return (
        <div className="fixed bottom-0 flex items-center w-full h-20 -translate-x-1/2 justify-evenly left-1/2 border-radius">
            <HomeIcon />
            <Profile />
            <Menu />
        </div>
    )
}
