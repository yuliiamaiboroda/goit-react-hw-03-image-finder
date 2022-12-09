import { ButtonEl } from "./Button.styled"

export default function Button ({handleClick}){
    return (<ButtonEl type="button" onClick={handleClick}>Load more</ButtonEl>)
}