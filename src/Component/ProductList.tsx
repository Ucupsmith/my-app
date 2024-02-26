import React from 'react'
import {ProductCard} from '@/Component/ProductCard'
import {useState} from 'react'
import ProductData from '@/Data/ProductData'


export const ProductList = ({products}:any) => {
  return (
    <>  
    
        <div className="flex flex-wrap justify-center">
            {products.map((value:any | string)=>{
                return(
                    <ProductCard
                        id={value.id}
                        descript={value.descript}
                        imageproduct={value.imageproduct}
                        alt={value.alt}
                    />    
                )
            })}   
        </div>    
              
    </>
  )
}
