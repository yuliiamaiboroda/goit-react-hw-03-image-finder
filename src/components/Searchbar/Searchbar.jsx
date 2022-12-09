import { Header, Form, Input, Button } from "./Searchbar.styled";
import React, { Component } from "react";
import PropTypes from 'prop-types';


class Searchbar extends Component{
    state = {
        imageName:""
    }

    onChange = e =>{
      const imageName =  e.target.value.trim();
      this.setState({imageName});
    }

    onSubmit = e =>{
        e.preventDefault();
        this.props.onSubmit(this.state.imageName);
        this.reset();
        e.currentTarget.reset();
    }

    reset (){
        this.setState({imageName:""})
    }

    render(){
        return(
        <Header>
        <Form onSubmit={this.onSubmit}> 
         <Input
            
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.onChange}
          />
          <Button type="submit" >
            <span >Search</span>
          </Button>
      
        
        </Form>
      </Header>)
    }
}

export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired
}