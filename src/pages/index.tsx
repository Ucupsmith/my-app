import React from "react";
import Image from "@/Component/Image";
import { useState, useEffect } from "react";
import itterasi from "@/Data/itterasi"
import ProductCard from "@/ProductCard/ProductCard"
import ImageUser from "@/ImageUser/ImageUser";


const user = {
  name: "jesica comita",
  imageUrl: "https://asset.kompas.com/crops/AqnwKTVQ7_mSneRdZQt-slGkiFE=/0x0:1920x1280/750x500/data/photo/2021/12/02/61a8477b01ca9.jpg",
  desc: "vincent van gogh",
};

const ImageJumb = {

  imgUrllink : 'https://media.licdn.com/dms/image/D5603AQFq6_CwcK0NVQ/profile-displayphoto-shrink_400_400/0/1695409307087?e=1713398400&v=beta&t=oOsL0hBVOoqm4Z5Ipizy-Ur98bLMGFDN8ClSZh4j12A'

}
// const h1 = (() => {
//   document.querySelector('p container');

// })

// const [btnChg, chCol] = useState('white');

const index = () => {

  // const [btnColor, setColor] = useState(Array(itterasi.length).fill(false));
  // const [color, setchColor] = useState(false)
  // const [colors, setchColors] = useState(false)

  const [updateCol, setColors] = useState([''])


  const btnClicker = (Imageindex:any)=>{
    const newbtn = [...updateCol]
    newbtn[Imageindex] = newbtn[Imageindex] === 'bg-white' ? 'bg-grey' : 'bg-white'
    setColors(newbtn)
  }
  
  const chUser = {
    first: 'Aqil Nauffan',
    last:'Marjana',
    age: 20,
   
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
            <p id="p1" className="container flex-wrap">
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
        <ProductCard 
          source="https://asset.kompas.com/crops/AqnwKTVQ7_mSneRdZQt-slGkiFE=/0x0:1920x1280/750x500/data/photo/2021/12/02/61a8477b01ca9.jpg"
          deskripsi="Hal terakhir yang akan kita lakukan adalah merapikan kode kita sedikit. Seiring bertambahnya ukuran komponen, Anda ingin mengabstraksikan kode sebanyak returnmungkin dari pernyataan. Ini biasanya memerlukan pengaturan output yang Anda inginkan dalam variabel. Caranya cukup mudah"
          alt="testing"
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

              <div
                className={`${updateCol[index] === 'bg-white'? "bg-gray-600" : "bg-white"
                } min-h-52 p-5 border cursor-pointer`}
              >
                <h1 className=" text-black">{value.deskripsi}</h1>
              </div>
            </div>
          );
        })} 


      

      </div>


    </>
  );
};

export default index;
