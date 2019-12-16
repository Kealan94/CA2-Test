import React from 'react';
import ProductsList from './ProductList';
<<<<<<< HEAD
import Header       from './Header';
import Footer       from './Footer';
import Cart         from '../lib/Cart';
import Stripe       from './Stripe';
 
 
 
=======
import Header from './Header';
import Footer from './Footer';
import Cart from '../lib/Cart';
import Stripe from './Stripe';
import Form from './Form';
import Dropdown from './Dropdown';


>>>>>>> 213d0844ac8fff621cb93e5d4d38948fbe56aaa5


class App extends React.Component {

  // Note the cart object is just a vanilla JS
  // custom type (see lib/Cart.js)
  state = {
    cart: new Cart()
  }

  // Render
  render() {
    return (
      <div className='App'>
        <Header cart={this.state.cart} />
        <ProductsList cart={this.state.cart} />
        <Stripe />
        <Footer />
<<<<<<< HEAD
 
 
 
       
=======
        <Dropdown />

>>>>>>> 213d0844ac8fff621cb93e5d4d38948fbe56aaa5
      </div>
    );
  }
}

export default App;
