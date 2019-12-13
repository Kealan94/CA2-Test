import React        from 'react';
import ProductsList from './ProductList';
import Header       from './Header';
import Footer       from './Footer';
import Cart         from '../lib/Cart';
import Stripe       from './Stripe';
import Producttable from './Producttable';

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
        <Footer />
        <Producttable />
      </div>
    );
  }
}

export default App;
