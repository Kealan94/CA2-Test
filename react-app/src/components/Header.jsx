import React    from 'react';
import ViewCart from './ViewCart';

class Header extends React.Component {

  render() {
    return (
      <div className='jumbotron'>
        <h1 className='display-4'><center>Drinks Shop</center></h1>
        <h2></h2><p>Choose from a wide range of drinks</p>
        <ViewCart cart={this.props.cart} />
      </div>
    );
  }

}

export default Header;