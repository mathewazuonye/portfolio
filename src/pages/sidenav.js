import { Link } from "react-router-dom"
const Sidenav = () => {

    return (
        <div id="sidenav" className=" w-3/5 h-full bg-gray-300 hidden z-10 fixed mt-14 left-0  transition-all delay-300 ease-linear">
            <div className=" items-center flex justify-center flex-col pt-10">
                <Link to="/about" className="text-gray-500 text-2xl mt-5 font-serif">About</Link>
                <Link to="/work" className="text-gray-500 text-2xl mt-5 font-serif">Work</Link>
                <Link to="/contact" className="text-gray-500 text-2xl mt-5 font-serif">Contact</Link>
                <Link to="/experience" className="text-gray-500 text-2xl mt-5 font-serif">Experience</Link>
                <Link to="/resume" className="text-gray-500 text-2xl mt-5 font-serif border-solid border-2 p-2 border-green-300">Resume</Link>
            </div>
        </div>
    )
}
export default Sidenav