import React from "react";
import '../../style.css';

import {
    Button,
    Row,
    Col,
    Container,
    Input,
    FormGroup,
    Label
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

    function getVibValue() {
        const VibValue1 = document.getElementById("duration 1").value
        const BreakValue1 = document.getElementById("break 1").value
        const VibValue2 = document.getElementById("duration 2").value
        const BreakValue2 = document.getElementById("break 2").value
        const VibValue3 = document.getElementById("duration 3").value
        handleVibrate([VibValue1, BreakValue1,
                        VibValue2, BreakValue2,
                        VibValue3])
    }
    
 
    return(
        <div>
            <h1>Project 3 - Haptics</h1>

            <h5><em>Works with Android, when "silent mode" is not active.</em></h5>
            <p>I tested the below with my personal phone (Pixel 7)</p>
            <p>To perceive vibrations less than 1s long, I had to ajdust the level of "Vibration and haptics/Interactive Haptics/Touch feeeback" in the setting menu</p>
            <p>Note that this use <code>navigator.vibrate()</code></p>
            <p>There is a limit of 10s</p>
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
                <div style={{marginTop:20}}></div>
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
                <div style={{marginTop:20}}></div>
                <Row>
                    <Col>
                        <Button onClick={() => handleVibrate([100, 10, 100])}>100, 10, 100</Button>
                    </Col>
                    <Col>
                        <Button onClick={() => handleVibrate([10, 1, 10])}>10, 1, 10</Button>
                    </Col>
                    <Col>
                        <Button onClick={() => handleVibrate([100, 10, 100])}>50, 20, 100</Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button onClick={() => handleVibrate([200, 100, 200, 100, 200, 100,
                                                            400, 100, 400, 100, 400, 100,
                                                            200, 100, 200, 100, 200, 100 ])}>
                            S.O.S.</Button>
                    </Col>
                    <Col>
                            <Button onClick={() => handleVibrate([200, 100, 200, 100, 200, 100,
                                                            400, 100, 400, 100, 400, 100,
                                                            200, 100, 200, 100, 200, 1000,
                                                            200, 100, 200, 100, 200, 100,
                                                            400, 100, 400, 100, 400, 100,
                                                            200, 100, 200, 100, 200, 100 ])}>
                            S.O.S. x2</Button>

                    </Col>
                    <Col>
                        <Button onClick={() => handleVibrate([20000])}>Long (20s)</Button>
                    </Col>
                </Row>

            </Container>

            <div style={{marginTop:50}}></div>

            <div>
                <Container>
                    <Row>
                        <Col md={2}>
                            <FormGroup>
                                <Label for="duration 1">
                                    Vib Duration
                                </Label>
                                <Input type="text" id="duration 1"></Input>
                            </FormGroup>
                        </Col>
                        <Col md={2}>
                            <FormGroup>
                                <Label for="break 1">
                                    Break Duration
                                </Label>
                                <Input type="text" id="break 1"></Input>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={2}>
                            <FormGroup>
                                <Label for="duration 2">
                                    Vib Duration
                                </Label>
                                <Input type="text" id="duration 2"></Input>
                            </FormGroup>
                        </Col>
                        <Col md={2}>
                            <FormGroup>
                                <Label for="break 2">
                                    Break Duration
                                </Label>
                                <Input type="text" id="break 2"></Input>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={2}>
                            <FormGroup>
                                <Label for="duration 3">
                                    Vib Duration
                                </Label>
                                <Input type="text" id="duration 3"></Input>
                            </FormGroup>
                        </Col>
                        <Col md={2}>
                            <FormGroup>
                                <Label for="submit">
                                    Validate
                                </Label>
                                <Button onClick={getVibValue} id="submit">Submit Pattern</Button>
                            </FormGroup>
                        </Col>
                    </Row>
                </Container>
                
            </div>

            <div class="circle">
                
            </div>


        </div>
    );
}

export default Project3;