import { Ul } from "./ImageGallery.styled"
export default function GallaryList({children}) {
return(<Ul className="gallery">
    {children}
</Ul>)
}