import React from 'react'
import ProductCard from '@/Component/ProductCard'
import ProductData from '@/Data/ProductData'



const ProductList = () => {
  return (
    <>
        <div className="flex flex-wrap w-full">
            {ProductData.map((value)=>{
                return(
                    <ProductCard
                        imageproduct={value.imageproduct}
                        alt={value.alt}
                        descript={value.descript}
                    />
                )
            })}
        </div>
        
    </>
  )
}

export default ProductList