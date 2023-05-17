
import './App.css';

function App() {

  let projects = [
    { 
      "title": "Coffee Shop",
      "type": "Landing Page for a Shop",
      "image": "",
      "description": "",
      "technologies": "",
      "link": "",
    },
    { 
      "title": "Chat Group",
      "type": "Communication",
      "image": "",
      "description": "",
      "technologies": "",
      "link": "",
    },
  ];

  return (
    <div className='app'>
      <div className='top-background'>
        
        <div className='header'>

          <div><h3 id='title' >Allen Farias - Full Stack Developer</h3></div>
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

        

          <div className='content'>

            {

              <div className='project-showcase' id='project'>
                hello
              </div>

            }

          </div>

        </div>

      </div>
      

      
    </div>

    
  );
}

export default App;
