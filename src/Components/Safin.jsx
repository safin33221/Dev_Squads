import pic from "../assets/safin.jpg";
import ProgressBar from "@ramonak/react-progress-bar";
import { FaFacebook } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

const Safin = () => {
    return (
        <div className="p-8">
            <div className="max-w-[1300px] rounded-xl flex flex-col md:flex-row py-12 px-6 mx-auto bg-slate-100">
                {/* img */}
                <div className="lg:w-1/2 flex justify-center items-center ">
                    <img src={pic} alt="" className="rounded-full w-[350px] h-[350px]" />
                </div>
                {/* info */}
                <div className="lg:w-1/2">
                    <h1 className="text-3xl font-semibold mb-4">Hellow, I'm Safin</h1>
                    <p className="text-gray-600 font-medium">
                    I am currently Studying a Diploma in Computer Technology at Feni Polytechnic Institute, Bangladesh. <br />
                    In terms of technical expertise, I specialize in React.js, Next.js, JavaScript, and Tailwind CSS for frontend development .I also have basic knowledge of backend technologies, such as CRUD operations with MongoDB and Express.js.
                    </p>
                    {/* bar */}
                    <div className="my-10 flex flex-col gap-4">
                        <ProgressBar completed={60} customLabel="React" />
                        <ProgressBar completed={30} customLabel="Node.js" />
                        <ProgressBar completed={50} customLabel="Express" />
                        <ProgressBar completed={75} customLabel="Mongodb" />
                    </div>
                    {/* card Div */}
                    
                    {/* link */}
                    <div className="flex text-3xl gap-6 p-6 ">
                        <a
                            href="https://www.facebook.com/safin.2360"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button className="cursor-pointer">
                                <FaFacebook />
                            </button>
                        </a>

                        <a
                            href="https://www.linkedin.com/in/safayet-hossan-safin"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button className="cursor-pointer">
                                <FaLinkedin />
                            </button>
                        </a>

                        <a
                            href="https://github.com/safin33221"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button className="cursor-pointer">
                                <FaGithub />
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Safin;