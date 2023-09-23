import React from 'react'

export const Beverage = ({ imgSrc,text,waterPrecent}) => {
  return (
    <div>
      <img src={imgSrc} alt={text}/><br/>
      <input type="radio" value={waterPrecent} name="beverage" required={true}/>
        {text}
    </div>
  )
}

