import { FiPhone, FiTwitter } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { FaLinkedin, FaEnvelope, FaGithub } from "react-icons/fa";
import Nav from "../components/nav";
const Contact = () => {
    return (
        <div className="w-full min-h-screen bg-blue-900 flex items-center justify-center align-middle">
            <Nav />
            <div>
                <h1 className="text-gray-300 text-4xl font-bold xl:ml-32 ">Get In Touch</h1>
                <div>

                    <div className=" xl:ml-0  mt-10 xl:flex ml-16">

                        <a href="http://www.linkedin.com/in/matthew-azuonye-a0b60b226/">
                            <FaLinkedin className=" h-11 w-20 text-white hover:scale-150 mb-6 hover:text-blue-300" />
                        </a>

                        <a href="http://www.instagram.com/matthew_azuonye/">
                            <FiInstagram className=" h-11 w-20 text-orange-500 hover:scale-150 mb-6 hover:text-orange-700" />
                        </a>

                        <a href="http://twitter.com/matthew_azuonye">
                            <FiTwitter className=" h-11 w-20 text-white hover:scale-150 mb-6 hover:text-blue-300" />
                        </a>
                        <a href="mailto:matthewazuonye@gmail.com">
                            <FaEnvelope className=" h-11 w-20 text-orange-300 hover:scale-150 mb-6 hover:text-orange-400" />
                        </a>
                        <a href="tel:+234 9036219219">
                            <FiPhone className=" h-11 w-20 text-green-400 hover:scale-150 mb-6 hover:text-green-500" />
                        </a>
                        <a href="http://github.com/mathewazuonye">
                            <FaGithub className=" h-11 w-20 text-black hover:scale-150  hover:text-white" />
                        </a>
                    </div>


                </div>
            </div>
        </div>
    )
}
export default Contact