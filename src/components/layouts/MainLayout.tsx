import { useState } from "react"
import { Nav } from "../common/navBar/Nav"
import { NavBarDown } from "../common/navBar/NavBarDown"
import { SideBar } from "./SideBar"

interface MainLayoutProps {
    children: React.ReactNode
}

export const MainLayout = ({ children }: MainLayoutProps) => {
    const [open, setOpen] = useState(false)

    return (
        <div className="relative bg-white transition-all duration-300 dark:bg-[#242424] w-screen h-screen px-3 overflow-hidden">
            <div className="w-full h-full ">
                <div className="z-50 h-[12%]">
                    <Nav open={open} setOpen={setOpen} />
                </div>

                <div className="z-[-1] h-[88%]">{children}</div>

                <div className="z-[100] md:hidden">
                    <NavBarDown open={open} setOpen={setOpen} />
                </div>
            </div>
            <div className={`absolute flex justify-end top-0 h-[93.5vh] md:bottom-0 left-0 w-screen md:h-[100vh] overflow-hidden transition-all duration-300 ${open ? " bg-[#0000006e] z-[90]" : "z-[-10]"} `}>
                <div onClick={() => setOpen(!open)} className="xl:w-[75%] md:w-[60%] w-[40%] h-full"></div>
                <SideBar open={open} setOpen={setOpen} />
            </div>
        </div>
    )
}
