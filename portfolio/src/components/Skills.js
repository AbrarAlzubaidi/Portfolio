import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/images/color-sharp.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMeteor, faDatabase, faCode } from '@fortawesome/free-solid-svg-icons';
import { faHtml5, faCss3Alt, faJs, faPython, faReact, faNodeJs, faBootstrap, faGithub, faUbuntu } from '@fortawesome/free-brands-svg-icons';

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Technical Skills</h2>
              <p>Technical skills that i have: frontend tools, backends tools, programming languages, Databases..etc</p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                <div className="item">
                  <FontAwesomeIcon icon={faHtml5} />

                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <FontAwesomeIcon icon={faCss3Alt} />
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <FontAwesomeIcon icon={faJs} />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <FontAwesomeIcon icon={faPython} />
                  <h5>Python</h5>
                </div>
                <div className="item">
                  <FontAwesomeIcon icon={faReact} />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <FontAwesomeIcon icon={faMeteor} />
                  <h5>Next.js</h5>
                </div>
                <div className="item">
                  <FontAwesomeIcon icon={faNodeJs} />
                  <h5>Node.js</h5>
                </div>
                <div className="item">
                  <FontAwesomeIcon icon={faBootstrap} />
                  <h5>bootstrap</h5>
                </div>
                <div className="item">
                  <FontAwesomeIcon icon={faMeteor} />
                  <h5>Tailwind</h5>
                </div>
                <div className="item">
                  <FontAwesomeIcon icon={faMeteor} />
                  <h5>Django</h5>
                </div>
                <div className="item">
                  <FontAwesomeIcon icon={faMeteor} />
                  <h5>Wagtail</h5>
                </div>
                <div className="item">
                  <FontAwesomeIcon icon={faDatabase} />
                  <h5>MongoDB</h5>
                </div>
                <div className="item">
                  <FontAwesomeIcon icon={faDatabase} />
                  <h5>PostgreSQL</h5>
                </div>
                <div className="item">
                  <FontAwesomeIcon icon={faDatabase} />
                  <h5>Oracle</h5>
                </div>
                <div className="item">
                  <FontAwesomeIcon icon={faGithub} />
                  <h5>Git/Github</h5>
                </div>
                <div className="item">
                  <FontAwesomeIcon icon={faCode} />
                  <h5>VSCode</h5>
                </div>
                <div className="item">
                  <FontAwesomeIcon icon={faUbuntu} />
                  <h5>Ubuntu</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="background " />
    </section>
  )
} 