import React    from 'react';
import ViewCart from './ViewCart';

class Header extends React.Component {

  render() {
    return (
      <div className='jumbotron'>
        <h1 className='display-4'>Drinks Shop</h1>
        <p>We offer a wide range of drinks</p>
        <ViewCart cart={this.props.cart} />
      </div>
    );
  }

}

export default Header;