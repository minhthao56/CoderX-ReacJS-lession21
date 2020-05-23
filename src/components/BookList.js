import React, { Component } from 'react';
import "../styles/BookList.css"

export class BookList extends Component {
    render() {
        return (
            <div className = "colum">
                <div className="book-list">
                    <img src = {this.props.image}/>
                    <div className="description"> 
                        <h3>{ this.props.tl}</h3> 
                        <span>{this.props.description}</span> 
                    </div>
                    <div className ="price-detail"> <span>{this.props.price}</span><a href="#">Detail</a></div>
                    <div className="button-cart"> <button> Add Cart</button> </div>
                </div>
            </div>
            
        )
    }
}

export default BookList
