import React, { Component } from 'react';

class Product extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hovered: false
    }
  }

  mouseEnter() {
    console.log('mouse enters');
    this.setState({ hovered: true });
  }

  mouseLeave() {
    console.log('mouse leaves');
    this.setState({ hovered: false });
  }

  render() {
    return (
      <div className='product'
           onMouseEnter={this.mouseEnter.bind(this)}
           onMouseLeave={this.mouseLeave.bind(this)}>
        <table>
            <tr>
                <td>{this.props.name}</td>
                <td>{this.props.sku}</td>
                <td>{this.props.price}</td>
            </tr>
        </table>
        </div>
    )
  }
}

export default Product;