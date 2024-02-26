import React from 'react'
import ProductData from '@/Data/ProductData'
import { FiDelete } from "react-icons/fi";
import { MdOutlineEdit } from "react-icons/md";


interface product{
    id:number,
    imageproduct:any,
    alt:string,
    descript:string,
}

export const ProductCard = ({id,imageproduct,alt,descript}:product) => {
  return (
    <>
        
        <div className="justify-center w-screen items-center border flex flex-wrap bg-green-300 p-3">
            <div className="rounded-md border w-96 mt-3 mb-2 p-4 bg-white">
                <div className="max-w-full px-3 py-1">
                    <div className="w-full flex justify-end flex-wrap mx-3">
                        <FiDelete className='hover:bg-red-600 mx-4'/>
                        <MdOutlineEdit className='hover:bg-blue-500 mx-4'/>
                    </div>
                    <img src={imageproduct} className="transition:3s ease-in hover:scale-75 cursor-pointer" alt={alt} />
                    <h1 className='mt-3 mb-2 capitalize text-center'>product {id}</h1>
                    <p className="font-sans text-normal ">{descript}</p>                   
                </div>
                <div className="w-full rounded mt-3 border bg-green-500">
                    <button type="submit" className='w-full trasnition:3s ease-in hover:bg-green-200 text-justify'>read</button>
                </div>
            </div>
        </div>

    </>
  )
}
