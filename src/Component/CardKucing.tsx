import React from 'react'
import {useState} from 'react'
import DataKucing from '@/Data/DataKucing'

interface kocheng{
    id:number,
    sauce:string,
    desc:string,
    
}


const CardKucing = ({id,sauce,desc}: kocheng) => {
        

    const jumbutton = ()=>{
    
        const [buttonColor, setbuttonColor] = useState(DataKucing.map(()=>''))
        
        const button = (index:number)=>{
            const clickbutton = [...buttonColor]
            clickbutton[index] = clickbutton[index] === 'bg-white' ? 'bg-blue' : 'bg-white'
            setbuttonColor(clickbutton)
            return clickbutton[index]
        }
        
    }

    const [button, setButton] = useState(Array(DataKucing.length).fill(0))
    const [change, setChange] = useState(DataKucing.map(()=>''))

    const [checkout, setCheckout] = useState(0)
    const [isCheckout, setisCheckout] = useState(false)
    
    const [btn, setBtn] = useState(0)

    const increment = ()=>{
        setCheckout(checkout + 1)
        if(checkout === 0){
            return setisCheckout(true)
        }
    }

    const decrement = ()=>{
        setCheckout(checkout - 1)
        if(checkout === 1){
            return setisCheckout(false)
        }
    }

    const incrementButton = ()=>{
        setBtn(btn + 1)
    }

    const decrementButton = () =>{
        setBtn(btn - 1)
    }


  return(
    <>
        <div className="w-96 min-h-full flex border space-x-5 gap-10 border-blue-500 content-between">
            <div className="border p-5 col-span-1">
                <a href="" className='cursor-pointer'><img src={sauce} alt="" className='object-cover'/></a>
                <div className="col p-5 border space-y-10">
                    <div className="card-text w-full text-wrap">
                        <p className='bg-blue-500'>{desc}</p>
                        <div typeof='button' className=" justify-between items-center flex min-h-full align-middle border">
                            {isCheckout ? <>
                                <button className='p-3 border' onClick={decrement}>-</button>
                                <p className='content-center h-full justify-center align-middle'>{checkout}</p>
                                <button className='p-3 border' onClick={increment}>+</button>
                            </>: <button onClick={increment} className='w-full border'>checkout</button>}                            
                        </div>  
                    </div>
                                
                </div>
            </div>

       
        </div>




    </>
  )
}

export default CardKucing