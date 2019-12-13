import React        from 'react';
import ProductsList from './ProductList';
import Header       from './Header';
import Producttable from './Producttable';
import Footer       from './Footer';
import Cart         from '../lib/Cart';
import Stripe       from './Stripe';


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
        <Producttable />
        <Footer />
       
      </div>
    );
  }
}

export default App;
