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
}

interface Mail{
    mail:{
        mainMail:string,
        secondMail:string,
        coorpMail:string
    }[]
}

export const UserPlay = (props:PlayUser)=>{
    return(
        <>
            <h1>{props.name.first} {props.name.last} {props.age}</h1>
              
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