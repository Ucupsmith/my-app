import React from "react";
import Image from "@/Component/Image";

const itterasi = [
  {
    src: "https://asset.kompas.com/crops/AqnwKTVQ7_mSneRdZQt-slGkiFE=/0x0:1920x1280/750x500/data/photo/2021/12/02/61a8477b01ca9.jpg",
    alt: "",
    deskripsi: "Hal terakhir yang akan kita lakukan adalah merapikan kode kita sedikit. Seiring bertambahnya ukuran komponen, Anda ingin mengabstraksikan kode sebanyak returnmungkin dari pernyataan. Ini biasanya memerlukan pengaturan output yang Anda inginkan dalam variabel. Caranya cukup mudah",
  },

  {
    src: "https://asset.kompas.com/crops/AqnwKTVQ7_mSneRdZQt-slGkiFE=/0x0:1920x1280/750x500/data/photo/2021/12/02/61a8477b01ca9.jpg",
    alt: "",
    deskripsi: "FOTO KUCING 2",
  },
  {
    src: "https://asset.kompas.com/crops/AqnwKTVQ7_mSneRdZQt-slGkiFE=/0x0:1920x1280/750x500/data/photo/2021/12/02/61a8477b01ca9.jpg",
    alt: "",
    deskripsi: "FOTO KUCING 3",
  },

  {
    src: "https://asset.kompas.com/crops/AqnwKTVQ7_mSneRdZQt-slGkiFE=/0x0:1920x1280/750x500/data/photo/2021/12/02/61a8477b01ca9.jpg",
    alt: "",
    deskripsi: "FOTO KUCING 4",
  },

  {
    src: "https://asset.kompas.com/crops/AqnwKTVQ7_mSneRdZQt-slGkiFE=/0x0:1920x1280/750x500/data/photo/2021/12/02/61a8477b01ca9.jpg",
    alt: "",
    deskripsi: "FOTO KUCING 4",
  },

  {
    src: "https://asset.kompas.com/crops/AqnwKTVQ7_mSneRdZQt-slGkiFE=/0x0:1920x1280/750x500/data/photo/2021/12/02/61a8477b01ca9.jpg",
    alt: "",
    deskripsi: "FOTO KUCING 4",
  },

  
  
 

];




const index = () => {
  return (
    <>


      <nav className="bg-white min-h-11 border ">
        <ul className="list-item-group flex justify-between p-5">
          <li>
            <a href="" className="logo text-black">logo</a>
          </li>

          <div className="flex content-end space-x-10">

            <li>
              <a href="" className="product text-black">product</a>
            </li>
            <li>
              <a href="" className="product text-black">about</a>
            </li>
            <li>
              <a href="" className="product text-black">login</a>
            </li>
            
          </div>
          
        </ul>
      </nav>


      <div className="container max-w-full">
        <div className="bg-slate-500  min-h-52 my-5 p-10">
          <div className="container-fluid border p-48">
            <h1>card container</h1>
            <p className="container">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos saepe veritatis nam minima earum laborum quam, omnis praesentium, minus voluptas tempore sapiente provident autem illo. Nostrum culpa quas consequuntur dolorem.
            </p>
          </div>
        </div>
      </div>



      <div className="container justify-between content-center bg-white flex max-w-full p-5 gap-10 my-16 flex-wrap">
        
      {itterasi.map((value, index) => {
       
       return (
          <div className="align-center p-3 border w-96 ">

            <Image 
              key={index}
              src={value.src}
              alt={value.alt}
              imgclassname="w-96"
            />

            <div className="bg-blue-400 min-h-52 p-5">
              <h1 className=" text-red-400">{value.deskripsi}</h1>

            </div>
            
            
          </div>
        );
      })}
        
        
      </div>    
      
    </>
  );
};

export default index;
