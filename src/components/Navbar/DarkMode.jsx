import React, { useEffect, useState } from 'react'
import { BiSolidSun, BiSolidMoon } from "react-icons/bi";

const DarkMode = () => {
    //dark mode start
    const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark");
    const element = document.documentElement;

    useEffect(() => {
        if (theme === "dark") {
            element.classList.add("dark");
            localStorage.setItem("theme", "dark")
        } else {
            element.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [theme])

    return (
        <>
            {
                theme === "dark" ? (
                    <BiSolidSun onClick={() => setTheme("light")} className='text-2xl cursor-pointer sunicon' />
                ) : (
                    <BiSolidMoon onClick={() => setTheme("dark")} className='text-2xl cursor-pointer' />
                )
            }
        </>
    )
}

export default DarkMode
