import Nav from "../components/nav"

const About = () => {
    return (
        <div className=" xl:flex xl:w-full min-h-screen bg-blue-900  justify-center ">
            <Nav />
            <div className="h-screen xl:w-2/4 xl:p-11 xl:ml-3 xl:mt-0 ml-3  ">
                <h1 className="text-gray-300 text-2xl font-bold pb-6 xl:pt-0 pt-32 sm:text-4xl sm:mt-14 ">About Me</h1>
                <p className="text-gray-300 xl:tracking-wide leading-7 xl:text-1xl ">Hello! my name is Matthew and i enjoy creating things that live on
                    <br />the internet. My interest in web development started back in 2022
                    <br />when i wrote my first line of code with HTML AND CSS "Hello world".
                    <br />Fast forward to today i have build personal project.My main focus is <br />
                    building accesible,inclusive products and digital experiences. </p>
                <h1 className="text-gray-300 mt-8 font-mono text-1xl">Here are a few technologies i've been working with recently:</h1>
                <div className="flex">
                    <div className="text-gray-300 xl:text-2xl font-mono mt-5 ">
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JAVASCRIPT</li>
                    </div>
                    <div className="ml-20 text-gray-300 xl:text-2xl font-mono mt-5 ">
                        <li>REACT</li>
                        <li>TAILWINDCSS</li>
                        <li>TYPESCRIPT</li>
                    </div>
                </div>
            </div>
            <div className="xl:h-screen xl:w-2/4 flex items-center justify-center ">
                <div className="image-card hover:scale-125 xl:mb-0 mb-40"  ></div>
            </div>
        </div>
    )
}
export default About