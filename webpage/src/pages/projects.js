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

        <Row style={{padding:"2%"}}>
          <Col>
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
          <Col>
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

          <Col>
            <Card style={{ width: '16rem' }}>
              <CardHeader>Project 3</CardHeader>
              <CardBody>
                <CardTitle tag="h5">Magic Button</CardTitle>
                <CardText>
                  Trying something out 
                </CardText>
                <MyButton/>
              </CardBody>
            </Card>
          </Col>
          </Row>
        </Container>

        
    </>
  );
}

function MyButton() {
  function handleClick() {
    alert('Stop pushing my buttons!');
  }

  return (
    <Button onClick={handleClick} style={{width:"12rem"}}>
      Here is a button.
    </Button>
  );
}

export default ProjectPage;