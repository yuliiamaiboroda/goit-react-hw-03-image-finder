import { Ul } from "./ImageGallery.styled";
import PropTypes from 'prop-types';

export default function GallaryList({children}) {
return(<Ul className="gallery">
    {children}
</Ul>)
}

GallaryList.propTypes={
    children: PropTypes.node.isRequired
    }