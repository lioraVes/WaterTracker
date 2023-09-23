import React from 'react'

export const Cup = ({imgSrc,text,size, isDisabled}) => {
  return (
    <div>
    <div>
        <img src={imgSrc} alt={text}/><br/>
        <input type="radio" value={size} name="cupSize" disabled ={isDisabled} 
        required={!isDisabled}
        />
        {text}
    </div>

</div>
  )
}
