import React, {Component, useState} from "react";
import '../styles/App.css';

const App = () => {
  // step 1: defining the list of dream projects
  const projects = [
    {
      name:"CampusSql", description: "Streamline educational adminstration with SQL-driven system."
    },
    {
      name:"Crypto MarketData", description: "Fetch & display live cryptocurrency market data with search and sort."
    },
    {
      name:"Workfolio", description:"Professional portfolio showcasing work and achievents."
    },
  ];

  return (
    <div id="main">
      <div className="ns-wrapper">
        {projects.map((project,index)=>(
          <div Key={index} className="project">
          <h1 data-ns-test="project-name">{project.name}</h1>
          <h6 data-ns-test="project-description" style={{fontSize:'larger'}}>{project.description}</h6>
          </div>  
        ))}
      </div>
    </div>
  );
};


export default App;
