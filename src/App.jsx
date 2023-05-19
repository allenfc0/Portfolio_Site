
import './App.css';

import { useState } from 'react';

import { ProjectManipulation as canvas } from './ProjectManipulation';

function App() {

  const [projects, setProjects] = useState([
    { 
      id: 1,
      title: "Coffee Shop",
      type: "RestAPI",
      image: "",
      description: "",
      technologies: "",
      link: "https://gavi-caffee.surge.sh"
    },
    { 
      id: 2,
      title: "Weather Forecast",
      type: "3rd Party API",
      image: "",
      description: "",
      technologies: "",
      link: ""
    }
  ]);
  

  return (
    <div className='app'>
      <div className='top-background'>
        
        <div className='header'>

          <h3 id='title' >Allen Farias - Full Stack Developer</h3>
          <nav className='nav-links'>

            <a href="#project">Projects</a>
            <a href="#about">About Me</a>
            <a href="#contact">Contact Me</a>

          </nav>

        </div>
        
        <div id='introduction'>
          Hello, my name is Allen & <br/> 
          I am a Full Stack Developer
        </div>
        
        <div className='background-image'>

          <h2 id='project'>My Projects</h2>

          <div className='project-showcase'>
            
            
            {
              projects.map(p => 
                <div key={p.id} className={'id-' + p.id}>
                  <div className='each-project' onClick={() => canvas(p.id, true)}>
                    <span>{p.title}</span>
                    <span>{p.type}</span>
                    
                  </div>
                  
                  <div className='flex-canvas'>
                    <div className='full-project'>
                      <span>{p.title}</span>
                      <span>{p.type}</span>
                      <span>{p.description}</span>
                      <span>{p.technologies}</span>
                      <span><img src={p.image} alt={p.title} /></span>
                      <span><a href={p.link}>Live Website </a></span>
                      <span><button className='def-button' onClick={() => canvas(p.id, false)}>Close</button></span>
                    </div>
                  </div>
                  
                  
                </div>
                
              )
            }
            

            
          </div>

        </div>

      </div>
      

      
    </div>

    
  );
}

export default App;
