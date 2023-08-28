import Skills from "./Skills";


const skillsData = [
  { name: 'React', ratio: 70 },
  // Add other skills with their ratios
];

const Portfolio = () => {
  return (
    <div className="container mx-auto">
      {/* Other content */}
      <Skills skills={skillsData} />
      {/* Other content */}
    </div>
  );
};

export default Portfolio;