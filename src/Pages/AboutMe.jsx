import { FaDownload } from "react-icons/fa";


const AboutMe = () => {
    return (
        <div>
            <div><h1 className="text-4xl font-bold mt-20">About Me</h1>
            <hr className="mt-2 border-t-4 border-orange-400 w-20" />
            <hr className="mt-2 border-t-4 border-orange-400 w-10" />

            <h3 className="font-bold mt-10">I' m Md.Mohi Uddin and <span className="text-amber-500">Web Developer</span></h3>

            <p className="mt-5 mb-5">Dedicated web developer , Strong creative and analytical skills.Motivated designer and developer with experience creating custom websites.Strong collaboration skills and proven history of application development.</p></div>
            <div className="mb-10 space-x-2 ">
           <div className="flex space-x-3 sm:col-span-1">
           <div><h1 className="font-bold">Birthday:</h1>
            <h3>01 January 1997</h3>
            <hr className="border-slate-400 w-72 mt-5" /></div>

          <div>  <h1 className="font-bold">Age:</h1>
            <h3>26 Years</h3>
            <hr className="border-slate-400 w-72 mt-5" />
            </div>
         <div>   <h1 className="font-bold">Email:</h1>
                    <h3>mdmohiuddinmmn@gmail.com</h3>
                    <hr className="border-slate-400 w-72 mt-5" /></div>
           </div>
            <div className="flex space-x-3">
               <div> <h1 className="font-bold">City:</h1>
                <h3>Dhaka</h3>
                <hr className="border-slate-400 w-72 mt-5" /></div>
                <div>
                    <h1 className="font-bold">Phone:</h1>
                    <h3>+8801762300752</h3>
                    <hr className="border-slate-400 w-72 mt-5" />
                  
                </div>
            </div>
            <div className="mt-10 text-lg font-bold text-white">
      <button className="btn btn-secondary rounded-full "> Resume <FaDownload></FaDownload> </button>       <button className="btn btn-secondary rounded-full ml-10">Hire Me <img className='w-4' src="https://i.ibb.co/YkpXZ7c/exit-top-right.png" alt="" /></button>
      </div>
          
            </div>
            


   
        </div>
    );
};

export default AboutMe;
