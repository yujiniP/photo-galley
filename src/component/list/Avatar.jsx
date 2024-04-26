import React from 'react';
import BtnZoomInOut from '../ui/BtnZoomInOut';

export default function Avatar({ image, isNew }) {
  return (
    <div className="img-area">
      <div className="img-inner">
        <img src={image} alt="avatar" />
        <BtnZoomInOut />
      </div>
      {isNew && <em>new</em>}
    </div>
  );
}

