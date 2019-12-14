import React           from 'react';
import AddToCartButton from './AddToCartButton';
import * as Config     from '../config.json';

import './Product.css';

class Product extends React.Component {

  // Rendering for a single product. Note that each product is
  // passed in as a prop. All products are looped over in the
  // ProductList component, creating many of these Product
  // components.
  render() {
    return (
      <div className='card mb-4'>
        <h2 className='card-header'>{this.props.product.name}</h2>
        <div className='row'>

          <div className='col-12 col-md-3'>
            <div className='product-image'>
              <img src={this.props.product.image_href || Config.defaultImage} alt={this.props.product.name} />
            </div>
          </div>

          <div className='col-12 col-md-9'>
            <div className='card-body'>
              <h3 className='card-sub-title'>&euro;{(parseFloat(this.props.product.price)).toFixed(2)}</h3>
              <ul>{this.props.product.description.split("\n").map(each => (
                <li>{each}</li>
              ))}</ul>
              <p className='card-text'>{this.props.product.description}</p>
              <AddToCartButton product={this.props.product} cart={this.props.cart} />
            </div>
          </div>

        </div>

      </div>
    );
  }

}

export default Product;