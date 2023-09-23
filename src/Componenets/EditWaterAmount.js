import React, { useState } from 'react'

export const EditWaterAmount = ({editRes}) => {
    const [value,setValue]=useState("0");

    const handleSubmit=(e)=>{ 
        e.preventDefault();
        editRes(value);
    }

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
        <input type='number' min="0" step="0.01" className='inputBox' value={value}
            onKeyPress={(e) => {
                const charCode = e.charCode || e.keyCode;
                if (charCode < 48 || charCode > 57) {
                    e.preventDefault(); 
                } 
             }}
            placeholder='0' 
            onChange={(e)=> setValue(e.target.value)}/>

        <button className="updateButton" type='button' onClick={handleSubmit}>
            Update </button>
        </form>
      )
}
