import React, { Component } from 'react';
import Product from './product';

class Products extends Component {
  renderProducts() {

    return this.props.products.map((product, index) =>
      <Product key={ index }
              id={ product._id }
              name={ product.name } 
              sku={ product.sku }
              price={ product.price }
              />);
  }

  render() {
    return(
      <div className='products'>
        {this.renderProducts()}
      </div>
    )
  }
}

export default Products;