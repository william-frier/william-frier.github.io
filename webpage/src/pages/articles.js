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

function ArticlePage() {
  return (

    <>

    <Container>

        <Row>
            <Col>
            <Card style={{ width: '18rem' }}>
              <CardHeader>Article 1</CardHeader>
              <CardBody>
                <CardTitle tag="h5">Title 1</CardTitle>
                <CardText>
                  Text 1
                </CardText>
                <Button href="/#/">
                  Go to article
                </Button>
              </CardBody>
            </Card>
            </Col>
            <Col>
            <Card style={{ width: '18rem' }}>
              <CardHeader>Article 2</CardHeader>
              <CardBody>
                <CardTitle tag="h5">Title 2</CardTitle>
                <CardText>
                  A simple texte
                </CardText>
                <Button href="/#/">
                  Go to article
                </Button>
              </CardBody>
            </Card>
            </Col>
            <Col>
            <Card style={{ width: '18rem' }}>
              <CardHeader>Article 3</CardHeader>
              <CardBody>
                <CardTitle tag="h5">Tic-Tact-Toe</CardTitle>
                <CardText>
                  A simple text.
                </CardText>
                <Button href="/#/">
                  Go to article
                </Button>
              </CardBody>
            </Card>
            </Col>
        </Row>
    </Container>


    </>
);
}

export default ArticlePage;