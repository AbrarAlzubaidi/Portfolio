import { Container, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowDown } from '@fortawesome/free-solid-svg-icons';

import headerImg from '../assets/images/header-img.svg';

export const Banner = () => {
    const [bioIndex, setBioIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const [text, setText] = useState('');
    const delay = 5000; // delay time between texts

    useEffect(() => {
        const bio = ['Web Developer', 'Mobile Developer'];
        const updateText = () => {
            let i = bioIndex % bio.length;
            let fullText = bio[i];
            let updatedText;

            if (isVisible) {
                updatedText = fullText.substring(0, text.length - 1);
            } else {
                updatedText = fullText.substring(0, text.length + 1);
            }

            setText(updatedText);

            if (!isVisible && updatedText === fullText) {
                setIsVisible(true);
                setTimeout(() => {
                    setIsVisible(false);
                    setBioIndex(bioIndex + 1);
                }, delay);
            } else if (isVisible && updatedText === "") {
                setBioIndex(bioIndex + 1);
                setIsVisible(false);
            }
        };

        const intervalId = setInterval(updateText, 300);

        return () => {
            clearInterval(intervalId);
        };
    }, [bioIndex, isVisible, text, delay]);

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
                        <h1>{`Hi I'm Abrar a `} <span className="wrap">{text}</span></h1>
                        <p>Pariatur aliqua consectetur qui magna dolore et commodo consequat.</p>
                        <button className="justify-content-evenly w-50" onClick={() => handelDownload()}>Download CV <FontAwesomeIcon icon={faCircleArrowDown} /></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt='banner' />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
