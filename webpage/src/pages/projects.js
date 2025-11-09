import '../style.css';

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
    UncontrolledTooltip

} from 'reactstrap';

function ProjectPage() {
  return (
    <>
     <Container>
        <Row style={{padding:"2%"}}> 
    
            <h1>Projects</h1>
            <p>Here is a little sometthing different...</p>
            <p>
              I am learning web development. 
              On this page, I am sharing small projects I am doing as I am practicing.
              Nothing fancy, just ome Node.js and React.
            </p>

        </Row>       

        <Row>

        <Col sm={{offset:1, size:"auto"}}>
            <Card style={{ width: '16rem' }}>
              <CardHeader>Project 0</CardHeader>
              <CardBody>
                <CardTitle tag="h5">Magic Button</CardTitle>
                <CardText>
                  Trying something out 
                </CardText>
                <Button id="ScheduleUpdateTooltip">
                  Here is a button.
                </Button>
                <UncontrolledTooltip
                  placement="top"
                  target="ScheduleUpdateTooltip"
                  trigger="click"
                > stop pushing my button</UncontrolledTooltip>
              </CardBody>
            </Card>
          </Col>
          <Col sm={{offset:1, size:"auto"}}>
            <Card style={{ width: '16rem' }}>
              <CardHeader>Project 1</CardHeader>
              <CardBody>
                <CardTitle tag="h5">Tic-Tact-Toe</CardTitle>
                <CardText>
                  A simple tic-tac-toe game.
                </CardText>
                <Button href="/#/projects/project1">
                  Go to project
                </Button>
              </CardBody>
            </Card>
          </Col>
          <Col sm={{offset:1, size:"auto"}}>
            <Card style={{ width: '16rem' }}>
              <CardHeader>Project 2</CardHeader>
              <CardBody>
                <CardTitle tag="h5">Charts</CardTitle>
                <CardText>
                  Playing with displaying data
                </CardText>
                <Button href="/#/projects/project2">
                  Go to project
                </Button>
              </CardBody>
            </Card>
          </Col>
          </Row>
          <Row>
            <Col sm={{offset:1, size:"auto"}}>
              <Card style={{width:'16rem'}}>
                <CardHeader>Project 3</CardHeader>
                <CardBody>
                  <CardTitle tag="h5">Haptics?</CardTitle>
                  <CardText>
                    Haptics?
                  </CardText>
                  <Button href="/#/projects/project3">
                  Go to project
                </Button>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>

        
    </>
  );
}

export default ProjectPage;