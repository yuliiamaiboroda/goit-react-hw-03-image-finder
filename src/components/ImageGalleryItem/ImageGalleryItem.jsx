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
    images: PropTypes.array.isRequired,
    onClickOnImage: PropTypes.func.isRequired
}