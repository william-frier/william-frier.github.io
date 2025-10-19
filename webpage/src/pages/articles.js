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
                <p> Here are some of the articles I publihed with my collaborators over the years </p>
            </div>
           
        </Row>

        
        <Row style={{padding:"2%"}}> 
            <h3> Highlighted Publications</h3>
            <Col>
            <Card style={{ width: '18rem' }}>
              <CardHeader>Using spatiotemporal modulation to draw tactile patterns in mid-air</CardHeader>
              <CardBody>
                <CardTitle tag="h5">2018</CardTitle>
                <CardText>
                    Frier, W., Ablart, D., Chilles, J., Long, B., Giordano, M., Obrist, M., & Subramanian, S.
                    In International Conference on Human Haptic Sensing and Touch Enabled Computer Applications (EuroHaptics)
                </CardText>
                <Button href="https://doi.org/10.1007/978-3-319-93445-7_24" target="_blank">
                  Go to article
                </Button>
              </CardBody>
            </Card>
            </Col>
            <Col>
            <Card style={{ width: '18rem' }}>
              <CardHeader>Mid-air haptic bio-holograms in mixed reality</CardHeader>
              <CardBody>
                <CardTitle tag="h5">2019</CardTitle>
                <CardText>
                  Romanus, T., Frish, S., Maksymenko, M., Frier, W., Corenthy, L., & Georgiou, O. 
                  In 2019 IEEE international symposium on mixed and augmented reality adjunct (ISMAR-Adjunct)
                </CardText>
                <Button href="https://doi.org/10.1109/ISMAR-Adjunct.2019.00-14" target="_blank">
                  Go to article
                </Button>
              </CardBody>
            </Card>
            </Col>
            <Col>
            <Card style={{ width: '18rem' }}>
              <CardHeader>Manifesto for digital social touch in crisis</CardHeader>
              <CardBody>
                <CardTitle tag="h5">2021</CardTitle>
                <CardText>
                Jewitt, C., Price, S., Steimle, J., Huisman, G., Golmohammadi, L., Pourjafarian, N., Frier, W., Howard, T., Ipakchian Askari, S., Ornati, M., Paneels, S., & Weda, J. (2021)
                In Frontiers in Computer Science.
                </CardText>
                <Button href="https://doi.org/10.3389/fcomp.2021.754050" target="_blank">
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
                    <ListGroup flush>
                    <ListGroupItem>
                    Hemmerling, D. , Stroinski, M., Kwarciak, K., Trusiak, K., Szymkowski, M., Celniak, W., <strong>Frier, W.</strong>, Georgiou, O., & Maksymenko, M. (2022). 
                    <em>Touchless touch with biosignal transfer for online communication. </em>
                    In Proceedings of the 2022 International Conference on Multimodal Interaction.
                    <a href="https://doi.org/10.1145/3536221.3556585" target="_blank">doi: 10.1145/3536221.3556585</a>
                    </ListGroupItem>
                    <ListGroupItem>
                    Morales, R., Pittera, D., Georgiou, O., Kappus, B., & <strong>Frier, W.</strong> (2022). 
                    <em>UltraButton: A minimalist touchless multimodal haptic button. </em> 
                    IEEE Transactions on Haptics.
                    <a href="https://doi.org/10.1109/TOH.2022.3214322" target="_blank">doi: 10.1109/TOH.2022.3214322</a>
                    </ListGroupItem>
                    <ListGroupItem>
                    Morales, R., Georgiou, O., Marzo, A., & <strong>Frier, W.</strong> (2022). 
                    <em>Comparison of Experiment and Simulation of Ultrasonic Mid-air Haptic Forces. </em>
                    In 2022 International Conference on Interactive Media, Smart Systems and Emerging Technologies (IMET)
                    <a href="https://doi.org/10.1109/IMET54801.2022.9929478" target="_blank">doi: 10.1109/IMET54801.2022.9929478</a>
                    </ListGroupItem>
                    <ListGroupItem>
                    Jang, J., <strong>Frier, W.</strong>, & Park, J. (2022). 
                    <em>Multimodal volume data exploration through mid-air haptics. </em>
                    In 2022 IEEE International Symposium on Mixed and Augmented Reality (ISMAR)
                    <a href="http://ddoi.org/10.1109/ISMAR55827.2022.00039." target="_blank">doi: 10.1109/ISMAR55827.2022.00039</a>
                    </ListGroupItem>
                    <ListGroupItem>
                    Georgiou, O., Frier, W., Freeman, E., Pacchierotti, C., & Hoshi, T. (Eds.). (2022). 
                    Ultrasound mid-air haptics for touchless interfaces (Vol. 3). 
                    In Human–Computer Interaction Series, Springer Cham
                    <a href="https://doi.org/10.1007/978-3-031-04043-6" target="_blank">doi: 10.1007/978-3-031-04043-6</a>
                    </ListGroupItem>
                    <ListGroupItem>
                    Jewitt, C., Price, S., Steimle, J., Huisman, G., Golmohammadi, L., Pourjafarian, N., <strong>Frier, W.</strong>, Howard, T., Ipakchian Askari, S., Ornati, M., Paneels, S., & Weda, J. (2022). 
                    <em>A provocative call to engage with social and sensory aspects of touch. </em>
                    Multimodality & Society
                    <a href="https://doi.org/10.1177/26349795221115463" target="_blank">doi: 10.1177/26349795221115463</a>
                    </ListGroupItem>
                    <ListGroupItem>
                    Alakhawand, N., <strong>Frier, W.</strong>, & Lepora, N. F. (2022). 
                    <em>Mapping mid-air haptics with a low-cost tactile robot. </em>
                    IEEE Robotics and Automation Letters
                    <a href="https://doi.org/10.1109/LRA.2022.3186490" target="_blank">doi: 10.1109/LRA.2022.3186490</a>
                    </ListGroupItem>
                    <ListGroupItem>
                    <strong>Frier, W.</strong>, Abdouni, A., Pittera, D., Georgiou, O., & Malkin, R. (2022). 
                    <em>Simulating airborne ultrasound vibrations in human skin for haptic applications. </em>
                    IEEE Access
                    <a href="https://doi.org/10.1109/ACCESS.2022.3147725" target="_blank">doi: 10.1109/ACCESS.2022.3147725</a>
                    </ListGroupItem>
                    <ListGroupItem>
                    Georgiou, O., <strong>Frier, W.</strong>, Freeman, E., Pacchierotti, C., Hoshi, T. (2022). 
                    <em>Mid-Air Haptics: Future Challenges and Opportunities. </em>
                    In: Georgiou, O., Frier, W., Freeman, E., Pacchierotti, C., Hoshi, T. (eds) 
                    Ultrasound Mid-Air Haptics for Touchless Interfaces. Human–Computer Interaction Series. Springer, Cham. 
                    <a href="https://doi.org/10.1007/978-3-031-04043-6_18" target="_blank">doi: 10.1007/978-3-031-04043-6_18</a>
                    </ListGroupItem>
                    <ListGroupItem>
                    Pan, K., <strong>Frier, W.</strong>, Sahoo, D. (2022). 
                    <em>Ultrasound Mid-Air Haptic Feedback at the Fingertip. </em>
                    In: Georgiou, O., Frier, W., Freeman, E., Pacchierotti, C., Hoshi, T. (eds) 
                    Ultrasound Mid-Air Haptics for Touchless Interfaces. Human–Computer Interaction Series. Springer, Cham.
                    <a href="https://doi.org/10.1007/978-3-031-04043-6_13" target="_blank">doi: 10.1007/978-3-031-04043-6_13</a>
                    </ListGroupItem>
                    <ListGroupItem>
                    Georgiou, O., <strong>Frier, W.</strong>, & Schneider, O. (2022). 
                    <em>User experience and mid-air haptics: Applications, methods, and challenges. </em>
                    In: Georgiou, O., Frier, W., Freeman, E., Pacchierotti, C., Hoshi, T. (eds) 
                    Ultrasound Mid-Air Haptics for Touchless Interfaces. Human–Computer Interaction Series. Springer, Cham.
                    <a href='https://doi.org/10.1007/978-3-031-04043-6_2'target="_blank">doi: 10.1007/978-3-031-04043-6_2</a>
                    </ListGroupItem>
                    <ListGroupItem>
                    Brown, E., Large, D.R., Limerick, H., <strong>Frier, W.</strong>, Burnett, G. (2022). 
                    <em>Augmenting Automotive Gesture Infotainment Interfaces Through Mid-Air Haptic Icon Design. </em>
                    In: Georgiou, O., Frier, W., Freeman, E., Pacchierotti, C., Hoshi, T. (eds) 
                    Ultrasound Mid-Air Haptics for Touchless Interfaces. Human–Computer Interaction Series. Springer, Cham. 
                    <a href="https://doi.org/10.1007/978-3-031-04043-6_5" target="_blank">doi: 10.1007/978-3-031-04043-6_5</a>
                    </ListGroupItem>
                    <ListGroupItem>
                    Deans-Browne, C., Cataldo, A., <strong>Frier, W.</strong>, Limerick, H., Beattie, D., & Haggard, P. (2022). 
                    <em>Sense of Agency Over Hands-free Gestural Control is Modulated by the Timing of Haptic Feedback.</em> 
                    In Proceedings of EuroHaptics 2022.
                    <a href="https://doi.org/10.1007/978-3-031-06249-0" target="_blank">doi: 10.1007/978-3-031-06249-0</a>
                    </ListGroupItem>
                    <ListGroupItem>
                    Brown, E., Large, D. R., Limerick, H., <strong>Frier, W.</strong>, & Burnett, G. (2022)
                    <em>Validating the Salience of Haptic Icons for Automotive Mid-Air Haptic Gesture Interfaces. </em>
                    In Proceedings of Ergonomics & Human Factors 2022.
                    <a href="https://virtual.oxfordabstracts.com/event/2561/submission/15" target="_blank">link</a>
                    </ListGroupItem>
                    </ListGroup>
                </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                <AccordionHeader targetId="5">2021</AccordionHeader>
                <AccordionBody accordionId="5">
                    <ListGroup flush>
                    <ListGroupItem>
                    Jewitt, C., Price, S., Steimle, J., Huisman, G., Golmohammadi, L., Pourjafarian, N., <strong>Frier, W.</strong>, Howard, T., Ipakchian Askari, S., Ornati, M., Paneels, S., & Weda, J. (2021)
                   <em>Manifesto for digital social touch in crisis. </em>
                    Frontiers in Computer Science.
                    <a href="https://doi.org/10.3389/fcomp.2021.754050" target="_blank">doi: 10.3389/fcomp.2021.754050</a>
                    </ListGroupItem>
                    <ListGroupItem>
                    Mulot, L., Gicquel, G., Zanini, Q., <strong>Frier, W.</strong>, Marchal, M., Pacchierotti, C., & Howard, T. (2021). 
                    <em>Dolphin: A framework for the design and perceptual evaluation of ultrasound mid-air haptic stimuli. </em>
                    In ACM Symposium on Applied Perception.
                    <a href="https://doi.org/10.1145/3474451.3476232" target="_blank">doi: 10.1145/3474451.3476232</a>
                    </ListGroupItem>
                    <ListGroupItem>
                    Pittera, D., Georgiou, O., Abdouni, A., & <strong>Frier, W.</strong> (2021)
                    <em>“I can feel it coming in the hairs tonight”: Characterising mid-air haptics on the hairy parts of the skin.</em>
                    IEEE Transactions on Haptics.
                    <a href="htttp://doi.org/10.1109/TOH.2021.3110722" target="_blank">doi: 10.1109/TOH.2021.3110722</a>
                    </ListGroupItem>
                    <ListGroupItem>
                    Moore, W., Makdani, A., <strong>Frier, W.</strong>, & McGlone, F. (2021)
                    <em>Virtual touch: sensing and feeling with ultrasound.</em>
                    bioRxiv.
                    <a href="https://doi.org/10.1101/2021.08.25.457633" target="_blank">doi: 10.1101/2021.08.25.457633</a>
                    </ListGroupItem>
                    <ListGroupItem>
                    Jang, J., <strong>Frier, W.</strong>, Georgiou, O., & Park, J. (2021)
                    <em>Using mid-air tactile patterns in interactive volume exploration. </em>
                    In IEEE World Haptics Conference 2021.
                    <a href="https://koasas.kaist.ac.kr/handle/10203/288933" target="_blank">link</a>
                    </ListGroupItem>
                    <ListGroupItem>
                    Mulot, L., Gicquel, G., <strong>Frier, W.</strong>, Marchal, M., Pacchierotti, C., & Howard, T. (2021)
                    <em>Curvature Discrimination for Dynamic Ultrasound Mid-Air Haptic Stimuli.</em>
                    IEEE World Haptics Conference (WHC)
                    <a href="http://doi.org/10.1109/WHC49131.2021.9517247" target="_blank">doi: 10.1109/WHC49131.2021.9517247</a>
                    </ListGroupItem>
                    <ListGroupItem>
                    Morales González, R., Marzo, A., Freeman, E., <strong>Frier, W.</strong>, & Georgiou, O. (2021)
                    <em>Ultrapower: Powering tangible & wearable devices with focused ultrasound. </em>
                    In proceedings of the fifteenth international conference on tangible, embedded, and embodied interaction.
                    <a href="https://doi.org/10.1145/3430524.3440620" target="_blank">doi: 10.1145/3430524.3440620</a>
                    </ListGroupItem>
                    </ListGroup>
                </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                <AccordionHeader targetId="6">2020</AccordionHeader>
                <AccordionBody accordionId="6">
                    <ListGroup flush>
                      <ListGroupItem>
                      Beattie, D., <strong>Frier, W.</strong>, Georgiou, O., Long, B., & Ablart, D. (2020) 
                      <em>Incorporating the perception of visual roughness into the design of mid-air haptic textures. </em>
                      In ACM Symposium on applied perception.
                      <a href="https://doi.org/10.1145/3385955.3407927" target="_blank">doi: 10.1145/3385955.3407927</a>
                      </ListGroupItem>
                      <ListGroupItem>
                      Alakhawand, N., <strong>Frier, W.</strong>, Freud, K. M., Georgiou, O., & Lepora, N. F. (2020) 
                      <em>Sensing ultrasonic mid-air haptics with a biomimetic tactile fingertip. </em>
                      In International Conference on Human Haptic Sensing and Touch Enabled Computer Applications (EuroHaptics)
                      <a href="https://doi.org/10.1007/978-3-030-58147-3_40" target="_blank">doi: 10.1007/978-3-030-58147-3_40</a>
                      </ListGroupItem>
                      <ListGroupItem>
                      Rutten, I., <strong>Frier, W.</strong>, & Geerts, D. (2020). 
                      <em>Discriminating between intensities and velocities of mid-air haptic patterns. </em>
                      In International Conference on Human Haptic Sensing and Touch Enabled Computer Applications (EuroHaptics)
                      <a href=" https://doi.org/10.1007/978-3-030-58147-3_9" target="_blank">doi: 10.1007/978-3-030-58147-3_9</a>
                      </ListGroupItem>
                      <ListGroupItem>
                      <strong>Frier, W.</strong> (2020)
                      <em>Rendering spatiotemporal mid-air tactile patterns </em>
                      (Doctoral dissertation, University of Sussex).
                      <a href="https://hdl.handle.net/10779/uos.23478383.v1"  target="_blank">link</a>
                      </ListGroupItem>
                    </ListGroup>
                </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                <AccordionHeader targetId="7">2019</AccordionHeader>
                <AccordionBody accordionId="7">
                    <ListGroup flush>
                      <ListGroupItem>
                      Romanus, T., Frish, S., Maksymenko, M., <strong>Frier, W.</strong>, Corenthy, L., & Georgiou, O. (2019). 
                      <em>Mid-air haptic bio-holograms in mixed reality. </em>
                      In 2019 IEEE international symposium on mixed and augmented reality adjunct (ISMAR-Adjunct)
                      <a href="https://doi.org/10.1109/ISMAR-Adjunct.2019.00-14" target="_blank">doi: 10.1109/ISMAR-Adjunct.2019.00-14</a>
                      </ListGroupItem>
                      <ListGroupItem>
                      Ablart, D., <strong>Frier, W.</strong>, Limerick, H., Georgiou, O., & Obrist, M. (2019). 
                      <em>Using ultrasonic mid-air haptic patterns in multi-modal user experiences. </em>
                      In 2019 IEEE International Symposium on Haptic, Audio and visual Environments and games (HAVE)
                      <a href="https://doi.org/10.1109/HAVE.2019.8920969" target='_blank'>doi: 10.1109/HAVE.2019.8920969</a>
                      </ListGroupItem>
                      <ListGroupItem>
                      Reardon, G., Shao, Y., Dandu, B., <strong>Frier, W.</strong>, Long, B., Georgiou, O., & Visell, Y. (2019)
                      <em>Cutaneous wave propagation shapes tactile motion: Evidence from air-coupled ultrasound. </em>
                      In 2019 IEEE World Haptics Conference (WHC)
                      <a href="https://doi.org/10.1109/WHC.2019.8816150" target="_blank">doi: 10.1109/WHC.2019.8816150</a>
                      </ListGroupItem>
                      <ListGroupItem>
                      Chilles, J., <strong>Frier, W.</strong>, Abdouni, A., Giordano, M., & Georgiou, O. (2019)
                      <em>Laser doppler vibrometry and fem simulations of ultrasonic mid-air haptics. </em>
                      In 2019 IEEE World Haptics Conference (WHC)
                      <a href="https://doi.org/10.1109/WHC.2019.8816097" target="_blank">doi: 10.1109/WHC.2019.8816097</a>
                      </ListGroupItem>
                      <ListGroupItem>
                      Rutten, I., <strong>Frier, W.</strong>, Van den Bogaert, L., & Geerts, D. (2019)
                      <em>Invisible touch: How identifiable are mid-air haptic shapes?</em>
                      In Extended abstracts of the 2019 CHI conference on human factors in computing systems
                      <a href="https://doi.org/10.1145/3290607.3313004" target="_blank">doi: 10.1145/3290607.3313004</a>
                      </ListGroupItem>
                      <ListGroupItem>
                      Shakeri, G., Freeman, E., <strong>Frier, W.</strong>, Iodice, M., Long, B., Georgiou, O., & Andersson, C. (2019). 
                      <em>Three-in-one: levitation, parametric audio, and mid-air haptic feedback. </em>
                      In Extended abstracts of the 2019 CHI conference on human factors in computing systems
                      <a href="https://doi.org/10.1145/3290607.3313264" target="_blank">doi: 10.1145/3290607.3313264</a>
                      </ListGroupItem>
                      <ListGroupItem>
                      <strong>Frier, W.</strong>, Pittera, D., Ablart, D., Obrist, M., & Subramanian, S. (2019). 
                      <em>Sampling strategy for ultrasonic mid-air haptics. </em>
                      In Proceedings of the 2019 CHI conference on human factors in computing systems 
                      <a href="https://doi.org/10.1145/3290605.3300351" target="_blank">doi: 10.1145/3290605.3300351</a>
                      </ListGroupItem>
                      <ListGroupItem>
                      Driller, K. K., <strong>Frier, W.</strong>, Pont, S. C., & Hartcher-O’Brien, J. (2019). 
                      <em>Mid-air ultrasonic stimulations of the palm-the influence of frequency and stimulus duration on perceived intensity. </em>
                      In Extended Abstract of the 2019 IEEE World Haptics Conference (WHC)
                      <a href="https://pure.tudelft.nl/ws/files/67442008/KD_WF_SP_JHO_2019_WIP_May.pdf" target="_blank">link</a>
                      </ListGroupItem>
                    </ListGroup>
                </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                <AccordionHeader targetId="8">2018</AccordionHeader>
                <AccordionBody accordionId="8">
                    <ListGroup flush>
                    <ListGroupItem>
                    Carter, T. A., Long, B. J. O., & <strong>Frier, W. T. A.</strong> (2018)
                    <em>Perceptions in a haptic system</em>
                    U.S. Patent No. 10,101,814. Washington, DC: U.S. Patent and Trademark Office.
                    <a href="https://patents.google.com/patent/US10101814B2/en" target="_blank">link</a>
                    </ListGroupItem>
                    <ListGroupItem>
                    Iodice, M., <strong>Frier, W.</strong>, Wilcox, J., Long, B., & Georgiou, O. (2018)
                    <em>Pulsed schlieren imaging of ultrasonic haptics and levitation using phased arrays. </em>
                    arXiv preprint arXiv:1810.00258.
                    <a href="https://doi.org/10.48550/arXiv.1810.00258" target="_blank">doi: 10.48550/arXiv.1810.00258</a>
                    </ListGroupItem>
                    <ListGroupItem>
                    Dzidek, B., <strong>Frier, W.</strong>, Harwood, A., & Hayden, R. (2018) 
                    <em>Design and evaluation of mid-air haptic interactions in an augmented reality environment. </em>
                    In International Conference on Human Haptic Sensing and Touch Enabled Computer Applications (Eurohaptics)
                    <a href="https://doi.org/10.1007/978-3-319-93399-3_42" target="_blank">doi: 10.1007/978-3-319-93399-3_42</a>
                    </ListGroupItem>
                    <ListGroupItem>
                    <strong>Frier, W.</strong>, Ablart, D., Chilles, J., Long, B., Giordano, M., Obrist, M., & Subramanian, S. (2018)
                    <em>Using spatiotemporal modulation to draw tactile patterns in mid-air. </em>
                    In International Conference on Human Haptic Sensing and Touch Enabled Computer Applications (EuroHaptics)
                    <a href="https://doi.org/10.1007/978-3-319-93445-7_24" target="_blank">doi: 10.1007/978-3-319-93445-7_24</a>
                    </ListGroupItem>
                    </ListGroup>
                </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                <AccordionHeader targetId="9">2017</AccordionHeader>
                <AccordionBody accordionId="9">
                    <ListGroup flush>
                      <ListGroupItem>
                      Carter, T. A., Long, B. J. O., Subramanian, S., Blenkinsopp, R. C., Seah, S. A., & <strong>Frier, W. T. A.</strong> (2017).
                      <em>Perceptions in a haptic system</em>
                      U.S. Patent No. 9,841,819. Washington, DC: U.S. Patent and Trademark Office.
                      <a href="https://patents.google.com/patent/US9841819B2/en" target="_blank">link</a>
                      </ListGroupItem>
                    </ListGroup>
                </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                <AccordionHeader targetId="10">2016</AccordionHeader>
                <AccordionBody accordionId="10">
                    <ListGroup flush>
                      <ListGroupItem>
                      <strong>Frier, W.</strong>, Seo, K., & Subramanian, S. (2016)
                      <em>Hilbert curves: a tool for resolution independent haptic texture. </em>
                      In Adjunct Proceedings of the 29th Annual ACM Symposium on User Interface Software and Technology
                      <a href="https://doi.org/10.1145/2984751.2984774" target="_blank">doi: 10.1145/2984751.2984774</a>
                      </ListGroupItem>
                    </ListGroup>
                </AccordionBody>
                </AccordionItem>
      </Accordion>

        </Row>
    </Container>
    </>
);
}

export default ArticlePage;