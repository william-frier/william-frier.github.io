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
                    Alakhawand, N., Pittera, D., Tronci, S., Georgiou, O., & <strong>Frier, W.</strong> (2025).
                    <em>"Force is All you Need? Rethinking Acoustic-Only Prediction of Mid-Air Haptics Perceived Strength"</em> 
                    IEEE World Haptics Conference (WHC). 
                    <a href="https://doi.org/10.1109/WHC64065.2025.11123342" target="_blank">doi: 10.1109/WHC64065.2025.11123342</a>
                    </ListGroupItem>
                    <ListGroupItem>
                    Stroinski, M., Kwarciak, K., Kowalewski, M., Hemmerling, D., <strong>Frier, W.</strong>, & Georgiou, O. (2025).
                    <em>"Text‐to‐Haptics: Enhancing Multisensory Storytelling through Emotionally Congruent Midair Haptics"</em> 
                    Advanced Intelligent Systems. 
                    <a href="https://doi.org/10.1002/aisy.202400758" target='_blank'>doi: 10.1002/aisy.202400758</a>
                    </ListGroupItem>
                    </ListGroup>
                </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                <AccordionHeader targetId="2">2024</AccordionHeader>
                <AccordionBody accordionId="2">
                    <ListGroup flush>
                    <ListGroupItem>
                    Montano, R., Morales, R., Pittera, D., <strong>Frier, W.</strong>, Georgiou, O., & Cornelio, P. (2024).
                    <em>Knuckles notifications: mid-air haptic feedback on the dorsal hand for hands-on-the-wheel driving.</em>
                    Frontiers in Computer Science.
                    <a href="https://doi.org/10.3389/fcomp.2024.1455201" target='_blank'>doi: 10.3389/fcomp.2024.1455201</a>
                    </ListGroupItem>
                    <ListGroupItem>
                    Xue, J., Montano Murillo, R., Dawes, C., <strong>Frier, W.</strong>, Cornelio, P., & Obrist, M.  (2024).
                    <em>"Fabsound: audio-tactile and affective fabric experiences through mid-air haptics."</em> 
                    In Proceedings of the 2024 CHI Conference on Human Factors in Computing Systems.
                    <a href="https://doi.org/10.1145/3613904.3642533" target="_blank">doi: 10.1145/3613904.3642533</a>
                    </ListGroupItem>
                    <ListGroupItem>
                    Maunsbach, M., <strong>Frier, W.</strong>, & Hornbæk, K. (2024).
                    <em>MAMMOTH: Mid-Air Mesh-based Modulation Optimization Toolkit for Haptics.</em> 
                    In Extended Abstracts of the CHI Conference on Human Factors in Computing Systems.
                    <a href="https://doi.org/10.1145/3613905.3651060" target="_blank">doi: 10.1145/3613905.3651060</a>
                    </ListGroupItem>
                    </ListGroup>
                </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                <AccordionHeader targetId="3">2023</AccordionHeader>
                <AccordionBody accordionId="3">
                    <ListGroup flush>
                    <ListGroupItem>
                    Cataldo, A., <strong>Frier, W.</strong>, & Haggard, P. (2023). 
                    <em>Quantifying spatial acuity of frequency resolved midair ultrasound vibrotactile stimuli.</em>
                    Scientific Reports.
                    <a href="https://doi.org/10.1038/s41598-023-48037-0" target="_blank">doi: 10.1038/s41598-023-48037-0</a>
                    </ListGroupItem>
                    <ListGroupItem>
                    Montano-Murillo, R., Pittera, D., <strong>Frier, W.</strong>, Georgiou, O., Obrist, M., & Cornelio, P. (2023). 
                    <em>It sounds cool: Exploring sonification of mid-air haptic textures exploration on texture judgments, body perception, and motor behaviour.</em>
                    IEEE Transactions on Haptics.
                    <a href="https://doi.org/10.1109/TOH.2023.3320492" target="_blank">doi: 10.1109/TOH.2023.3320492</a>
                    </ListGroupItem>
                    <ListGroupItem>
                    Wojna, K., Georgiou, O., Beattie, D., <strong>Frier, W.</strong>, Wright, M., & Lutteroth, C. (2023). 
                    <em>An exploration of just noticeable differences in mid-air haptics. </em>
                    In 2023 IEEE World Haptics Conference (WHC)
                    <a href="https://doi.org/doi: 10.1109/WHC56415.2023.10224388" target="_blank">doi: 10.1109/WHC56415.2023.10224388</a>
                    </ListGroupItem>
                    <ListGroupItem>
                    Neate, T., Maffra, S. A., <strong>Frier, W.</strong>, You, Z., & Wilson, S. (2023).
                    <em>Using mid-air haptics to guide mid-air interactions.</em>
                    In IFIP Conference on Human-Computer Interaction
                    <a href="https://doi.org/10.1007/978-3-031-42280-5_3" target="_blank">doi: 10.1007/978-3-031-42280-5_3</a>
                    </ListGroupItem>
                    <ListGroupItem>
                    Theivendran, K., Wu, A., <strong>Frier, W.</strong>, & Schneider, O. (2023). 
                    <em>RecHap: an interactive recommender system for navigating a large number of mid-air haptic designs.</em>
                    IEEE Transactions on Haptics.
                    <a href="https://doi.org/10.1109/TOH.2023.3276812" target="_blank">doi: 10.1109/TOH.2023.3276812</a>
                    </ListGroupItem>
                    <ListGroupItem>
                    Pittera, D., Georgiou, O., & <strong>Frier, W.</strong> (2023).
                    <em>“I See Where This is Going”: A Psychophysical Study of Directional Mid-Air Haptics and Apparent Tactile Motion. </em>
                    IEEE Transactions on Haptics.
                    <a href="http://doi.org/10.1109/TOH.2023.3280263" target="_blank">doi: 10.1109/TOH.2023.3280263</a>
                    </ListGroupItem>
                    <ListGroupItem>
                    Cornelio, P., Hughes, S., Georgiou, O., <strong>Frier, W.</strong>, Maunsbach, M., Vasudevan, M. K., & Obrist, M. (2023). 
                    <em>Responsible innovation of touchless haptics: a prospective design exploration in social interaction. </em>
                    In Proceedings of the 2023 CHI conference on human factors in computing systems.
                    <a href="https://doi.org/10.1145/3544548.3581228" target="_blank">doi: 10.1145/3544548.3581228</a>
                    </ListGroupItem>
                    <ListGroupItem>
                    Chew, S., Dalsgaard, T. S., Maunsbach, M., Seifi, H., Bergström, J., Hornbæk, K., Irisarri, J., Ezcurdia, I., Iriarte, N., Marzo, A., <strong>Frier, W.</strong>, Georgiou, O., Sheremetieva, A., Kwarciak, K., Stroinski, M., Hemmerling, D., Maksymenko, M., Cataldo, A., Obrist, M., Haggard, P., & Subramanian, S. (2023). 
                    <em>TOUCHLESS: Demonstrations of Contactless Haptics for Affective Touch.</em>
                    In Extended Abstracts of the 2023 CHI Conference on Human Factors in Computing Systems.
                    <a href="https://doi.org/10.1145/3544549.3583913" target="_blank">doi 10.1145/3544549.3583913</a>
                    </ListGroupItem>
                    <ListGroupItem>
                    Seifi, H., Chew, S., Nascè, A. J., Lowther, W. E., <strong>Frier, W.</strong>, & Hornbæk, K. (2023). 
                    <em>Feellustrator: A design tool for ultrasound mid-air haptics. </em>
                    In Proceedings of the 2023 CHI Conference on Human Factors in Computing Systems.
                    <a href="https://doi.org/10.1145/3544548.3580728" target="_blank">doi: 10.1145/3544548.3580728</a>
                    </ListGroupItem>
                    <ListGroupItem>
                    Pittera, D., <strong>Frier, W.</strong>, Georgiou, O., Seah, S. A., & Long, B.. 
                    <em>"Stimulating the Hairy Skin Through Ultrasonic Mid-Air Haptic Stimulation."</em>
                    U.S. Patent Application 17/822,224, filed March 9, 2023.
                    <a href="https://patents.google.com/patent/US20230075917A1/en" target="_blank">link</a>
                    </ListGroupItem>
                    <ListGroupItem>
                    Howard, T., Driller, K., <strong>Frier, W.</strong>, Pacchierotti, C., Marchal, M., & Hartcher-O’Brien, J. (2023). 
                    <em>Gap detection in pairs of ultrasound mid-air vibrotactile stimuli. </em>
                    ACM Transactions on Applied Perceptions.
                    <a href="https://doi.org/10.1145/3570904" target='_blank'>doi: 10.1145/3570904</a>
                    </ListGroupItem>
                    </ListGroup> 
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