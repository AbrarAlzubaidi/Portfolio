import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMeteor } from '@fortawesome/free-solid-svg-icons';

import headerImg from '../assets/images/header-img.svg';

export const Banner = () => {
    const handelDownload = () => {
        const downloadLink = document.createElement('a');
        downloadLink.href = '../assets/AbrarAlzubaidi.pdf';  // Replace with the actual path to your CV
        downloadLink.download = 'AbrarAlzubaidi.pdf';
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    }

    return (
        <section className="banner" id='home'>
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="welcome">Welcome To My Portfolio</span>
                        <h1>{`Hi I'm Abrar a Web Developer`}
                        </h1>
                        <p>Pariatur aliqua consectetur qui magna dolore et commodo consequat.</p>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt='banner' />
                    </Col>
                </Row>
            </Container>
            <div className="download-icon d-flex justify-content-center">
                <Row>
                    <Col>
                        <FontAwesomeIcon icon={faMeteor} onClick={handelDownload}/>
                        <p>Download CV</p>
                    </Col>
                </Row>

            </div>
        </section>
    );
};
