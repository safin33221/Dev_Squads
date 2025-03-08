import profilePic from "../assets/bodruddozaredoy-img.jpg";
import ProgressBar from "@ramonak/react-progress-bar";

const BodruddozaRedoy = () => {
  return (
    <div className="p-8">
      <div className="max-w-[1300px] rounded-xl flex flex-col md:flex-row py-12 px-6 mx-auto bg-slate-100">
        {/* img */}
        <div className="lg:w-1/2 flex justify-center items-center ">
          <img src={profilePic} alt="" className="rounded-full w-[350px] h-[350px]" />
        </div>
        {/* info */}
        <div className="lg:w-1/2">
          <h1 className="text-3xl font-semibold mb-4">Hello, I am Redoy</h1>
          <p className="text-gray-600 font-medium">
          I'm a passionate MERN stack developer with a strong enthusiasm for building modern web applications.
          My journey into programming started with a curiosity for how websites and applications work. That curiosity led me to learn the MERN stack through Programming Hero, where I built various projects that solidified my skills in React, Node.js, Express, and MongoDB.
          </p>
          {/* bar */}
          <div className="my-10 flex flex-col gap-4">
            <ProgressBar completed={90} customLabel="React.Js" />
            <ProgressBar completed={70} customLabel="Node.js" />
            <ProgressBar completed={80} customLabel="Express" />
            <ProgressBar completed={80} customLabel="Mongodb" />
            <ProgressBar completed={50} customLabel="Next.Js" />
            <ProgressBar completed={50} customLabel="Typescript" />
          </div>
          {/* card Div */}
          <div className="grid grid-cols-2 gap-4">
            {/*card-1  */}
            <div className="flex gap-2 border-2 border-orange-400 rounded-xl p-4">
              <div className="w-1/2">
                <h1 className="text-4xl font-semibold text-orange-600">1250</h1>
                <p className="text-xl font-semibold text-orange-400">Sales Info</p>
              </div>
              <div className="w-1/2">
                <p className="text-gray-600 font-medium">
                  Lorem ipsum dolor sit amet,  elit.
                  Nulla, at?
                </p>
              </div>
            </div>
            {/*card-1  */}
            <div className="flex gap-2 border-2 border-slate-500 rounded-xl p-4">
              <div className="w-1/2">
                <h1 className="text-4xl font-semibold text-slate-600">4580</h1>
                <p className="text-xl font-semibold text-slate-500">Success Info</p>
              </div>
              <div className="w-1/2">
                <p className="text-orange-400 font-medium">
                  Lorem ipsum dolor sit amet,  elit.
                  Nulla, at?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodruddozaRedoy;
