import React        from 'react';
import ReactDOM from 'react-dom';
    
class Dropdown extends React.Component {
  state = {
    isOpen: true
  };

  toggleOpen = () => this.setState({ isOpen: !this.state.isOpen });

  render() {
    const menuClass = `dropdown-menu${this.state.isOpen ? " show" : ""}`;
    return (
      <div className="dropdown" onClick={this.toggleOpen}>
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
        >
          Click Here
        </button>
        <div className={menuClass} aria-labelledby="dropdownMenuButton">
          <a className="dropdown-item" href="#nogo">
            Subscribe to us
          </a>
          <a className="dropdown-item" href="#nogo">
           FAQ
          </a>
          <a className="dropdown-item" href="#nogo">
            Contact Information
          </a>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Dropdown />, document.getElementById("root"));


export default Dropdown;
