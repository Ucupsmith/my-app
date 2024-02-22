import React from 'react'
import ProductData from '@/Data/ProductData'
import {useState} from "react"

const ProductCreate = () => {


  const [block, setBlock] = useState(false)


  return (
    <div className="items-center w-screen h-96 bg-white justify-center flex">
        <div className="block w-96 justify-center bg-green-400">
            <button className='font-semibold border'>create product</button>
        </div>
       {block &&(
          <div className="mt-2 rounded-md w-96 bg-red-400 p-6 py-1 px-2">
           <h1 className="capitalize text-green-300">read file</h1>
            <div className="mt-3 mb-2 px-2 py-1">
              <label htmlFor="" className="block text-base lowercase">add product</label>
              <input type="text" name="" id="" placeholder='create product' className="placeholder:crate product border rounded-md px-2 py-1 w-full"/>
            </div>
            <div className="mt-3 mb-2 px-2 py-1">
              <label htmlFor="" className="block text-base lowercase">description</label>
              <input type="text" name="" id="" placeholder='description' className="placeholder:crate product border rounded-md px-2 py-1 w-full"/>
            </div>
            <div className="mt-3 mb-2 px-2 py-1">
              <label htmlFor="" className="block text-base lowercase">img url</label>
              <input type="text" name="" id="" placeholder='imgUrl' className="placeholder:crate product border rounded-md px-2 py-1 w-full"/>
            </div>
        </div>)}
    </div>
    

  )
}

export default ProductCreate