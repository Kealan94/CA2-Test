import React    from 'react';
import ReactDOM from 'react-dom';
import App      from './components/App';
import './components/styles/main.css';
import StripeCheckout from 'react-stripe-checkout';

function App() {
    const [product] = React.useState({
    name: "Magners Pack",
    price: 12.00,

    });
function handleToken (token, addresses){
    console.log ({token, addresses})
}
    return (
    <div className = "container">
    <div className = "product">
        <h1>{product.name}</h1>
        <h3>On Sale . ${product.price}</h3>
    </div>
    <StripeCheckout
    stripeKey="pk_test_ZlLTPrZQWlcIwfmwkLLspBBr007URNccK3"
    token = {handleToken}
    billingAddress
    shippingAddress
    amount = {product.price * 100}
    name = {product.name}
   />
    </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
