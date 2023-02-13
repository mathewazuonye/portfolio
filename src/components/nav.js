import { Link } from "react-router-dom"
import { HiBars3 } from "react-icons/hi2";
import Sidenav from "../pages/sidenav";

const Nav = () => {
    const handleNav = () => {
        const showNav = () => {
            document.getElementById('sidenav').classList.toggle('hidden')
        }
        showNav()
    }
    return (
        <div className="flex justify-end p-5 fixed w-full top-0">
            <HiBars3 className="h-1/5 w-8 text-white  toggle xl:hidden sm:flex md:flex" onClick={handleNav} />
            <div className=" hidden xl:flex md:hidden sm:hidden">
                <Link className="text-white mr-5 font-mono hover:text-green-300  hover:border-b-2 " to="/about">About</Link>
                <Link className="text-white mr-5 font-mono hover:text-green-300  hover:border-b-2" to="/experience">Experience</Link>
                <Link className="text-white mr-5 font-mono hover:text-green-300  hover:border-b-2" to="/work">Work</Link>
                <Link className="text-white mr-5 font-mono hover:text-green-300 hover:border-b-2" to="/contact">Contact</Link>
                <Link className="text-green-300 mr-5 font-mono border-solid border-2 p-2  border-green-300  " to="/resume">Resume</Link>
            </div>
            <Sidenav />
        </div>
    )
}
export default Nav 