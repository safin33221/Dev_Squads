import { FaFacebook, FaGithub, FaGlobe, FaLinkedin } from "react-icons/fa";
import profile from "../assets/Profile.jpg";
function KhairunProfile() {
  return (
    <div className="max-w-2xl mx-auto my-12 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Mst. Khairun Nahar</h2>
      <div className="flex items-center gap-4">
        <div className="avatar">
          <div className="w-24 rounded-full">
            <img src={profile} alt="Profile" />
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Front End Web Developer</h3>
          <p className="text-sm text-gray-500"></p>
          <p className="text-gray-600 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="mt-6 flex gap-4">
            <a
              href="https://www.facebook.com/khaironnahar4/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 text-2xl"
            >
              <FaFacebook />
            </a>
            <a
              href="https://github.com/khaironnahar4"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 text-2xl"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/khairunnahar247/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 text-2xl"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://khairun-nahar.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 text-2xl"
            >
              <FaGlobe />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <h3 className="font-semibold">STRENGTHS</h3>
        <div className="mt-2">
          <p>HTML 95%</p>
          <progress
            className="progress progress-warning w-full"
            value="95"
            max="100"
          ></progress>
        </div>
        <div className="mt-2">
          <p>CSS 90%</p>
          <progress
            className="progress progress-warning w-full"
            value="90"
            max="100"
          ></progress>
        </div>
        <div className="mt-2">
          <p>JavaScript 80%</p>
          <progress
            className="progress progress-warning w-full"
            value="80"
            max="100"
          ></progress>
        </div>
        <div className="mt-2">
          <p>React 80%</p>
          <progress
            className="progress progress-warning w-full"
            value="80"
            max="100"
          ></progress>
        </div>
      </div>
    </div>
  );
}

export default KhairunProfile;
