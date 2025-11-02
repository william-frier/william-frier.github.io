import React from "react";
import '../../style.css';

import {
    Button,
    Row,
    Col,
    Container
  } from 'reactstrap';



  function Project3() {

    function handleVibrate(time) {
        if ("vibrate" in navigator) {
            navigator.vibrate(0);
            navigator.vibrate(time);
        } else {
            alert("Vibration API not supported on this device.");
        }
      };
    
 
    return(
        <div>
            <h1>Project 3 - Haptics</h1>

            <h5><em>Test with Android, no "silent mode"</em></h5>

            <p>My pixel 7 takes shorter than 1s depends on the level of "Vibration and haptics/Interactive Haptics/Touch feeeback" options</p>

            <Container>
                <Row>
                    <Col>
                        <Button onClick={() => handleVibrate([2000])}>2000ms</Button>
                    </Col>
                    <Col>
                        <Button onClick={() => handleVibrate([1500])}>1500ms</Button>
                    </Col>
                    <Col>
                        <Button onClick={() => handleVibrate([1001])}>1001ms</Button>
                    </Col>
                </Row>
                <Row>
                <Col>
                        <Button onClick={() => handleVibrate([200])}>200ms</Button>
                    </Col>
                    <Col>
                        <Button onClick={() => handleVibrate([100])}>100ms</Button>
                    </Col>
                    <Col>
                        <Button onClick={() => handleVibrate([50])}>50ms</Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button onClick={() => handleVibrate([100, 10, 100])}>100, 10, 100</Button>
                    </Col>
                    <Col>
                        <Button onClick={() => handleVibrate([10, 1, 10])}>10, 1, 10</Button>
                    </Col>
                    <Col>
                        <Button onClick={() => handleVibrate([100, 10, 100])}>50, 20,  100</Button>
                    </Col>
                </Row>

            </Container>


        </div>
    );
}

export default Project3;