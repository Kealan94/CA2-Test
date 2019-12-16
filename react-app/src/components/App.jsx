import React        from 'react';
import ProductsList from './ProductList';
import Header       from './Header';
import Footer       from './Footer';
import Stripe       from './Stripe';
import Cart         from '../lib/Cart';
import Dropdown        from './Dropdown';


class App extends React.Component {

  // Note the cart object is just a vanilla JS
  // custom type (see lib/Cart.js)
  state = {
    cart : new Cart()
  }

  // Render
  render() {
    return (
      <div className='App'>
        <Header cart={this.state.cart} />
        <ProductsList cart={this.state.cart} />
        <Stripe />
        <center><h1>Be safe please don't drink and drive.</h1></center>
        <Dropdown />
        <Footer />
       
      </div>
    );
  }
}

export default App;
