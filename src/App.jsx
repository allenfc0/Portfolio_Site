
import './App.css';

import { useState } from 'react';

//import { ProjectManipulation } from './ProjectManipulation';
import { openModal, closeModal } from './modalHandler'

function App() {

  const [projects, setProjects] = useState([
    { 
      id: 1,
      title: "Coffee Shop",
      type: "RestAPI",
      image: "../image/caffeeapp.png",
      description: "A website with a landing page for a coffee shop. This website can sign up/sign in users by using and storing data from a MySQL database. It is to take in orders and checkout items when a user is signed into their profile. An admin/owner can post new items and jobs into the database. It uses Restful web-services to handle data transactions. The frontend is automated to go into production as soon as the Gitlab repository is updated. The `gitlab-ci.yml` file takes care of the build and deployment using `Surge.sh`. The backend is pushed into a repository in GitHub for Heroku to find, build, and deploy the API.",
      technologies: "HTML, CSS, Java, Spring Framework, Javascript, React.js",
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
                <div key={p.id} className={'section-id-' + p.id}>

                  <div className='each-project' onClick={() => openModal(p.id)}>
                    <span>{p.title}</span>
                    <span>{p.type}</span>
                  </div>
                  
                  <div className='overlay'></div>

                  <div className={'modal id-' + p.id} >
                    <div className='modal-header'>
                      <div className='title'>{p.title}</div>
                      <button className='close-button' onClick={() => closeModal(p.id)}>&times;</button>
                    </div>

                    <div className='modal-body'>
                      <span>{p.type}</span>
                      <span>{p.description}</span>
                      <span>Technologies: {p.technologies}</span>
                      <span><img src={"./img/caffeeapp.png"}  /></span>
                      <span><a href={p.link} target='_blank' rel='noreferrer'>Live Website </a></span>
                      
                    </div>

                  </div>
                  
                </div>
                
              )
            }
            

            
          </div>

        </div>
        
        <div className='about-me-background'>

        </div>

      </div>
      
    </div>

    
  );
}

export default App;
