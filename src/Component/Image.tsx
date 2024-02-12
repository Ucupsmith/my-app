import React from "react";
import index from "@/pages/index"
import {useState} from "react"

interface IImage {
  src: any;
  alt: string;
  imgclassname: string;
}

// const [color, chChol] = useState('white')
       
const Image = ({ src, alt, imgclassname }: IImage) => {
  return <img src={src} alt={alt} className={imgclassname} />;
};

export default Image;

