import { useEffect, useState } from "react"
import { BagIcon } from "../../utils/icons/Bag"
import { Menu } from "../../utils/icons/nav-icons/Menu"
import { NavBarSearch } from "./NavBarSearch"
import { useNavigate } from "react-router-dom"

interface Props {
    open: boolean
    setOpen: (open: boolean) => void
}

export const Nav =  ({ open, setOpen }: Props) => {
    const navigate = useNavigate()
    const [darkMode, setDarkMode] = useState<boolean>(() => {
        return localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    });

    useEffect(() => {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            setDarkMode(true)
        } else {
            setDarkMode(false)
        }
    }, [])

    useEffect(() => {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
        localStorage.setItem('theme', darkMode ? 'light' : 'dark')
    }, [darkMode])

    return (
        <div className=" bg-white transition-all duration-300 z-50 dark:bg-[#242424] flex items-center justify-between w-full gap-2 pl-2 pt-5 md:px-3 md:pt-8">
            <NavBarSearch />
            <div className="flex items-center gap-8">
                <div className="hidden md:block">
                    <label className="relative inline-flex items-center cursor-pointer">
                        <span className="sr-only">Toggle dark mode</span>
                        <input className="sr-only peer" type="checkbox" checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
                        <div className="w-24 h-12 rounded-full ring-0 peer duration-500 outline-none bg-gray-200 overflow-hidden before:flex before:items-center before:justify-center after:flex after:items-center after:justify-center before:content-['☀️'] before:absolute before:h-10 before:w-10 before:top-1/2 before:bg-white before:rounded-full before:left-1 before:-translate-y-1/2 before:transition-all before:duration-700 peer-checked:before:opacity-0 peer-checked:before:rotate-90 peer-checked:before:-translate-y-full shadow-lg shadow-gray-300 peer-checked:shadow-lg peer-checked:shadow-gray-700 peer-checked:bg-[#383838] after:content-['🌑'] after:absolute after:bg-[#1d1d1d] after:rounded-full after:top-[4px] after:right-1 after:translate-y-full after:w-10 after:h-10 after:opacity-0 after:transition-all after:duration-700 peer-checked:after:opacity-100 peer-checked:after:rotate-180 peer-checked:after:translate-y-0" />
                    </label>
                </div>
                <div onClick={() => navigate("/carrito")} className="cursor-pointer">
                    <BagIcon cart={12} />
                </div>
                <div className="hidden md:block" onClick={() => setOpen(!open)}><Menu open={open} /></div>
            </div>
        </div>
    )
}
