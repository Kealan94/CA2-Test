import React    from 'react';
import ReactDOM from 'react-dom';
import App      from './components/App';
import './components/styles/main.css';
import StripeCheckout from 'react-stripe-checkout';

ReactDOM.render(<App />, document.getElementById('root'));


function APP() {
    const {product} = React.useState({
        name: "Magners",
        price: 12.00,
    });
}
function handleToken(token, addresses){
console.log ({token, addresses})
return (
    <div className = "container">
    <div className = "product">
    <h1>(product.name}</h1>
    <h3>On Sale ${product.price}</h3>
    </div>
    <StripeCheckout
    stripeKey="pk_test_ZlLTPrZQWlcIwfmwkLLspBBr007URNccK3"
    token={handleToken}
    </div>
)