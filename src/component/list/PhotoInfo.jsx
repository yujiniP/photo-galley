import React from 'react';


export default function PhotoInfo({ title, name, isNew }) {

  return (
    <div className="photo-desc">
      <span>{title}</span>
      <p>{name}</p>
    </div>
  );
}


