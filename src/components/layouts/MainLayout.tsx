import { Nav } from "../common/navBar/Nav"
import { NavBarDown } from "../common/navBar/NavBarDown"

interface MainLayoutProps {
    children: React.ReactNode
}

export const MainLayout = ({ children }: MainLayoutProps) => {
    return (
        <div className="relative bg-white transition-all duration-300 dark:bg-[#242424] w-screen h-screen px-3 overflow-hidden">
            <div className="z-50 h-[12%]">
                <Nav />
            </div>

            <div className="z-[-1] h-[88%]">{children}</div>

            <div className="z-50 md:hidden">
                <NavBarDown />
            </div>
        </div>
    )
}
