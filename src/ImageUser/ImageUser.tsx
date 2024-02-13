import React from 'react'

interface UserImg {
    source:any,
    alter:string,
    userimgcl:any
}

interface PlayUser{
    name: {
        first: string,
        last: string,
    }
    age: number
    email: {
        selfImail: string,
        coorpMail: string,
        linkedIn: string
    }
}

export const UserPlay = (props:PlayUser)=>{
    return(
        <>
            <h1>{props.name.first} {props.name.last} {props.age} {props.email.selfImail}
            {props.email.coorpMail} {props.email.linkedIn}
            </h1>  
        </>
    )
}


const ImageUser = ({source, alter, userimgcl}:UserImg) => {
  return (
    <>
        <img src={source}alt={alter}className={userimgcl}/>
    </>
  )
}

export default ImageUser