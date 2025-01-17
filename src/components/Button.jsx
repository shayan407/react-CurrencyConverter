/* eslint-disable react/prop-types */
// import React from 'react'

function Button({onClick}) {
  return (
    <>
    <div className="flex flex-row justify-center items-center">
        <button onClick={onClick} className="btn active:scale-95 bg-green-800 text-xl"><i className="ri-arrow-up-down-line"></i></button>
    </div>
    </>
  )
};

export default Button;
