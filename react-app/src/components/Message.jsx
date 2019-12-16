import React        from 'react';
import ReactDOM from 'react-dom';
const Grid = ReactBootstrap.Grid;
const Row = ReactBootstrap.Row;
const Col = ReactBootstrap.Col;
const Input = ReactBootstrap.Input;
const Button = ReactBootstrap.Button;
const ButtonToolbar = ReactBootstrap.ButtonToolbar;
const ButtonGroup = ReactBootstrap.ButtonGroup;
const OverlayTrigger = ReactBootstrap.OverlayTrigger;
const Jumbotron = ReactBootstrap.Jumbotron;
const Glyphicon = ReactBootstrap.Glyphicon;
const Tooltip = ReactBootstrap.Tooltip;
const Modal = ReactBootstrap.Modal;

const Hello = React.createClass({
    getInitialState() {
      return { showModal: false };
    },

    open() {
       this.setState({ showModal: true});
    },
  
    close(){
       this.setState({ showModal: false});
    },
  
    render() {

        let tooltip1 = <Tooltip><strong>It is sooo gooooood!</strong> I swear!</Tooltip>;
        let tooltip2 = <Tooltip><strong>The freshest!</strong> Really good in salad!.</Tooltip>;
        let tooltip3 = <Tooltip><strong>Can not go wrong!</strong> It's used in everything!</Tooltip>;
        
        return (
        		<Grid>
                <Row>
                    <Col xs={12} md={12}>
                      <Jumbotron>
                        <h1>Hello There!</h1>
                        <p>This is a simple appl that does nothing!</p>
                          <Button 
                            bsStyle="danger"
                            bsSize="large" 
                            onClick={this.open}
                          >
                            Learn nothing!
                          </Button>
                          <Modal show={this.state.showModal} onHide={this.close}>
                            <Modal.Header closeButton>
                            </Modal.Header>
                            <Modal.Body>
                              <h4>Some people prefer to be nothing I guess..</h4>
                              <p>Good stuff</p>
                            </Modal.Body>
                            <Modal.Footer>
                              <Button onClick={this.close}>Close</Button>
                            </Modal.Footer>
                          </Modal>
                      </Jumbotron>
                    </Col>
                 </Row>
                <Row>
                  <Col xs={6} md={6}>
                    <h2>Kimchi is Goooooood!</h2>
                    <ButtonToolbar>
                      <OverlayTrigger placement="bottom" overlay={tooltip1}>
                       <Button bsStyle="default">Pickled</Button>
                      </OverlayTrigger>
                      <OverlayTrigger placement="bottom" overlay={tooltip2}>
                       <Button bsStyle="default">Cucumber</Button>
                      </OverlayTrigger>
                      <OverlayTrigger placement="right" overlay={tooltip3}>
                       <Button bsStyle="default">Traditional</Button>
                      </OverlayTrigger>
                    </ButtonToolbar>
                  </Col>
                  <Col xs={6} md={6}>
                    <ButtonToolbar>
                      <ButtonGroup>
                        <Button><Glyphicon glyph="align-left" /></Button>
                        <Button><Glyphicon glyph="align-center" /></Button>
                        <Button><Glyphicon glyph="align-right" /></Button>
                        <Button><Glyphicon glyph="align-justify" /></Button>
                      </ButtonGroup>
                    </ButtonToolbar>
                  </Col>
                </Row>
            </Grid>
        );
    }
});
 
ReactDOM.render(
	<Hello name="World" />,
    document.getElementById('container')
);
