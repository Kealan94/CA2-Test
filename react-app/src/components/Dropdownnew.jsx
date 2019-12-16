import React        from 'react';
import ReactBootstrap from 'react';

const ButtonToolbar = ReactBootstrap.ButtonToolbar;
const Button = ReactBootstrap.Button;
const Jumbotron = ReactBootstrap.Jumbotron;
const Accordion = ReactBootstrap.Accordion;
const Panel = ReactBootstrap.Panel;

class Dropdownnew extends React.Component {
const Buttons = React.createClass({
  alertA(){
    alert('All Selected');
  },
  alertB(){
    alert('All Removed');
  },
  render() {
    return (
    <div>
      <div className="text-center">React Bootstrap</div>
      <ButtonToolbar className="text-center" style={{ marginTop: 10 }}>
        <Button onClick={this.alertA} style={{marginTop: 5, float: "none"}} bsSize="small">Select All</Button>
        <Button onClick={this.alertB} style={{marginTop: 5, float: "none"}}  bsSize="small">Remove All</Button>
      </ButtonToolbar> 
      <br/>  
      {jumbotronInstance}  
      <br/>  
      {accordionInstance}  
    </div>
);
  }
});

const jumbotronInstance = (
  <Jumbotron>
    <h1>Hello, world!</h1>
    <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
    <p><Button bsStyle="primary">Learn more</Button></p>
  </Jumbotron>
)

const accordionInstance = (
  <Accordion>
    <Panel header="Collapsible Group Item #1" eventKey="1">
      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
    </Panel>
    <Panel header="Collapsible Group Item #2" eventKey="2">
      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
    </Panel>
    <Panel header="Collapsible Group Item #3" eventKey="3">
      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
    </Panel>
  </Accordion>
);

// console.log(ReactBootstrap)
ReactDOM.render(<Buttons />, document.getElementById('app'));

export default Dropdownnew;