import React, { Component } from 'react';
import ProductForm from './ProductForm';

class ProductDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentIndex: -1,
            data: []
        }
    }

    handleEdit = (index) => {
        this.setState({
            currentIndex: index
        })
    }
    onSave = (product_details) => {
        var data = this.state.data
        if(this.state.currentIndex === -1) {
            data.push(product_details)
        } else {
            data[this.state.currentIndex] = product_details
        }
         this.setState({ data, currentIndex: -1 })
    }

    render() {
        return (
            <div className="container">
                <ProductForm 
                    onSave = {this.onSave}
                    currentIndex = {this.state.currentIndex}
                    data = {this.state.data}
                />
                <hr />
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Category</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.data.map((item, index)=> {
                                return <tr key={index}>
                                    <td>{item.product_name}</td>
                                    <td>{item.product_category}</td>
                                    <td>{item.product_description}</td>
                                    <td>{item.product_price}</td>
                                    <td><button onClick={() => this.handleEdit(index)}>Edit</button></td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
  
export default ProductDetails;