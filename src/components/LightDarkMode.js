import React, { useContext } from "react";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import { ThemeContext } from "../app";

export default function LightDarkMode() {
    const { theme, setTheme } = useContext(ThemeContext);

    const handleThemeChange = () => {
        setTheme((curr) => (curr === "light" ? "dark": "light"));
    }

    return (
        <div className="mode" onClick={handleThemeChange}>
            <BsMoonFill className="moon"/>
            <BsSunFill className="sun"/>
        </div>
    )
}