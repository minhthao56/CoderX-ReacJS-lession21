import './App.css';
import React, { Component } from 'react';
import BookList from "./components/BookList";
import axios from "axios";
import { Container } from 'react-bootstrap';

export class App extends Component {
  constructor(){
    super();
    this.state ={
      value:"",
      titile:[]
    }
  }
  handleChange = (event)=>{
    this.setState({value: event.target.value});
  };
  onSubmit = (event) =>{
    event.preventDefault();
    axios.get("http://localhost:4000/books/find?q="+ this.state.value)
    .then (res => {
      this.setState ({
        titile:res.data
      })
    })
  }

  componentDidMount(){
    axios.get("http://localhost:4000/books/api/books")
    .then(res =>{
      this.setState({
        titile:res.data
      })
    })
  }
  render() {
    return (
      
      <div className = "container">
        {/*Find books */}
        <div className = "form-find">
          <form onSubmit = {this.onSubmit}>
            <label> Find book  <br/>
              <input 
              type ="text" 
              name ="q" 
              value={this.state.value} 
              onChange={this.handleChange} 
              placeholder ="Type title here" />
            </label>
            <button type="submit">Find</button>
          </form>
        </div>
        <div className = "container-list">
          {/* list Books */}
          {this.state.titile.map((tlbook)=>{
            return <BookList 
            tl={tlbook.tl}
            description = {tlbook.description}
            price ={tlbook.price}
            image = {tlbook.image}
            />
          })}
          </div>
      </div>
    )
  }
}

export default App

