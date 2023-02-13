import Nav from "../components/nav"
import About from "./about"
import Contact from "./contact"
const Home = () => {

    return (
        <div className="">
            <div className="w-full xl:min-h-screen bg-blue-900 xl:pt-0 flex items-center h-96 pt-64 ">
                <Nav />
                <div className="xl:ml-40 xl:mb-40 ml-3 mb-80">
                    <p className="text-green-300 font-mono text-base pb-4 mt-40 ">Hi, my name is</p>
                    <h1 className=" text-4xl text-white  font-sans pb-4 xl:text-7xl md:text-4xl">Matthew Azuonye</h1>
                    <h2 className="text-gray-400 xl:text-7xl pb-4 text-3xl">I build things for the web.</h2>
                    <p className="font-mono text-white text-1xl">I'm a software engineer specializing in building
                        <br />exceptional digital experinces.</p>
                </div>
            </div>
            <About />
            <Contact />
        </div>

    )
}
export default Home