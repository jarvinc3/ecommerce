import { Nav } from "../common/navBar/Nav"
import { NavBarDown } from "../common/navBar/NavBarDown"

interface MainLayoutProps {
    children: React.ReactNode
}

export const MainLayout = ({ children }: MainLayoutProps) => {
    return (
        <div className="relative w-screen h-screen px-3 pt-24 md:px-11">
            <div className="">
                <Nav />
            </div>

            {children}

            <div className="md:hidden">
                <NavBarDown />
            </div>
        </div>
    )
}
