import React from 'react'

const Input = ({type , label , autoFocus , placeholder , name , handleChange}) => {
  return (
    <>
      <div className='form-control' >
        <label>{label}</label>
        <input 
        name={name}
        type={type}
        onChange={handleChange}
        required
        autoFocus={autoFocus}
        placeholder={placeholder}
         />
      </div>
    </>
  )
}

export default Input