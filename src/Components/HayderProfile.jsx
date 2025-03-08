import pic from '../assets/shortPic.jpg'

const HayderProfile = () => {
  return (
    <div className='p-8'>
        <div className="max-w-[1200px] flex flex-col md:flex-row py-12 px-6 mx-auto bg-slate-100">
          {/* img */}
          <div className="lg:w-1/2 flex justify-center items-center ">
             <img src={pic} alt="" className="rounded-full w-[300px] h-[300px]" />
          </div>
          {/* info */}
          <div className="lg:w-1/2">

          </div>
        </div>
    </div>
  )
}

export default HayderProfile