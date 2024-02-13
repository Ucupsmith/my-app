import React from "react";
import Image from "@/Component/Image";
import { useState, useEffect } from "react";
import ImageUser, { UserPlay } from "@/ImageUser/imageUser";

const itterasi = [
  {
    src: "https://asset.kompas.com/crops/AqnwKTVQ7_mSneRdZQt-slGkiFE=/0x0:1920x1280/750x500/data/photo/2021/12/02/61a8477b01ca9.jpg",
    alt: "",
    deskripsi:
      "Hal terakhir yang akan kita lakukan adalah merapikan kode kita sedikit. Seiring bertambahnya ukuran komponen, Anda ingin mengabstraksikan kode sebanyak returnmungkin dari pernyataan. Ini biasanya memerlukan pengaturan output yang Anda inginkan dalam variabel. Caranya cukup mudah",
  },

  // {
  //   src: "https://asset.kompas.com/crops/AqnwKTVQ7_mSneRdZQt-slGkiFE=/0x0:1920x1280/750x500/data/photo/2021/12/02/61a8477b01ca9.jpg",
  //   alt: "",
  //   deskripsi: "FOTO KUCING 2",
  // },
  // {
  //   src: "https://asset.kompas.com/crops/AqnwKTVQ7_mSneRdZQt-slGkiFE=/0x0:1920x1280/750x500/data/photo/2021/12/02/61a8477b01ca9.jpg",
  //   alt: "",
  //   deskripsi: "FOTO KUCING 3",
  // },

  // {
  //   src: "https://asset.kompas.com/crops/AqnwKTVQ7_mSneRdZQt-slGkiFE=/0x0:1920x1280/750x500/data/photo/2021/12/02/61a8477b01ca9.jpg",
  //   alt: "",
  //   deskripsi: "FOTO KUCING 4",
  // },

  // {
  //   src: "https://asset.kompas.com/crops/AqnwKTVQ7_mSneRdZQt-slGkiFE=/0x0:1920x1280/750x500/data/photo/2021/12/02/61a8477b01ca9.jpg",
  //   alt: "",
  //   deskripsi: "FOTO KUCING 4",
  // },

  // {
  //   src: "https://asset.kompas.com/crops/AqnwKTVQ7_mSneRdZQt-slGkiFE=/0x0:1920x1280/750x500/data/photo/2021/12/02/61a8477b01ca9.jpg",
  //   alt: "",
  //   deskripsi: "FOTO KUCING 4",
  // },
];

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
  const [btnColor, setColor] = useState(false);
  const [Colorc, setColorCol] = useState(false);

  const eventHandler = () => {
    setColor(!btnColor);
  };

  const eventHanz = () => {
    setColorCol(!Colorc);
  };

  const chUser = {
    first: 'Aqil Nauffan',
    last:'Marjana',
    age: 20,
    selfImail: 'akilnauffancozz@gmail.com',
    coorpMail: 'info@seeds',
    linkedIn: 'https://www.linkedin.com/in/aqil-nauffan-marjana/'
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
          <div className="container-fluid border p-32 w-full flex flex-wrap">

            <h1 className="text-2xl ">ollo</h1>
            <div className="border p-5 aling-center w-full justify-around  text-blue-300"> 

              
              <ImageUser 
                source="https://media.licdn.com/dms/image/D5603AQFq6_CwcK0NVQ/profile-displayphoto-shrink_400_400/0/1695409307087?e=1713398400&v=beta&t=oOsL0hBVOoqm4Z5Ipizy-Ur98bLMGFDN8ClSZh4j12A"
                alter=""
                userimgcl=""
              />

              <UserPlay 
                
                name={chUser}
                age={20}
                email={chUser}
              /> 


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

   

      <div className="container justify-evenly content-center bg-white flex max-w-full p-5 gap-10 my-16 flex-wrap">
        
        <div className="container border w-96 p-5" onClick={eventHanz}>

         <img 
          className="p-5 avatar w-96 border cursor-pointer"
          src={user.imageUrl}
          />
          {/* row h-45 border p-5 */}
          <div className={`${Colorc?"bg-gray-600":"bg-white"} p-5 border h-52 cursor-pointer`}>

            <h1 className= "text-black w-full text-wrap">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi asperiores numquam minima magni amet aliquam alias nobis doloribus ex pariatur, deserunt maiores necessitatibus vitae dolore quos excepturi ipsam quae beatae!bhhhvhvhv
            </h1>
                   
          </div>

        </div>

        {itterasi.map((value, index) => {
          //  const turn:any | number = [clicker,jsClick, 0]
          const [clicker, jsClick] = useState("grey");

          return (
            <div className="align-center p-3 border w-96 ">
              <div
                onClick={eventHandler}
                className="container-img rounded-lg cursor-pointer"
              >
                <Image
                  key={index}
                  src={value.src}
                  alt={value.alt}
                  imgclassname="p-5 border w-96"
                />
                {/* style={{backgroundColor: `${btnColor}`, transition:'.3s ease', cursor:'pointer'}}  */}
              </div>

              <div
                className={`${
                  btnColor ? "bg-gray-600" : "bg-white"
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
