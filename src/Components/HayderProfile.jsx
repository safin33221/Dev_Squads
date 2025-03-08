import pic from "../assets/shortPic.jpg";
import ProgressBar from "@ramonak/react-progress-bar";
import { FaFacebook } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

const HayderProfile = () => {
  return (
    <div className="p-8">
      <div className="max-w-[1300px] rounded-xl flex flex-col md:flex-row py-12 px-6 mx-auto bg-slate-100">
        {/* img */}
        <div className="lg:w-1/2 flex justify-center items-center ">
          <img src={pic} alt="" className="rounded-full w-[350px] h-[350px]" />
        </div>
        {/* info */}
        <div className="lg:w-1/2">
          <h1 className="text-3xl font-semibold mb-4">I am Hayder</h1>
          <p className="text-gray-600 font-medium">
            Hi, I'm Hayder, a MERN Stack Developer with expertise in React,
            Node.js, Express.js, MongoDB, and Tailwind CSS. I have a BSc in
            Physics and strong problem-solving skills, with experience in
            projects like Lingo Bingo, MatchMate, and Task Flow. I'm also
            skilled in Firebase auth, Stripe payments, and i18n. Currently
            exploring freelancing opportunities. Let’s connect!
          </p>
          {/* bar */}
          <div className="my-10 flex flex-col gap-4">
            <ProgressBar completed={90} customLabel="React" />
            <ProgressBar completed={70} customLabel="Node.js" />
            <ProgressBar completed={80} customLabel="Express" />
            <ProgressBar completed={60} customLabel="Mongodb" />
          </div>
          {/* card Div */}
          <div className="grid grid-cols-2 gap-4">
            {/*card-1  */}
            <div className="flex gap-2 border-2 border-orange-400 rounded-xl p-4">
              <div className="w-1/2">
                <h1 className="text-4xl font-semibold text-orange-600">1250</h1>
                <p className="text-xl font-semibold text-orange-400">
                  Sales Info
                </p>
              </div>
              <div className="w-1/2">
                <p className="text-gray-600 font-medium">
                  Lorem ipsum dolor sit amet, elit. Nulla, at?
                </p>
              </div>
            </div>
            {/*card-1  */}
            <div className="flex gap-2 border-2 border-slate-500 rounded-xl p-4">
              <div className="w-1/2">
                <h1 className="text-4xl font-semibold text-slate-600">4580</h1>
                <p className="text-xl font-semibold text-slate-500">
                  Success Info
                </p>
              </div>
              <div className="w-1/2">
                <p className="text-orange-400 font-medium">
                  Lorem ipsum dolor sit amet, elit. Nulla, at?
                </p>
              </div>
            </div>
          </div>
          {/* link */}
          <div className="flex text-3xl gap-6 p-6 ">
            <a
              href="https://www.facebook.com/profile.php?id=100006202260978"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="cursor-pointer">
                <FaFacebook />
              </button>
            </a>

            <a
              href="https://www.linkedin.com/in/hayder-ali-bb9175349"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="cursor-pointer">
                <FaLinkedin />
              </button>
            </a>

            <a
              href="https://github.com/Hayder987"
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

export default HayderProfile;
