import React from 'react';
import { ZoomInOutlined } from '@ant-design/icons';



function BtnZoomInOut() {
  return (
    <>
      <a href="#none" className="button-link"><ZoomInOutlined style={{ color: "#fff", fontSize: "25px", opacity: "0.7" }} /></a>
    </>
  );
};

export default BtnZoomInOut;