import React, { useEffect, useCallback } from 'react';
/* stylesheet */
import '../styles/App.css';
/***********/
/* react components */
import Greeting from './Greeting';
import Navbar from './Navbar';
import About from './About';
import Project from './Project';
import Contact from './Contact';
import Footer from './Footer';
import Skill from './Skill';
/***********/
/* animated background */
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';
import snowballsConfig from '../config/snowballsConfig';
/***********/
/* fontawesome icons */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
/***********/
/* skill logos */
import cssLogo from '../assets/logos/css3_logo.svg';
import gitLogo from '../assets/logos/git_logo.svg';
import reactLogo from '../assets/logos/react_logo.svg';
import javascriptLogo from '../assets/logos/javascript_logo.svg';
import webpackLogo from '../assets/logos/webpack_logo.svg';
import htmlLogo from '../assets/logos/html5_logo.svg';
import bootstrapLogo from '../assets/logos/bootstrap_logo.svg';
import expressLogo from '../assets/logos/express.js_logo.svg';
import mongodbLogo from '../assets/logos/mongodb_logo.svg';
import nodeLogo from '../assets/logos/node.js_logo.svg';
import passportLogo from '../assets/logos/passportjs_logo.svg';
import reduxLogo from '../assets/logos/redux_logo.svg';
import socketLogo from '../assets/logos/socket.io_logo.svg';
import typecriptLogo from '../assets/logos/typescript_logo.svg';
import sassLogo from '../assets/logos/sass_logo.svg';
import phpLogo from '../assets/logos/php_logo.svg';
import mysqlLogo from '../assets/logos/mysql_logo.svg';
import linuxLogo from '../assets/logos/linux_logo.svg';
import pythonLogo from '../assets/logos/python_logo.svg';
import dockerLogo from '../assets/logos/docker_logo.svg';
import laravelLogo from '../assets/logos/laravel_logo.svg';
import codeigniterLogo from '../assets/logos/codeigniter_logo.svg';
import wordpressLogo from '../assets/logos/wordpress_logo.svg';
import n8nLogo from '../assets/logos/n8n_logo.svg';
/***********/

const App = () => {
  useEffect(() => {
    // set "visibility" window to 20% height vertically centered
    const config = {
      rootMargin: '-40% 0px -40% 0px'
    };
    // create observer to watch whether sections are within "visibility" window
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const id = entry.target.id;
        if (entry.isIntersecting) { // section is visible
          // add class "active" to highlight corresponding header link of
          // visible section
          document.querySelector(`.primary-header li a[href="#${id}"]`)
                  .parentElement
                  .classList
                  .add('active');
          handleSlideInOnScroll(entry.target);
        } else {
          document.querySelector(`.primary-header li a[href="#${id}"]`)
                  .parentElement
                  .classList
                  .remove('active');
        }
      });
    }, config);
    // apply observer to every section with an id
    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });
    // remove observer when component dismounts
    return () => observer.disconnect();
  }, []);

  const particlesInit = useCallback(async engine => {
    await loadFull(engine);
  }, []);

  const handleSlideInOnScroll = (element) => {
    // terminate function if slide-in effect was already added once
    if (
      element.classList.contains("left-slide-in")
      || element.classList.contains("right-slide-in")
    ) {
      return;
    }

    // get all sections with ids from the document
    const sections = document.querySelectorAll('main section[id]');

    for (let i = 0; i < sections.length; i++) {
      if (sections[i].id === element.id) { // look for matching element
        if (i % 2 === 0) {
          // every other section starting with the first is slid in from the
          // left
          element.classList.add("left-slide-in");
          // remove default opacity
          element.classList.remove("hidden");
        } else {
          // every other section starting with the second is slid in from the
          // right
          element.classList.add("right-slide-in");
          // remove default opacity
          element.classList.remove("hidden");
        }
      }
    }
  };

  return (
    <div className="home">
      <section className="home-greeting" id="home">
        <Greeting/>
      </section>
      <header className="primary-header">
        <Navbar/>
      </header>
      <main>
        <div className="particles-bg background">
          <Particles init={particlesInit} options={snowballsConfig} />
        </div>
        <div className="content flex-center">
          <section id="about" className="narrow space-out hidden">
            <About/>
          </section>
          <section id="skills" className="skills space-out hidden">
            <h2 className="headings-font">Skills</h2>
            <ul>
              <li>
                <Skill image={n8nLogo} name="N8N" />
              </li>
              <li>
                <Skill image={phpLogo} name="PHP" />
              </li>
              <li>
                <Skill image={mysqlLogo} name="MYSQL" />
              </li>
              <li>
                <Skill image={linuxLogo} name="LINUX" />
              </li>
              <li>
                <Skill image={pythonLogo} name="PYTHON" />
              </li>
              <li>
                <Skill image={laravelLogo} name="LARAVEL" />
              </li>
              <li>
                <Skill image={codeigniterLogo} name="CODEIGNITER" />
              </li>
              <li>
                <Skill image={wordpressLogo} name="WORDPRESS" />
              </li>
              <li>
                <Skill image={dockerLogo} name="DOCKER" />
              </li>
              <li>
                <Skill image={nodeLogo} name="NODE.JS" />
              </li> 
              <li>
                <Skill image={socketLogo} name="SOCKET.IO" />
              </li>
              <li>
                <Skill image={bootstrapLogo} name="BOOTSTRAP" />
              </li> 
              <li>
                <Skill image={gitLogo} name="GIT" />
              </li>
              <li>
                <Skill image={cssLogo} name="CSS3" />
              </li>
              <li>
                <Skill image={htmlLogo} name="HTML5" />
              </li>
              <li>
                <Skill image={javascriptLogo} name="JAVASCRIPT" />
              </li>
            </ul>
          </section>
          <section id="projects" className="projects space-out hidden">
            <h2 className="headings-font">Projects</h2>
            <div className="carousel-menu">
              <a href="#slide-1"></a>
              <a href="#slide-2"></a>
            </div>
            <ul>
              <li id="slide-1">
                <Project name="SinterAge"
                         description="SINTER AGE offers stunning, high-quality quartz surfaces that will brighten up any interior space."
                         subDescription=""
                         sourceCode=""
                         liveApp="https:\/\/sinterage.ca" />
              </li>
              <li id="slide-2">
                <Project name="WET-Ethical"
                         description="Every product we offer embraces the core values of 'respecting the environment, caring for people, and giving back to society.'"
                         subDescription=""
                         sourceCode=""
                         liveApp="https:\/\/www.wet-ethical.com" />
              </li>
              <li id="slide-3">
                <Project name="Vivido"
                         description="Vivido is a SaaS that people can make short videos for digital marketing easily."
                         subDescription=""
                         sourceCode=""
                         liveApp="" />
              </li>
              <li id="slide-4">
                <Project name="Likr"
                         description="Intelligence Web Notification System which automatically
recommend appropriate news, topics, and articles to users based on their
browsing behavior via web notification."
                         sourceCode=""
                         liveApp="https:\/\/www.avividai.com/product-likr?lang=en" />
              </li>
            </ul>
          </section>
          <section id="contact" className="narrow space-out hidden">
            <Contact/>
          </section>
          <a href="#about" className="back-to-top">
            <FontAwesomeIcon icon='arrow-circle-up' />
          </a>
        </div>
      </main>
      <footer className="primary-footer">
        <Footer/>
      </footer>
    </div>
  );
};

export default App;
