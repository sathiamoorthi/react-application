import React, { Component } from 'react';

class GetProduct extends Component {

    render(){

        return(

            <div className = 'input-box'>
                <span className = 'box-header'>Product Name : </span>
                <input className ='get-product' id='prodName'/>&nbsp;
                <input className='submit-box' type='submit'/>
            </div>

        )

    }
}


export default GetProduct;