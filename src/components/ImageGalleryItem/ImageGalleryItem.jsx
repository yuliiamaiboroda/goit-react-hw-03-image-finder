import React, { Component } from "react";
import {Img} from "./ImageGalleryItem.styled"
import PropTypes from 'prop-types';

class ImageGalleryItem extends Component{
    render()
        {const {images,onClickOnImage}= this.props
            return(
                <>
                {images.length!==0&&images.map(({id, webformatURL, largeImageURL,  tags})=>{
                    return(
                    <li className="gallery-item" key={id} >
                    <Img src={webformatURL} loading="lazy" alt={tags} onClick={()=>(onClickOnImage({largeImageURL,tags}))}/>
                    </li>)
                    
                })}
                </>
            )

        }


    }


export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
    images: PropTypes.arrayOf(PropTypes.shape({
        id:PropTypes.number.isRequired,
        webformatURL:PropTypes.string.isRequired,
        largeImageURL:PropTypes.string.isRequired,
        tags:PropTypes.string.isRequired,
    }).isRequired).isRequired,
    onClickOnImage: PropTypes.func.isRequired
}