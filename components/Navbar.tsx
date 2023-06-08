"use client" // this is a client component
import React from "react"
import { useState } from "react"
import { Link } from "react-scroll/modules"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"
import { RiMoonFill, RiSunLine } from "react-icons/ri"
import { IoMdMenu, IoMdClose } from "react-icons/io"
import Image from 'next/image'
import navLogo from '../public/navLogo.svg'

interface NavItem {
    label: string
    page: string
}

const NAV_ITEMS: Array<NavItem> = [
    {
        label: "Inicio",
        page: "inicio"
    },
    {
        label: "Sobre",
        page: "sobre"
    },
    {
        label: "Projetos",
        page: "projetos"
    },
]

const Navbar = () => {
    const { systemTheme, theme, setTheme } = useTheme()
    const currentTheme = theme === "system" ? systemTheme : theme
    const [navbar, setNavbar] = useState(false)



    return (
    // <header className="w-full mx-auto px-4 bg-white shadow fixed top-0 z-50 dark:bg-stone-900 dark:border-b dark:border-stone-600">
    <header className="w-full mx-auto px-4 bg-white shadow fixed top-0 z-50">
        <div className="justify-between md:items-center md:flex">
            <div>
                <div>
                    <Image src={navLogo} alt="/" width={100} />
                </div>
            </div>
            <div>
                {NAV_ITEMS.map((item, idx) => {
                    return <a key={idx}>{item.label}</a>
                })}
            </div>
        </div>
    </header>
    )
}

export default Navbar