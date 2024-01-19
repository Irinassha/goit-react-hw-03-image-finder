// import * as basicLightbox from 'basiclightbox';
import s from './Modal.module.css';
import React from 'react';

export class Modal extends React.Component{
  componentDidMount() {
  document.addEventListener('keydown', this.handlerKyeClouse )
  }
  componentWillUnmount() {
  document.removeEventListener('keydown', this.handlerKyeClouse)
  }

  handlerKyeClouse = (e) => {
  
    if (e.code === "Escape") {
      this.props.close('');
    }
  }

  render() {
    const { modalContent, handlerNextPost, handlerPrevPost } = this.props;
    return (
      <div className={s.Overlay} onClick={this.handlerKyeClouse}>
        <button type="button" onClick={() => handlerPrevPost(modalContent.id)}>
          Back
        </button>
        
        <div className={s.Modal}>
          <img src={modalContent.largeImageURL} alt={modalContent.tags} />
        </div>
        <button type="button" onClick={() => handlerNextPost(modalContent.id)}>
          Next
        </button>
      </div>
    );
  }
}