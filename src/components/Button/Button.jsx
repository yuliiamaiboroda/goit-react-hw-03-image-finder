import { ButtonEl } from "./Button.styled"
import PropTypes from 'prop-types';

export default function Button ({handleClick}){
    return (<ButtonEl type="button" onClick={handleClick}>Load more</ButtonEl>)
}

Button.propTypes = {
    handleClick: PropTypes.func.isRequired
}