import React, { Component } from "react";
import { createPortal } from "react-dom";
import { Backdrop, ModalContent, Img } from "./Modal.styled";

const modalRoot = document.querySelector("#modal-root");

export default class Modal extends Component {
  closeByEsc = (e) => {
    if (e.code === "Escape") {
      this.props.closeModal();
    }
  };

  componentDidMount() {
    window.addEventListener("keydown", this.closeByEsc);
  }
  componentWillUnmount() {
    window.removeEventListener("keydown", this.closeByEsc);
  }

  handleBackdropClick= e =>{
    if(e.currentTarget===e.target){
        this.props.closeModal()
    }
  }
  render() {
    const {
      currentImage: { largeImageURL, tags },
    } = this.props;
    return createPortal(
      <Backdrop onClick={this.handleBackdropClick}>
        <ModalContent>
          <Img src={largeImageURL} alt={tags} />
        </ModalContent>
      </Backdrop>,
      modalRoot,
    );
  }
}
