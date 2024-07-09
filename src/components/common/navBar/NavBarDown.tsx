import { useNavigate } from "react-router-dom"
import { HomeIcon } from "../../utils/icons/HomeIcon"
import { Menu } from "../../utils/icons/nav-icons/Menu"
import { Profile } from "../../utils/icons/Profile"

export const NavBarDown = () => {
    const navigate = useNavigate()

    return (
        <div className="fixed bottom-0 z-50 shadow-2xl shadow-gray-700 dark:shadow-gray-400 flex items-center w-full h-20 bg-white dark:bg-[#242424] -translate-x-1/2 justify-evenly left-1/2 border-radius">
            <HomeIcon onClick={() => navigate("/")} />
            <Profile />
            <Menu />
        </div>
    )
}
