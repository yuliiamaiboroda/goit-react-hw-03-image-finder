import React, { Component } from "react";
import Searchbar from "./Searchbar/Searchbar";
import ImageGalleryItem from "./ImageGalleryItem/ImageGalleryItem";
import ImageGallery from "./ImageGallery/ImageGallery";
import { PixabayApi } from "services/pixabayAPI";
import Modal from "./Modal/Modal";
import Button from "./Button/Button";
import { ColorRing } from 'react-loader-spinner';
import Section from "./Section/Section";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const STATUSES = {
  IDLE: 'IDLE',
  PENDING: 'PENDING',
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR',
};

const PixabayAPI = new PixabayApi();

export class App extends Component {
state={
  status: STATUSES.IDLE,
  imageName:"",
  images: [],
  page: 1, 
  currentImage: null,
  totalPages:0,
}

async componentDidUpdate(prevProps, prevState){
  const prevName = prevState.imageName;
  const nextName = this.state.imageName;
  
  if(prevName!==nextName|| prevState.page !== this.state.page){
    this.setState({status:STATUSES.PENDING})
    PixabayAPI.q = this.state.imageName;
    PixabayAPI.page = this.state.page;
    try{
      const {data} = await PixabayAPI.fetchImages();
      this.setState((prevState)=>({images:[...prevState.images, ...data.hits ], status:STATUSES.SUCCESS, totalPages:data.totalHits,}))
      if(!data.hits.length){
        Notify.failure(`Ooops, there are no images when searching for ${nextName}`)
        this.setState({ status:STATUSES.ERROR})}
    }
    catch(err) {
      console.log(err);
      this.setState({ status:STATUSES.ERROR})
    }
  }}


  
onSubmit = (imageName) =>{
  this.setState({imageName, page:1, images:[]})
}

onClickOnImage = currentImage=>{
  this.setState({currentImage})
}

closeModal = () => {
  this.setState({ currentImage: null });
};
loadMore = () => {
  this.setState((prevState) => ({ page: prevState.page + 1 }));
};

 render(){
  const { status,
    images,
    currentImage,
    totalPages, page} = this.state;
    const pages=Math.ceil(totalPages / PixabayAPI.per_page)
return(
<>
<Searchbar onSubmit={this.onSubmit}/>  
     {images.length> 0&&(
     <Section> 
        <ImageGallery>
        <ImageGalleryItem images={images} onClickOnImage={this.onClickOnImage}/>
        </ImageGallery>
        {page<=pages&&<Button text="Load more" handleClick={this.loadMore} />}
          {currentImage && (
                  <Modal currentImage={currentImage} closeModal={this.closeModal} />
                )}</Section>)}


      {status==='PENDING'&&(<><ColorRing
      visible={true}
      height="100"
      width="100"
      ariaLabel="blocks-loading"
      wrapperStyle={{
        position:"fixed",
        top: "50%",
        left: "50%",
        transform: "translateX(-50%) translateY(-50%)", }}
      wrapperClass="blocks-wrapper"
      colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
    /></>)}

   </>
  )}
}
