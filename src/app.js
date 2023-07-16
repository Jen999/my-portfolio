import React from "react"
import "./style.css"
import HomePageContent from "./components/HomePageContent"
import HomePageLinks from "./components/HomePageLinks"
import HomePageNavBar from "./components/HomePageNavBar"
import AboutMeContent from "./components/AboutMeContent"
import ToggleBox from "./components/ToggleBox"
import ExperienceContent from "./components/ExperienceContent"
import ProjectsContent from "./components/ProjectsContent"
import EducationContent from "./components/EducationContent"


export default function App() {
    
    return (
        <div>
            <HomePageNavBar />
            <ToggleBox />
            <HomePageContent />
            <HomePageLinks />
            <AboutMeContent />
            <EducationContent />
            <ExperienceContent />
            <ProjectsContent />
        </div>
    );
}
