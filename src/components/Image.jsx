import React, { useRef } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Image = ({ src, alt, ariaHidden = false, lazy = false }) => {
  const imgRef = useRef(null);

  return lazy ? (
    <LazyLoadImage src={src} alt={alt} aria-hidden={ariaHidden} />
  ) : (
    <img ref={imgRef} src={src} alt={alt} />
  );

  // return
};

export default React.memo(Image);
