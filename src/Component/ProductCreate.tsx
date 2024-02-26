import {useState} from 'react'

export const ProductCreate=({onCreateProduct}:string | any)=> {

  const [show, setShow] = useState(false)
  const showForm = ()=>{
    setShow(!show)
  }
  
  const initialState = {
    id:'',
    product:'',
    descript:'',
    imageproduct:'',
  }

  const [formData, setFormdata] = useState(initialState)
  const {product,descript,imageproduct} = formData

  const handleForm = (e:string | any)=>{
    setFormdata({...formData, [e.target.name]:e.target.value})
  }

  const handleSubmit =(e:any | string)=>{    
    e.preventDefault()
    onCreateProduct(formData)
    setFormdata(initialState)
  }
  
  return (
    <>

        <div className="w-24 rounded-sm ">

        </div>
        <div className="items-center flex justify-end w-full px-4 rounded-md ">
            <button onClick={showForm} type="button" className='bg-blue-400 rounded px-2'>{`${show ? 'close product':'add product'}`}</button>
        </div>
       {show &&( <form action="" onSubmit={handleSubmit} className='justify-center mt-3 items-center w-screen flex bg-blue-400'>
            <div className="rounded-md block w-96 justify-center items-center bg-white p-4 mb-3 mt-3">
            <h1 className='capitalize mt-3 text-center'>create product</h1>
                <div className="mt-3 mb-3 px-2 py-1 ">
                    <label htmlFor="" className='w-full capitalize '>add product</label>
                    <input type="text" className='block rounded p-2 text-base w-full border bg-slate-300' name='product' value={product} onChange={handleForm} id='' placeholder='nama product' />
                </div>
                <div className="mt-3 mb-3 px-2 py-1 ">
                    <label htmlFor="" className='w-full capitalize '>description</label>
                    <input type="text" className='block rounded p-2 text-base w-full border bg-slate-300' name='descript' value={descript} onChange={handleForm} id='' placeholder='masukan deskripsi'/>
                </div>
                <div className="mt-3 mb-3 px-2 py-1 ">
                    <label htmlFor="" className='w-full capitalize '>imageUrl</label>
                    <input type="text" className='block p-2 rounded text-base w-full border bg-slate-300' name='imageproduct' value={imageproduct} onChange={handleForm} id='' placeholder='imageURl'/>
                </div>
                <button type="submit" className='w-full border p-3 bg-green-500 mt-3 rounded'>add here!</button>
            </div>
        </form>)}
    
    </>
  )
}
