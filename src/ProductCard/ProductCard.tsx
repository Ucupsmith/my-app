import React from "react"
import itterasi from "@/Data/itterasi"

interface ProductCard {
    source:string,
    deskripsi:string,
    alt:any
}
const ProductCard = ({source, deskripsi,alt}:ProductCard) => {
  return (
    <>

        <div className="border container-fluid w-4">
            <div className="row p-5 w-96">
            <img src={source} alt={alt} />
                <div className="border bg-orange-300 col p-3 text-wrap"> 
                    <p className="capitalizetext-blue-500">{deskripsi}</p>
                </div>
            </div>
        </div>
        
    </>
  )
}

export default ProductCard