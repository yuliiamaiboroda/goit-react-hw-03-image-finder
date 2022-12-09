import styled from 'styled-components';

export const Backdrop = styled.div`
  overflow: auto;

position: fixed;
top: 0;
left: 0;

width: 100%;
height: 100%;

background-color: rgba(0, 0, 0, 0.2);
z-index: 10000;

transition-property: opacity, visibility;
transition-duration: 250ms;
opacity: 1;
pointer-events: initial;
visibility: visible;

`

export const ModalContent = styled.div`
    padding: 48px 24px;

    background-color: var(--dark-background-color);

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
`

export const Img = styled.img`
width: 800px;
height: auto;

border-radius: 5px;
`