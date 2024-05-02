import { useEffect, useState } from "react";
import { AiFillSun } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";


const ThemeToggle = () => {

    const [theme, setTheme] = useState('light');

    useEffect(()=>{
        if(theme === 'dark'){
            document.documentElement.classList.add('bg-[#1a103d]')
        } else{
            document.documentElement.classList.remove('bg-[#1a103d]')
        }
    },[theme])

    const handleTheme = () =>{
       setTheme(theme === 'dark' ? 'light' : 'dark')
    }


    return (
        <button onClick={handleTheme}>
            {theme === 'dark' ? <FaMoon className="text-[#1a103d] text-lg"/> : <AiFillSun className="text-yellow-500 text-xl" />}
        </button>
    );
};

export default ThemeToggle;