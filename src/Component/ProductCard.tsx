import React from 'react'
import ProductData from '@/Data/ProductData'

interface ProductData{
    imageproduct:any,
    alt:string,
    descript:string
}

const ProductCard = ({imageproduct,alt,descript}:ProductData) => {
  return (
    <>
            <div className="justify-center flex flex-wrap col-span-3 bg-slate-400 items-center p-6">
             <div className="rounded-md w-96 mt-3 p-3 gap-10 bg-lime-300 px-2 border">
                 <img src={imageproduct} alt={alt} className='border' />
                 <h1 className='capitalize'>product 1</h1>
                 <div className="p-3 px-2 py-1">
                     <p className='font-serif capitalize'>
                         {descript}
                     </p>
                 </div>
                 <div className="border bg-blue-400 rounded-md mt-3">
                   <button className="w-full rounded-md capitalize ">read</button>
                 </div>
             </div>
            </div>

    </>
  )
}

export default ProductCard