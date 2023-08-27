import { FaDownload } from 'react-icons/fa';


const Banner = () => {
    return (
    <div className="md:columns-2 sm:col-span-1">
      <div>
      <h1 className="text-3xl font-bold mt-28">Hello, my name is <span className="text-amber-500">Md.Mohiuddin</span>  </h1>
      <h1 className="text-3xl font-bold mt-16">I' m a <span className="text-amber-500">Mern-Stack Developer</span> </h1>
      <p className="mt-7 font-sans">I am a well-versed MERN Stack developer & designer with 1 years plus experience. I have led many projects from design to deployment which have impacted thousands of people. I love to blend my skills in the most creative way possible.</p>
      <div className="mt-10 text-lg font-bold text-white">
      <button className="btn btn-secondary rounded-full "> Resume <FaDownload></FaDownload> </button>       <button className="btn btn-secondary rounded-full ml-10">Hire Me <img className='w-4' src="https://i.ibb.co/YkpXZ7c/exit-top-right.png" alt="" /></button>
      </div>
      </div>
     <div >
     <img className="pt-10 rounded-full" src="https://i.ibb.co/gww852x/me-bg-Black.png" alt="" />
     </div>
   
    </div>
    );
};

export default Banner;

