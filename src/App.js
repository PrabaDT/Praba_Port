import React from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/banner/Banner";
import About from "./components/About";
import Projects from "./components/projects/Projects";
import Resume from "./components/Resume";


function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText">
     <div className="max-w-screen-xl mx-auto">
        <Navbar/>
        <Banner/>
        <About/>
        <Projects/>
        <Resume/>
     </div>
    
    </div>
  );
}

export default App;
