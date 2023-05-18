
import './App.css';

import { useState } from 'react';

import { ProjectManipulation as expand } from './ProjectManipulation';

function App() {

  const [projects, setProjects] = useState([
    { 
      id: 1,
      title: "Coffee Shop",
      type: "Landing Page for a Shop",
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
                  <div className='each-project' onClick={() => expand(p.id)}>
                    <span>{p.title}</span>
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
