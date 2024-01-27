import { Container, Row, Col } from 'react-bootstrap';
import colorSharp2 from "../assets/images/color-sharp2.png";
import midicalclinic from '../assets/images/midical-clinec.png';
import galaxy from '../assets/images/watercolor-galaxy-background.jpg'
import { ProjectCard } from './ProjectCard'
// import 'animate.css';

export const Projects = () => {
    const data = [
        {
            "title": "LTUC Website",
            "description": "School CMS that shows the main information about the school... Comming Soon",
            "img": galaxy,
            "url": "https://github.com/LTUC/LTUC-Website"
        },
        {
            "title": "Social Club",
            "description": "An app to gather people from different places, who have the same interests",
            "img": galaxy,
            "url": "https://github.com/Pygmy-Final"
        },
        {
            "title": "News Beacon",
            "description": "A news app shows the user some news in different categories from all over the world",
            "img": galaxy,
            "url": "https://github.com/MERN-SPARK"
        },
        {
            "title": "Medical Clinic",
            "description": "A web page serves the patients who have a common disease without coming to the clinic or hospital.",
            "img": midicalclinic,
            "url": "https://sweet-developer.github.io/medical-clinic/"
        }
    ]
    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                        <div className="animate__animated animate__fadeIn">
                            <h2>Projects</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <Row>
                                {
                                    data.map((project, index) => {
                                        return (
                                            <ProjectCard
                                                key={index}
                                                {...project}
                                            />
                                        )
                                    })
                                }
                            </Row>

                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt='background'></img>
        </section>
    )

}