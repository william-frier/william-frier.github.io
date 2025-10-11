import '../style.css';
import React, { useState } from 'react';

import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardText,
    CardTitle,
    Row,
    Col,
    Container,
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
    ListGroup,
    ListGroupItem,

} from 'reactstrap';


function ArticlePage(props) {

    const [open, setOpen] = useState('0');
    const toggle = (id) => {
      if (open === id) {
        setOpen();
      } else {
        setOpen(id);
      }
    };
  return (
    <>
    <Container>
        <Row style={{padding:"2%"}}> 
            <div>
                <h2>Publications</h2>
                <p> Here are some of the articles I publihed with my colaborators over the years </p>
            </div>
           
        </Row>

        
        <Row style={{padding:"2%"}}> 
            <h3> Highlighted Publications</h3>
            <Col>
            <Card style={{ width: '18rem' }}>
              <CardHeader>Using spatiotemporal modulation to draw tactile patterns in mid-air</CardHeader>
              <CardBody>
                <CardTitle tag="h5">Title 1</CardTitle>
                <CardText>
                  Text 1
                </CardText>
                <Button href="/#/articles">
                  Go to article
                </Button>
              </CardBody>
            </Card>
            </Col>
            <Col>
            <Card style={{ width: '18rem' }}>
              <CardHeader>Mid-air haptic bio-holograms in mixed reality</CardHeader>
              <CardBody>
                <CardTitle tag="h5">Title 2</CardTitle>
                <CardText>
                  A simple texte
                </CardText>
                <Button href="/#/articles">
                  Go to article
                </Button>
              </CardBody>
            </Card>
            </Col>
            <Col>
            <Card style={{ width: '18rem' }}>
              <CardHeader>Manifesto for digital social touch in crisis</CardHeader>
              <CardBody>
                <CardTitle tag="h5">Tic-Tact-Toe</CardTitle>
                <CardText>
                  A simple text.
                </CardText>
                <Button href="/#/articles">
                  Go to article
                </Button>
              </CardBody>
            </Card>
            </Col>
        </Row>

        <Row style={{padding:"2%"}}> 
            <h3>All publications in antichronological order</h3>
            <Accordion open={open} toggle={toggle}>
                <AccordionItem>
                <AccordionHeader targetId="1">2025</AccordionHeader>
                <AccordionBody accordionId="1">
                    <ListGroup flush>
                    <ListGroupItem>
                    N. Alakhawand, D. Pittera, S. Tronci, O. Georgiou and <strong>W. Frier</strong>, 
                    <em>"Force is All you Need? Rethinking Acoustic-Only Prediction of Mid-Air Haptics Perceived Strength"</em> (2025)
                    IEEE World Haptics Conference (WHC). 
                    <a href="https://doi.org/10.1109/WHC64065.2025.11123342" target="_blank">doi: 10.1109/WHC64065.2025.11123342</a>
                    </ListGroupItem>
                    <ListGroupItem>
                    M. Stroinski, K. Kwarciak, M. Kowalewski, D.  Hemmerling, <strong>W. Frier</strong>, and O. Georgiou
                    <em>"Text‐to‐Haptics: Enhancing Multisensory Storytelling through Emotionally Congruent Midair Haptics"</em> (2025)
                    Advanced Intelligent Systems. 
                    <a href="https://doi.org/10.1002/aisy.202400758" target='_blank'>doi: 10.1002/aisy.202400758</a>
                    </ListGroupItem>
                    </ListGroup>
                </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                <AccordionHeader targetId="2">2024</AccordionHeader>
                <AccordionBody accordionId="2">
                    <p>Some text</p> 
                </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                <AccordionHeader targetId="3">2023</AccordionHeader>
                <AccordionBody accordionId="3">
                    <p>Some text</p>
                </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                <AccordionHeader targetId="4">2022</AccordionHeader>
                <AccordionBody accordionId="4">
                    <p>Some text</p>
                </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                <AccordionHeader targetId="5">2021</AccordionHeader>
                <AccordionBody accordionId="5">
                    <p>Some text</p>
                </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                <AccordionHeader targetId="6">2020</AccordionHeader>
                <AccordionBody accordionId="6">
                    <p>Some text</p>
                </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                <AccordionHeader targetId="7">2019</AccordionHeader>
                <AccordionBody accordionId="7">
                    <p>Some text</p>
                </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                <AccordionHeader targetId="8">2018</AccordionHeader>
                <AccordionBody accordionId="8">
                    <p>Some text</p>
                </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                <AccordionHeader targetId="9">2017</AccordionHeader>
                <AccordionBody accordionId="9">
                    <p>Some text</p>
                </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                <AccordionHeader targetId="10">2016</AccordionHeader>
                <AccordionBody accordionId="10">
                    <p>Some text</p>
                </AccordionBody>
                </AccordionItem>
      </Accordion>

        </Row>
    </Container>
    </>
);
}

export default ArticlePage;