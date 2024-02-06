import React from "react";
interface IImage {
  src: any;
  alt: string;
  imgclassname: string;
}

const Image = ({ src, alt, imgclassname }: IImage) => {
  return <img src={src} alt={alt} className={imgclassname} />;
};

export default Image;

