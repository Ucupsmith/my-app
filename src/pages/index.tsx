import React from "react";
import Image from "@/Component/Image";
import { useState, useEffect, useReducer } from "react";
import itterasi from "@/Data/itterasi"
import ProductCard from "@/ProductCard/ProductCard"
import ImageUser from "@/ImageUser/ImageUser";
import DataKucing from "@/Data/DataKucing"
import CardKucing from "@/Component/CardKucing";
import FormHandle from "@/FormHandle/FormHandle"
import Form from "@/FormHandle/Form";
import ProductList from "@/Component/ProductList";
import ProductData from "@/Data/ProductData";
// import ProductCreate from "@/Component/ProductCreate"


const user = {
  name: "jesica comita",
  imageUrl: "https://asset.kompas.com/crops/AqnwKTVQ7_mSneRdZQt-slGkiFE=/0x0:1920x1280/750x500/data/photo/2021/12/02/61a8477b01ca9.jpg",
  desc: "vincent van gogh",
};

const ImageJumb = {

  imgUrllink : 'https://media.licdn.com/dms/image/D5603AQFq6_CwcK0NVQ/profile-displayphoto-shrink_400_400/0/1695409307087?e=1713398400&v=beta&t=oOsL0hBVOoqm4Z5Ipizy-Ur98bLMGFDN8ClSZh4j12A'

}

  
const ProductCreate = () => {
  
  const initialState = {
    product:'',
    imageproduct: '',
    descript:''
  }
  
  const [Formdata, setFormdata] = useState(initialState)
  const {product,imageproduct,descript} = Formdata
  
  const handleOnSubmit = (e:string | any)=>{
    e.preventDefautlt()
    console.log(Formdata)
    setFormdata(initialState)
  }

  const handleChange = (e:string | any)=>{
    setFormdata({...Formdata,[e.target.name]:e.target.value})
  }
    

  const [block, setBlock] = useState(false)
  const handleBlock = ()=>{
    setBlock(!block)
  }
  
  return (
    
    <div className="items-center w-screen h-96 bg-white justify-center flex">
      <div className="block w-96 justify-center rounded-md mx-6 px-10 bg-green-400">
        <button onClick={handleBlock} className='font-semibold w-full'>{block? 'close product' : 'add product'}</button>
      </div>
       {block &&(
          <div onSubmit={handleOnSubmit} className="mt-2 rounded-md w-96 bg-red-400 p-6 py-1 px-2">
           <h1 className="capitalize text-green-300">read file</h1>
            <div className="mt-3 mb-2 px-2 py-1">
              <label htmlFor="" className="block text-base lowercase">add product</label>
              <input type="text" name="product" value={product} onChange={handleChange}  placeholder='create product' className="border rounded-md px-2 py-1 w-full"/>
            </div>
            <div className="mt-3 mb-2 px-2 py-1">
              <label htmlFor="" className="block text-base lowercase">description</label>
              <input type="text" name="descript"  value={descript} onChange={handleChange} placeholder='description' className="border rounded-md px-2 py-1 w-full"/>
            </div>
            <div className="mt-3 mb-2 px-2 py-1">
              <label htmlFor="" className="block text-base lowercase">img url</label>
              <input type="text" name="imageproduct" value={imageproduct} onChange={handleChange} placeholder='imgUrl' className="rounded-md px-2 py-1 w-full"/>
            </div>
            <div className="mt-3 mb-2 px-2 justify-center items-center py-1">
              <input type="submit" value="" className="rounded bg-blue-500 w-full p-3 border" />
            </div>
        </div>)}
    </div>
    

  )
}



// const h1 = (() => {
//   document.querySelector('p container');

// })

// const [btnChg, chCol] = useState('white');

