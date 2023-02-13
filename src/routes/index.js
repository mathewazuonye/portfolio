import { BrowserRouter, Routes, Route } from "react-router-dom"
import About from "../pages/about"
import Contact from "../pages/contact"
import Experience from "../pages/experience"
import Home from "../pages/home"
import Work from "../pages/work"
import Resume from "../pages/resume"
const Routerpage = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="work" element={<Work />} />
                <Route path="experience" element={<Experience />} />
                <Route path="contact" element={<Contact />} />
                <Route path="resume" element={<Resume />} />
            </Routes>
        </BrowserRouter>
    )
}
export default Routerpage