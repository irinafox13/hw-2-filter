import React, { useState } from "react";
import Portfolio from "./components/Portfolio";
import ProjectList from "./components/ProjectList";
import Toolbar from "./components/Toolbar";
import './App.css';

function App() {
  const [project, setProject] = useState(Portfolio);

  const filters = [...new Set(Portfolio.map((value) => value.category))];

  const filterItem = (curcat) => {
    const newProject = Portfolio.filter((newVal) => {
      return newVal.category === curcat;
    });
    setProject(newProject);
  };
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <Toolbar
            filters={filters} 
            selected={filterItem}
            onSelectFilter={setProject}       
          />
          <ProjectList projects={project} />
        </div>
      </div>
    </>
  );
}

export default App;