const index = () => {

  const [updateCol, setColors] = useState(itterasi.map(()=>'bg-white'))
  const [updateCols,setColos] = useState(Array(itterasi.length).fill('0'))
 
  const btnClicker = (Imageindex:any)=>{
    // const newbtns = [...updateCols]
    // newbtns[Imageindex] = newbtns[Imageindex] === 'bg-white' ? 'bg-grey' : 'bg-white'
    const newbtns = [...updateCols]
    const newbtn = updateCol.map((value,index)=> {
      if(index === Imageindex){
        newbtns[index]++
        return newbtns[index] % 2 === 1? 'bg-gray-600':'bg-white'
      }else{
        newbtns[index] = 0
        return 'bg-white'
      }
    })
    setColors(newbtn)
    setColos(newbtns)
   
  }
 
  const chUser = {
    first: 'Aqil Nauffan',
    last:'Marjana',
    age: 20,
   
  }

  const [emailCount, setCount] = useState(0)
  const [update, setUpdate] = useState(false)
  
  const incrementing = ()=>{
    setCount(emailCount + 0)
    if(emailCount === 1){
      setUpdate(false)
    }
    return 
  }

  const decrementing = ()=>{
    setCount(emailCount - 1)
    if(emailCount === 1){
      setUpdate(true)
    }
    return 
  }

  const read = (e:any)=>{
    return 
  }
  


  return (
    <>
      <nav className="bg-white min-h-11 border ">
        <ul className="list-item-group flex justify-between p-5">
          <li>
            <a href="" className="logo text-black">
              logo
            </a>
          </li>
          <div className="flex content-end space-x-10">
            <li>
              <a type="button" href="" className="product text-black">
                product
              </a>
            </li>
            <li>
              <a href="" className="product text-black">
                about
              </a>
            </li>
            <li>
              <a href="" className="product text-black">
                login
              </a>
            </li>
          </div>
        </ul>
      </nav>

      <div className="container max-w-full">
        <div className="bg-slate-500  min-h-52 my-5 p-10">
          <div className="container-fluid border p-20 w-full flex flex-wrap">

            <div className="border p-5 flex flex-wrap align-center w-full justify-between  text-blue-300 text-wrap"> 
            
              <ImageUser 
                source="https://media.licdn.com/dms/image/D5603AQFq6_CwcK0NVQ/profile-displayphoto-shrink_400_400/0/1695409307087?e=1713398400&v=beta&t=oOsL0hBVOoqm4Z5Ipizy-Ur98bLMGFDN8ClSZh4j12A"
                alter=""
                userimgcl=""
              />

              <h1 className="p text-pretty text-4xl capitalize font-medium">name :{chUser.first}</h1>

            </div>

            <h1>card container</h1>
            <p id="p1" className="flex-wrap">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos saepe veritatis nam minima earum laborum quam, omnis
              praesentium, minus voluptas tempore sapiente provident autem illo.
              Nostrum culpa quas consequuntur dolorem.
            </p>
          </div>
        </div>
      </div>


      <div className="container-fluid">
          <div className="row">
            <div className="col justify-center text-center">
                <h1 className="font-sans text-3xl capitalize p-3">anak kucing</h1>
            </div>
          </div>
      </div>

      {/* <FormHandle
          label=""
          nama=""
          email=""
          password=""
        /> */}


      {/* <div className="h-screen flex justify-center items-center bg-blue-400 max-w-full mb-2 ">
            <div className='rounded-md w-96 bg-slate-600  border p-6'>
                <h1 className='capitalize mb-3 text-center border-b-2 p-5 text-3xl font-medium'>login</h1>
                <div className="mb-3 mt-6">
                  <label htmlFor="label" className="block text-base mb-2">email</label>
                  <input type="email" name="email" id="email" className="w-full rounded px-2 py-1 focus:outline-none border" />
                </div>
                <div className="mb-3 mt-6">
                  <label htmlFor="label" className="block text-base mb-2">password</label>
                  <input type="password" name="password" id="password" className="w-full rounded px-2 py-1 focus:outline-none border" />
                </div>
                <div className="flex flex-row justify-between align-middle items-center mb-3 p-2">
                  <input type="checkbox" className="cursor-pointer rounded size-3"id="rememberme" />
                  <label htmlFor="remember-me" className="cursor-pointer">remember me</label>
                  <a href="#" className="capitlize text border-b-white">forgot password?</a>
                </div>
              <div className="mt-1">
                <button className="w-full rounded-md capitalize bg-blue-500 p-2 ">submit</button>
              </div>
            </div>
       </div>  */}

        <div className="h-screen flex justify-center items-center bg-blue-400 max-w-full mb-2 ">
            <div className='rounded-md w-96 bg-lime-400 border p-6'>
                <h1 className='capitalize mb-3 text-center border-b-2 p-5 text-3xl font-medium'>login</h1>
                <div className="mb-3 mt-6">
                  <label htmlFor="email" className="block text-base mb-2">email</label>
                  <input type="email" name="email" id="email" className="w-full rounded px-2 py-1 focus:outline-none border" />
                </div>
                <div className="mb-3 mt-6">
                  <label htmlFor="password" className="block text-base mb-2">password</label>
                  <input type="password" name="password" id="password" className="w-full rounded px-2 py-1 fcocus:outline-none border" />
                </div>
                <div className="flex flex-row justify-between align-middle items-center mb-3 p-2">
                  <input type="checkbox" className="cursor-pointer rounded size-3"id=""/>
                  <label htmlFor="remember-mec" className="cursor-pointer">remember me</label>
                  <a href="#" className="capitlize text border-b-white">forgot password?</a>
                </div>
              <div className="mt-1">
                <button className="w-full rounded-md capitalize bg-blue-500 p-2 ">
                {update ? <>

                  <div className="w-96 rounded-md bg-slate-400 justify-center items-center mb-2 p-3">
                    <div className="w-full capitalize bg-gray-200 rounded">
                      u are log in!
                    </div>
                  </div>

                </>: <div className='' onClick={incrementing}>login here</div>}</button>
              </div>

             </div>
        </div>

        <ProductCreate
        />
        

        <ProductList
        />
     
      
      <div className="container justify-evenly content-center bg-white max-w-full p-5 gap-10 my-16 flex flex-wrap">
        
        {/* <div className="container border w-96 p-5" onClick={()=>{
          btnClicker(index)
        }}> */}

         {/* <img 
          className="p-5 avatar w-96 border cursor-pointer"
          src={user.imageUrl}
          /> */}

          {/* row h-45 border p-5 */}
          {/* <div className={`${updateCol"bg-gray-600":"bg-white"} p-5 border h-52 cursor-pointer`}>

            <h1 className= "text-black w-full text-wrap">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi asperiores numquam minima magni amet aliquam alias nobis doloribus ex pariatur, deserunt maiores necessitatibus vitae dolore quos excepturi ipsam quae beatae!bhhhvhvhv
            </h1>

          </div> */}

      {/* </div> */}
      
       
{/*       
        hnya ukuran komponen, Anda ingin mengabstraksikan kode sebanyak returnmungkin dari pernyataan. Ini biasanya memerlukan pengaturan output yang Anda inginkan dalam variabel. Caranya cukup mudah"
          alt="testing"
        <ProductCard 
          source="https://asset.kompas.com/crops/AqnwKTVQ7_mSneRdZQt-slGkiFE=/0x0:1920x1280/750x500/data/photo/2021/12/02/61a8477b01ca9.jpg"
          deskripsi="Hal terakhir yang akan kita lakukan adalah merapikan kode kita sedikit. Seiring bertamba
        /> */}
        
        {itterasi.map((value,index) =>{
      
          return (
            <div className="align-center p-3 border w-96 ">
              <div key={index}
                onClick={()=>{
                  btnClicker(index)
                }}

                className="container-img rounded-lg cursor-pointer"
              >
                <Image
                  key={index}
                  src={value.src}
                  alt={value.alt}
                  imgclassname="p-5 border w-96"
                />
            
              </div>
              {/* updateCol[index] === 'bg-white'? "bg-gray-600" : "bg-white"
                } min-h-52 p-5 border cursor-pointer */}
              <div
                className={`${updateCol[index]} min-h-52 p-5 border cursor-pointer `}
              >
                <h1 className=" text-black">{value.deskripsi}</h1>
              </div>
            </div>
          );
        })} 

            
      
     
        
      
      </div>


      <div className="container absolute flex p-5 space-x-10 border-blue-500  max-w-full rounded">

          {DataKucing.map((value,index)=>{
                return(
                  <>
                    <CardKucing
                        key={value.id}
                        id={value.id}
                        sauce={value.sauce}
                        desc={value.desc}
                      />
                  </>
                   
                  
                )  
              })}
       </div>


   
    </>

  );
};

export default index;
