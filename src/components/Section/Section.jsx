import { Component } from "react";
import {  SectionTag } from "./Section.styled";
import PropTypes from 'prop-types';


class Section extends Component {
    render(){
        return(
            <SectionTag>
                
                {this.props.children}
            </SectionTag>
        )
    }
}
export default Section;

Section.propTypes={
children: PropTypes.node.isRequired
}