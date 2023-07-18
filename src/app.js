import React, { createContext, useState } from "react";
import "./style.css";
import HomePageContent from "./components/HomePageContent";
import HomePageLinks from "./components/HomePageLinks";
import HomePageNavBar from "./components/HomePageNavBar";
import AboutMeContent from "./components/AboutMeContent";
import ToggleBox from "./components/ToggleBox";
import ExperienceContent from "./components/ExperienceContent";
import ProjectsContent from "./components/ProjectsContent";
import EducationContent from "./components/EducationContent";
import LightDarkMode from "./components/LightDarkMode";

export const ThemeContext = createContext(null);

export default function App() {
    const [theme, setTheme] = useState("dark");

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
        <div id={theme}>
            <HomePageNavBar />
            <ToggleBox />
            <HomePageContent />
            <LightDarkMode />
            <HomePageLinks />
            <AboutMeContent />
            <EducationContent />
            <ExperienceContent />
            <ProjectsContent />
        </div>
        </ThemeContext.Provider>
    );
}
