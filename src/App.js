import React, { useState, useEffect, useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import { Container, Row, Col, Alert, Accordion, Tabs, Tab, Nav, Button, Card, Model, Modal, Offcanvas, Form, InputGroup, FormControl, ListGroup, Badge, Navbar, NavDropdown, Popover, OverlayTrigger, ProgressBar, Spinner, Table, Overlay, Tooltip, Toast, Breadcrumb, Carousel, Stack } from 'react-bootstrap';
import one from './one.jpg';
import two from './two.jpg';
import three from './three.jpg';


function App() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [cshow, setCanvas] = useState(false);

    const canvasClose = () => setCanvas(false);
    const canvasShow = () => setCanvas(true);

    const popover = (
          <Popover>
            <Popover.Header>Popover Overlay</Popover.Header>
            <Popover.Body>
              And here's some <strong>amazing</strong> content. It's very engaging.
            </Popover.Body>
          </Popover>
    );

    const [tshow, setTool] = useState(false);
    const target = useRef(null);

    const [showA, setShowA] = useState(true);
    const [showB, setShowB] = useState(true);
  
    const toggleShowA = () => setShowA(!showA);
    const toggleShowB = () => setShowB(!showB);

  return (
    <Container className="my-5">
      <Row>
        <Col>
          <hr />
          <h3>Alert</h3>
          {
            [
              'primary',
              'secondary',
              'success',
              'danger',
              'warning',
              'info',
              'light',
              'dark',
            ].map((variant, idx) => (
              <Alert key={idx} variant={variant}>
                This is a {variant} alert—check it out!
              </Alert>
            ))
          }
          <hr />


          <h2>Accordion</h2>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                What is your name?
              </Accordion.Header>
              <Accordion.Body>
                Md Salim Hasan Riad
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                What is your nationality?
              </Accordion.Header>
              <Accordion.Body>
                Bangladesh
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                Where are you from?
              </Accordion.Header>
              <Accordion.Body>
                Rangpur
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>
                Explaine your village
              </Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid, accusantium natus rem blanditiis quisquam voluptatibus. Deleniti temporibus nemo cumque asperiores!
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>
                What is your feavorite sport?
              </Accordion.Header>
              <Accordion.Body>
                Football and Cricket
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <hr />


          <h2>Tabs</h2>
          <Tabs defaultActiveKey="home" className="mb-3">
            <Tab eventKey="home" title="Home">
              Home Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea harum sint eum inventore ut, blanditiis facilis earum, rerum eaque quis odit commodi quod libero, dolorem esse eveniet labore expedita id?
            </Tab>
            <Tab eventKey="profile" title="Profile">
              Profile Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque in facilis laborum dignissimos similique molestiae explicabo! Sed labore similique nulla dicta facilis eveniet minima, saepe ea, sint iste consequuntur cupiditate.
            </Tab>
            <Tab eventKey="Contactus" title="Contact Us">
              Contact UsLorem ipsum dolor sit amet consectetur adipisicing elit. Dolores sequi alias est neque praesentium, quis veritatis saepe laborum sit obcaecati explicabo sint deleniti ipsa eos labore. Aliquam, cumque molestias ex magni sed sequi libero. Ut molestias magnam eligendi mollitia beatae necessitatibus. Dolor quisquam, placeat repellat nulla fugiat molestias officia. At?
            </Tab>
            <Tab eventKey="aboutus" title="About Us">
              About Us Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem obcaecati quam iure sequi? Aperiam repellendus odio provident suscipit libero totam magni eum soluta consectetur modi laboriosam veritatis praesentium alias voluptates voluptatum debitis tempore, esse, nemo facere tenetur dicta. Numquam, tempore.
            </Tab>
          </Tabs>

          <hr />

          <Tab.Container defaultActiveKey="first" id="left-tabs-example">
            <Row>
              <Col sm={3}>
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link eventKey="first">Tab 1</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Tab 2</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={9}>
                <Tab.Content>
                <Tab.Pane eventKey="first">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, at recusandae id sapiente porro officiis amet nostrum, a, vitae ipsum nihil possimus officia explicabo cupiditate iure facere. Nemo blanditiis obcaecati autem expedita fuga fugiat, veritatis modi sapiente consequatur praesentium placeat repellendus delectus molestiae repellat necessitatibus culpa deserunt dignissimos perferendis vitae.
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil atque dolorem repudiandae, reiciendis vero magni laboriosam consequatur? Ipsam laborum, tempora assumenda unde porro dolores suscipit a nulla ducimus commodi mollitia blanditiis beatae, in quos animi quasi ut perferendis veniam aliquam nihil ea autem omnis? Dicta corrupti ratione nisi blanditiis esse suscipit odit debitis voluptatem placeat aperiam quo consequatur tenetur enim quisquam veritatis sint incidunt totam dolorem aliquid, natus deleniti sed autem. Tempora cupiditate facilis rerum adipisci, quas voluptatum quibusdam, autem minima error numquam sunt, eos aliquid culpa fuga consequatur quisquam molestiae iste nostrum eveniet dolorem soluta non aperiam quo? Dolor?
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>

          <hr />

          <h2>Buttons</h2>
          <>
            <Button type="submit" variant="primary">Primary</Button>{' '}
            <Button type="submit" variant="secondary">Secondary</Button>{' '}
            <Button type="submit" variant="success">Success</Button>{' '}
            <Button type="submit" variant="info">Info</Button>{' '}
            <Button type="submit" variant="warning">Warning</Button>{' '}
            <Button type="submit" variant="danger">Danger</Button>{' '}
            <Button type="submit" variant="lignt">Light</Button>{' '}
            <Button type="submit" variant="dark">Dark</Button>{' '}
            <Button type="submit" variant="link">Link</Button>{' '}
          </>
          <br />
          <br />
          <>
            <Button type="submit" variant="outline-primary">Primary</Button>{' '}
            <Button type="submit" variant="outline-secondary">Secondary</Button>{' '}
            <Button type="submit" variant="outline-success">Success</Button>{' '}
            <Button type="submit" variant="outline-info">Info</Button>{' '}
            <Button type="submit" variant="outline-warning">Warning</Button>{' '}
            <Button type="submit" variant="outline-danger">Danger</Button>{' '}
            <Button type="submit" variant="outline-lignt">Light</Button>{' '}
            <Button type="submit" variant="outline-dark">Dark</Button>{' '}
            <Button type="submit" variant="outline-link">Link</Button>{' '}
          </>
          <br />
          <br />
          <>
            <div className="d-grid gap-2">
              <Button type="submit" variant='primary' size="lg">Block Level</Button>
              <Button type="submit" variant="danger" size="lg">Block Level</Button>
            </div>
          </>

          <hr />

          <h2>Cards</h2>
          <div className="d-flex gap-5">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={one}></Card.Img>
              <Card.Body>
                <Card.Title>Information</Card.Title>
                <Card.Text>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam quisquam tenetur laborum possimus. Suscipit repudiandae corporis debitis consectetur tempora earum eum, quidem blanditiis rem, unde adipisci ad, quo numquam esse?
                </Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={two}></Card.Img>
              <Card.Body>
                <Card.Title>Information Two</Card.Title>
                <Card.Text>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam quisquam tenetur laborum possimus. Suscipit repudiandae corporis debitis consectetur tempora earum eum, quidem blanditiis rem, unde adipisci ad, quo numquam esse?
                </Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={three}></Card.Img>
              <Card.Body>
                <Card.Title>Information Three</Card.Title>
                <Card.Text>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam quisquam tenetur laborum possimus. Suscipit repudiandae corporis debitis consectetur tempora earum eum, quidem blanditiis rem, unde adipisci ad, quo numquam esse?
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <Card className="mt-2 text-center">
              <Card.Header className="text-center">Featured</Card.Header>
              <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere assumenda provident modi incidunt. Eum repudiandae beatae laudantium quis, ea dolores.
                </Card.Text>
                <Button variant="primary">Go Somewhere</Button>
              </Card.Body>
              <Card.Footer className="text-muted">2 day's ago</Card.Footer>
            </Card>

          <hr />

          <h2>Model</h2>

         

          <Button variant="primary" onClick={handleShow}>Show Modal</Button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Model Title</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, explicabo! Cum, dolorem blanditiis, labore temporibus asperiores corporis quas facere in culpa dolorum quis adipisci at corrupti fuga, sapiente deserunt excepturi sit id odio dolore. Repudiandae, omnis sint eos iure similique, optio, officiis cumque veniam commodi ea cum quasi magnam eaque!</p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>Close</Button>
              <Button variant="primary">Save changes</Button>
            </Modal.Footer>
          </Modal>

          <hr/>

          <h2>Offcanvas</h2>

          <Button variant="success" onClick={canvasShow}>Offcanvas</Button>

          <Offcanvas show={cshow} onHide={canvasClose}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Offcanvas</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, explicabo! Cum, dolorem blanditiis, labore temporibus asperiores corporis quas facere in culpa dolorum quis adipisci at corrupti fuga, sapiente deserunt excepturi sit id odio dolore. Repudiandae, omnis sint eos iure similique, optio, officiis cumque veniam commodi ea cum quasi magnam eaque!</p>
            </Offcanvas.Body>
          </Offcanvas>

          <hr />

          <h2>Forms</h2>

          <Form>
            <Form.Group className="mb-3">
              <Form.Label>E-Mail Address</Form.Label>
              <Form.Control type="text" placeholder="Enter your email"></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password"></Form.Control>
            </Form.Group>
            <Button variant="primary" type="submit">Sign In</Button>
          </Form>

          <hr />

          <h2>InputGroup</h2>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">Username</InputGroup.Text>
            <FormControl
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon2">Password</InputGroup.Text>
            <FormControl
              placeholder="Password"
              aria-label="Passowrd"
              aria-describedby="basic-addon2"
            />
          </InputGroup>

          <hr />

          <h2>List Group</h2>
          <ListGroup as="ol" numbered>
            <ListGroup.Item as="li" active>Salim Hasan Riad <Badge variant="danger" pill>1</Badge></ListGroup.Item>
            <ListGroup.Item as="li">Saikat Hasan <Badge variant="warning" pill>2</Badge></ListGroup.Item>
            <ListGroup.Item as="li">Mosaddek Hossain <Badge variant="warning" pill>3</Badge></ListGroup.Item>
            <ListGroup.Item as="li">Shamim Hossain <Badge variant="warning" pill>4</Badge></ListGroup.Item>
          </ListGroup>

          <hr />

          <h2>Navbar</h2>
          <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
            <Container>
              <Navbar.Brand>Navbars</Navbar.Brand>
              <Navbar.Toggle />
              <Navbar.Collapse>
                <Nav className="me-auto">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#profile">Profile</Nav.Link>
                  <NavDropdown title="Dropdown">
                    <NavDropdown.Item href="#page">Page</NavDropdown.Item>
                    <NavDropdown.Item href="#aboutus">About us</NavDropdown.Item>
                    <NavDropdown.Item href="#contactus">Contact Us</NavDropdown.Item>
                    <NavDropdown.Item href="#bootstrap">Bootstrap</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Form className="d-flex">
                  <FormControl type="text" placeholder="Search..." className="me-2"></FormControl>
                  <Button type="submit" variant="outline-primary">Submit</Button>
                </Form>
              </Navbar.Collapse>
            </Container>
          </Navbar>

          <hr />

          <h2>Poppover</h2>
          <OverlayTrigger trigger="click" overlay={popover} placement="right">
            <Button variant="success" type="button">Click Overlay</Button>
          </OverlayTrigger>
          
          <hr />

          <h2>Progress</h2>
          <ProgressBar striped now={20} variant="warning"></ProgressBar>
          <ProgressBar striped now={50} variant="success"></ProgressBar>
          <ProgressBar striped now={40} variant="primary"></ProgressBar>
          <ProgressBar striped now={60} variant="danger" animated></ProgressBar>
          <ProgressBar>
            <ProgressBar striped now={30} key={1} variant="primary"></ProgressBar>
            <ProgressBar striped now={10} key={2} variant="warning"></ProgressBar>
            <ProgressBar striped now={20} key={3} variant="danger"></ProgressBar>
          </ProgressBar>

          <hr />

          <h2>Spinner</h2>
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading.....</span>
          </Spinner>
          <Spinner animation="grow" variant="primary"></Spinner>
          <Button variant="info">
            <Spinner animation="border" size="sm"></Spinner>
          </Button>
          <Button variant="primary">
            <Spinner animation="grow" size="sm" as="span" aria-hidden="true" />Loading...
          </Button>

          <hr />

          <h2>Table</h2>
          <Table striped bordered hover variant='dark'>
            <thead>
              <tr>
                <th>Sl</th>
                <th>Name</th>
                <th>Email</th>
                <th>Address</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Salim Hasan Riad</td>
                <td>salimhasanriad@gmail.com</td>
                <td>Rangpur</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Plabon Khan</td>
                <td>plabon@gmail.com</td>
                <td>Noyakhali</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Shamim Hossain</td>
                <td>shamim@gmail.com</td>
                <td>Netrokona</td>
              </tr>
            </tbody>
          </Table>

          <hr />

          <h2>Tooltips</h2>
          <Button ref={target} onClick={() => setTool(!tshow)}>Click me!</Button>

          <Overlay target={target.current} show={tshow} placement='right'>

            {
              (props) => (
                <Tooltip id="overlay-example" {...props}>My Tooltip</Tooltip>
              )
            }

          </Overlay>

          <hr />

          <h2>Toasts</h2>
            <Row>
              <Col md={6} className="mb-2">
                <Button onClick={toggleShowA} className="mb-2">
                  Toggle Toast <strong>with</strong> Animation
                </Button>
                <Toast show={showA} onClose={toggleShowA}>
                  <Toast.Header>
                    <img
                      src="holder.js/20x20?text=%20"
                      className="rounded me-2"
                      alt=""
                    />
                    <strong className="me-auto">Bootstrap</strong>
                    <small>11 mins ago</small>
                  </Toast.Header>
                  <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
                </Toast>
              </Col>
              <Col md={6} className="mb-2">
                <Button onClick={toggleShowB} className="mb-2">
                  Toggle Toast <strong>without</strong> Animation
                </Button>
                <Toast onClose={toggleShowB} show={showB} animation={false}>
                  <Toast.Header>
                    <img
                      src="holder.js/20x20?text=%20"
                      className="rounded me-2"
                      alt=""
                    />
                    <strong className="me-auto">Bootstrap</strong>
                    <small>11 mins ago</small>
                  </Toast.Header>
                  <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
                </Toast>
              </Col>
            </Row>


            <hr />

            <h2>Badge</h2>
            <div>
              <Badge bg="primary">Primary</Badge>{' '}
              <Badge bg="secondary">Secondary</Badge>{' '}
              <Badge bg="success">Success</Badge>{' '}
              <Badge bg="info">info</Badge>{' '}
              <Badge bg="warning">Warning</Badge>{' '}
              <Badge bg="danger">Danger</Badge>{' '}
              <Badge bg="light" text="dark">light</Badge>{' '}
              <Badge bg="dark">Dark</Badge>{' '}
            </div>
            <br />
            <div>
              <Badge bg="primary" pill>Primary</Badge>{' '}
              <Badge bg="secondary" pill>Secondary</Badge>{' '}
              <Badge bg="success" pill>Success</Badge>{' '}
              <Badge bg="info" pill>info</Badge>{' '}
              <Badge bg="warning" pill>Warning</Badge>{' '}
              <Badge bg="danger" pill>Danger</Badge>{' '}
              <Badge bg="light" text="dark" pill>light</Badge>{' '}
              <Badge bg="dark" pill>Dark</Badge>{' '}
            </div>

            <hr />

            <h2>Breadcrumbs</h2>
            <Breadcrumb>
              <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
              <Breadcrumb.Item href="#">About</Breadcrumb.Item>
              <Breadcrumb.Item active href="#">All Information</Breadcrumb.Item>
            </Breadcrumb>


            <hr />

            <h2>Carousel</h2>
            <Carousel>
              <Carousel.Item>
                <img src={one} alt="one" className='d-block w-100' />
                <Carousel.Caption>
                  <h3>This is first slide</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, accusamus.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img src={two} alt="two" className='d-block w-100' />
                <Carousel.Caption>
                  <h3>This is second slide</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, accusamus.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img src={three} alt="three" className='d-block w-100' />
                <Carousel.Caption>
                  <h3>This is three slide</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, accusamus.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>


            <hr />

            <h2>Layouts</h2>

            <h3>Grid</h3>
            <Container>
              <Row>
                <Col>
                  <div className="bg-info">1 of 1</div>
                </Col>
              </Row>
            </Container>

            <Container fluid="md">
              <Row>
                <Col>
                  <div className="bg-primary">1 of 1</div>
                </Col>
              </Row>
            </Container>
            <Container>
              <Row>
                <Col><p className="bg-info">1 of 2</p></Col>
                <Col><p className="bg-danger">2 of 2</p></Col>
              </Row>
              <Row>
                <Col><div className='bg-primary'>1 of 3</div></Col>
                <Col><div className='bg-warning'>1 of 3</div></Col>
                <Col><div className='bg-success'>1 of 3</div></Col>
              </Row>
            </Container>

            <Container>
              <Row xs={2} md={4} lg={6}>
                <Col><p className="bg-info">1 of 2</p></Col>
                <Col><p className="bg-danger">2 of 2</p></Col>
              </Row>
              <Row xs={1} md={2}>
                <Col><div className='bg-primary'>1 of 3</div></Col>
                <Col><div className='bg-warning'>2 of 3</div></Col>
                <Col><div className='bg-success'>3 of 3</div></Col>
              </Row>
              <Row xs="auto" md={4} lg={6}>
                <Col><div className='bg-primary'>1 of 3</div></Col>
                <Col><div className='bg-warning'>2 of 3</div></Col>
                <Col><div className='bg-success'>3 of 3</div></Col>
              </Row>
            </Container>

            <h3>Flex</h3>
            <Stack gap={3}>
              <div className='bg-light border'>First Item</div>
              <div className='bg-light border'>Second Item</div>
              <div className='bg-light border'>Third Item</div>
            </Stack>
            <Stack direction='horizontal' gap={3} className="mt-5">
              <div className='bg-light border'>First Item</div>
              <div className='bg-light border'>Second Item</div>
              <div className='bg-light border'>Third Item</div>
            </Stack>

            <Stack gap={2} className="col-md-5 mx-auto mb-3">
              <Button variant="secondary">Save changes</Button>
              <Button variant="outline-secondary">Cancel</Button>
            </Stack>

            <Stack direction='horizontal' gap={3}>
              <Form.Control className="me-auto" placeholder="Enter your item"></Form.Control>
              <Button variant='secondary'>Submit</Button>
              <div className='vr'></div>
              <Button variant='outline-danger'>Reset</Button>
            </Stack>

        </Col>
      </Row>
    </Container>
  );
}

export default App;
