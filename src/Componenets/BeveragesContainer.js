import React, {useState } from 'react'
import {Beverage} from './Beverage.js'
import water_icon from '../Assets/water_icon.svg'
import soda_icon from '../Assets/soda_icon.svg'
import tea_icon from '../Assets/tea_icon.svg'
import coffee_icon from '../Assets/coffee_icon.svg'
import chocolate_icon from '../Assets/chocolate_icon.svg'
import milk_icon from '../Assets/milk_icon.svg'
import sports_drinks_icon from '../Assets/sports_icon.svg'
import juice_icon from '../Assets/juice_icon.svg'
import smoothie_icon from '../Assets/smoothie_icon.svg'
import beer_icon from '../Assets/beer_icon.svg'
import wine_icon from '../Assets/wine_icon.svg'
import hundred_ml from '../Assets/100ml_icon.svg'
import two_hundred_ml from '../Assets/200ml_icon.svg'
import three_hundred_ml from '../Assets/300ml_icon.svg'
import four_hundred_ml from '../Assets/400ml_icon.svg'
import five_hundred_ml from '../Assets/500ml_icon.svg'
import seven_hundred_ml from '../Assets/750ml_icon.svg'
import one_liter from '../Assets/1L_icon.svg'
import two_liter from '../Assets/2L_icon.svg'
import { Cup } from './Cup.js'
import plus from '../Assets/plus.svg'


export const BeveragesContainer = ({curWater,setWater}) => {
  const [waterPrecent,setWaterPrecent]=useState(0);
  const [cupSize,setCupSize]=useState(0);
  const [isOther,setisOther]=useState(false);
  const [isBeverage,setIsBeverage]=useState(false);
  const [isCup,setIsCup]=useState(false);


  const beverages = [
    { id: 'water', imgSrc: water_icon, text: 'Water', waterPrecent:100},
    { id: 'soda', imgSrc: soda_icon, text: 'Soda', waterPrecent:98 },
    { id: 'tea', imgSrc: tea_icon,  text: 'Tea' , waterPrecent:92},
    { id: 'coffee', imgSrc: coffee_icon,  text: 'Coffee' , waterPrecent:90},
    { id: 'chocolate', imgSrc: chocolate_icon,  text: 'Chocolate' , waterPrecent:50},
    { id: 'milk', imgSrc: milk_icon, text: 'Milk' , waterPrecent:87},
    { id: 'sports-drinks', imgSrc: sports_drinks_icon, text: 'Sports Drinks', waterPrecent:95 },
    { id: 'juice', imgSrc: juice_icon, text: 'Juice' , waterPrecent:85},
    { id: 'smoothie', imgSrc: smoothie_icon, text: 'Smoothie' , waterPrecent:70},
    { id: 'beer', imgSrc: beer_icon, text: 'Beer', waterPrecent:42 },
    { id: 'wine', imgSrc: wine_icon, text: 'Wine' , waterPrecent:28},
  ];

  const cups = [
    {id: '100ml', imgSrc: hundred_ml, text: '100ml',size:100},
    {id: '200ml', imgSrc: two_hundred_ml, text: '200ml',size:200},
    {id: '300ml', imgSrc: three_hundred_ml, text: '300ml',size:300},
    {id: '400ml', imgSrc: four_hundred_ml, text: '400ml',size:400},
    {id: '500ml', imgSrc: five_hundred_ml, text: '500ml',size:500},
    {id: '750ml', imgSrc: seven_hundred_ml, text: '750ml',size:750},
    {id: '1L', imgSrc: one_liter, text: '1L', size:1000},
    {id: '2L', imgSrc: two_liter, text: '2L',size:2000},
  ];

    const onChoseBeverage= (e)=>{
      debugger;
        setWaterPrecent(e.target.value);
        setIsBeverage(true);
    }

    const onChoseCup=(e)=>{
      console.log("chosedcup");
      setCupSize(e.target.value);
      setIsCup(true);
      
    }

    const handleOtherWaterAmount=(e)=>{
      setCupSize(e.target.value);
      if(e.target.value===''){
        setisOther(false);
      }
      else{
        setisOther(true);
      }
    }

    const addWater=(e)=>{ ///todo: doesnt check validity of required, also change the placeholder in other!
      debugger;
      e.preventDefault();
      setWater(curWater+ (waterPrecent /100) * cupSize);

      if(isBeverage && (isCup || isOther)){
        // e.preventDefault();      
        document.getElementById("MainForm").reset();
        setisOther(false);
        setIsBeverage(false);
        setIsCup(false);
        setWaterPrecent(0);
        setCupSize(0);
        
        const targetElement = document.getElementById('ProgressBar');
        if (targetElement) {
          // Smoothly scroll to the element
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }

    }
  return (
    <form id="MainForm" className='BeveragesContainer'>
      <div className='BeveragesHeader'>
          Choose Beverage:
      </div>
      <div className='BeveragesIcons' onChange={onChoseBeverage}>
      {beverages.map((beverage) => (
        <Beverage
          key={beverage.id} // Add a unique "key" prop here
          imgSrc={beverage.imgSrc}
          text={beverage.text}
          waterPrecent={beverage.waterPrecent}
        />
      ))}
      </div>

      <div className='BeveragesHeader'>
          Choose Cup Size:
      </div>
      <div className='CupsIcons' onChange={onChoseCup}>
        {cups.map((cup) => (
          <Cup key={cup.id} imgSrc={cup.imgSrc} text={cup.text} size={cup.size} 
          isDisabled={isOther} 
          />
        ))}
      </div>
      <br/>
      <div>
        <label>other cup size: </label>
        <input className='inputBox' type='number' min="0" step="0.01" 
         placeholder={(waterPrecent /100) * cupSize} 
        onKeyPress={(e) => {
          const charCode = e.charCode || e.keyCode;
          if (charCode < 48 || charCode > 57 ) {
              e.preventDefault(); 
          } 
       }}
        onChange={handleOtherWaterAmount} 
        required={isBeverage && !isCup}
        />
        ml
      </div>
      <br/>
      <div className='BeverageFooter'>
        <button className='BeverageFooterButton' type="submit" onClick={addWater}>
          <img src={plus} alt='plus' style={{verticalAlign:'middle'}}/>
          <span style={{verticalAlign:'middle'}}> add </span>
        </button>

      </div>
    </form>
  )
}
