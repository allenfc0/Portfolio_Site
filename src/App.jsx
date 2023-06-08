
import './App.css';
import './Mobile.css'

import { useState } from 'react';

import { openModal, closeModal } from './modalHandler';
import { emailHandler } from './emailHandler'

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
          Full Stack Developer
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
            <h2 id='about'>About Me</h2>
            <div id='about-body'>
              Hello 👋, <br />
              My name is Allen. I love learning about technology.
              There are always technologies <br /> that modernize the way 
              that we do tasks and implement high end solutions. When <br /> 
              adding me to your team, you can be sure 
              that I will be a great asset.
            </div>
        </div>

      </div>
      
      <div className='contact-me-background'>
        <h2 id='contact'>Contact Me</h2>
        <div className='form'>

          <div className='form-input'>
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" id="from-name" className='all-input' required/>
          </div>

          <div className='form-input'>
            <label htmlFor="email">Email:</label>
            <input type="email" name='email' id='email' className='all-input' required />
          </div>

          <div className='form-input'>
            <label htmlFor="subject" >Subject:</label>
            <input type="text" name="subject" id="subject" className='all-input' required />
          </div>
            
          <div className='form-input'>
            <label htmlFor="message">Message:</label>
            <textarea type="text" name='message' id='message'
                      rows='10' cols='50' className='all-input' required />
          </div>

          <div>
            <button type="submit" className='def-button' onClick={ () => emailHandler() }>Submit</button>
          </div>
          
        </div>

      </div>

    </div>

    
  );
}

export default App;
