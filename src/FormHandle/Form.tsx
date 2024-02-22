import React from "react";

interface IForm {
  name: string;
  label: string;
  type: string;
  className: string;
  
}

const Form = ({ name, label, type, className }: IForm) => {
  return (
    <>
      <div className={className}>
        <label htmlFor={label}>{label}</label>
        <input type={type} name={name} id={label} />
      </div>
    </>
  );
};

export default Form;
