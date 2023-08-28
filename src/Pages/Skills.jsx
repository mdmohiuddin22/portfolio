import { Icon } from '@iconify/react';



const Skills = () => {
  return (
    <div>
      <div>
      <h1 className="text-4xl font-bold mt-20">Skills</h1>
            <hr className="mt-2 border-t-4 border-orange-400 w-20" />
            <hr className="mt-2 border-t-4 border-orange-400 w-10" />
      </div>
     <div className='flex gap-40  '>

     <div>
      <Icon  className='m-10 bg-orange-400' width={50} icon="mdi:language-javascript" />
        <h1 className='text-3xl font-bold'>Language </h1>
      <div className='font-semibold'>  <h3>HTML</h3>
        <h3>Css</h3>
        <h3>JavaScript</h3></div>
        
      </div>
      <div>
      <Icon className='m-10 bg-orange-400' width={50}  icon="fa-solid:tools" />
        <h1 className='text-3xl font-bold'>Tools </h1>
      <div className='font-semibold'>  <h3>Figma</h3>
        <h3>VS Code</h3>
        <h3>Git</h3>
        <h3>Github</h3>
        <h3>Terminal</h3>
        
        </div>
        
      </div>
      <div>
   
      <Icon className='m-10' width={50} icon="noto:atom-symbol" />
        <h1 className='text-3xl font-bold'>Technology </h1>
      <div className='font-semibold'>  <h3>HTML</h3>
        <h3>Css</h3>
        <h3>JavaScript</h3></div>
        
      </div>
     </div>
    </div>
  );
};

export default Skills;