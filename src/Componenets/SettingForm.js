import React , {useState}from 'react'
import vi_icon from '../Assets/submit_icon.svg';
import edit_amount_icon from '../Assets/edit_cups_icon.svg';
import continue_icon from '../Assets/next_icon.svg'
import help_icon from '../Assets/help_icon.svg'
import { EditWaterAmount } from './EditWaterAmount';


export const SettingForm = ({showForm, setShow,setShowProgress,setWaterResult}) => {
    const [weight,setWeight]=useState('');
    const [activity,setActivity]=useState(0);
    const [showHelp, setShowHelp] = useState(false);
    const [climate,setClimate]=useState(0);
    const [waterRes, setWaterRes]=useState('');
    const [enableEdit, setEnableEdit]=useState(false);
    const [isCalculated,setIsCalculated]=useState(false);

    
    const handleWeightChange = (e) => {
        if(!isNaN(e.target.value)){
            setWeight(e.target.value); 
        }
      };

    //   useEffect(() => {
    //     console.log("weight is " + weight);
    //   }, [weight]);

      const handleActivityChange =(e) =>{
        let activityFactor;

        switch (e.target.value) {
          case 'Sedentary':
            activityFactor =  0;
            break;
          case 'Lightly':
            activityFactor = 250 ;
            break;
          case 'Moderately':
            activityFactor =  500;
            break;
          case 'Very':
            activityFactor =  750;
            break;
          case 'Super':
            activityFactor = 1000 ;
            break;
          default:
            activityFactor =  0;
            break;
        }
        setActivity(activityFactor);
      }

      const handleClimateChange=(e)=>{
        let climateFactor;
        switch (e.target.value) {
          case 'Hot':
            climateFactor =  500;
            break;
          case 'Normal':
            climateFactor = 0 ;
            break;
          case 'Cold':
            climateFactor =  250;
            break;
          default:
            climateFactor = 0;
            break;
        }
        setClimate(climateFactor);
      }
      
      const handleSubmitForm = (e) =>  {
        e.preventDefault();
        let res= (weight * 30) + activity + climate;
        setWaterRes(res); 
        setIsCalculated(true);
    }

    const handleEdit=(e)=>{
      if(isCalculated){
        setEnableEdit(true);
      }
    }

    const editRes=(value)=>{
      setWaterRes(value);
      setEnableEdit(false);
    }
    const handleNext=()=>{
      if(isCalculated && !enableEdit){
      setShow(!showForm);
      document.getElementById("settingForm").style.display="none";

      setShowProgress(true)
      setWaterResult(waterRes);
    }

      
    }
  return (
    <form id="settingForm" className="SettingFormContainer"  onSubmit={handleSubmitForm}>
        <div className='SetFormHeader'> let's calculate:</div>

        <label> weight: </label>
        <input  readOnly={enableEdit} className="inputBox" type='number' min="0" step="0.01" value={weight} placeholder='enter a number >= 0'
          onKeyPress={(e) => {
            const charCode = e.charCode || e.keyCode;
            if (charCode < 48 || charCode > 57) {
                e.preventDefault(); 
            } 
         }}
          onChange={handleWeightChange} required={true}/>
        <label>kg</label> <br/>

        <label> activity level: </label>
        <select disabled={enableEdit}  className="inputBox"  required={true} onChange={handleActivityChange}>
            <option value="">select an option</option>
            <option value="Sedentary">Sedentary</option>
            <option value="Lightly">Lightly active </option>
            <option value="Moderately">Moderately active </option>
            <option value="Very">Very active</option>
            <option value="Super">Super active </option>
        </select> 

        <span
          style={{ marginLeft: '8px' }}
          onMouseEnter={() => { setShowHelp(true);}}
          onMouseLeave={() => { setShowHelp(false);}}
        >

        <img style ={{cursor: 'pointer'}} src={help_icon} alt="help"/>
        </span>
        {showHelp && <div className="help">
            Sedentary: little or no exercise <br/>
            Lightly active: light exercise or sports 1-3 days a week <br/>
            Moderately active: moderate exercise or sports 3-5 days a week <br/>
            Very active: hard exercise or sports 6-7 days a week <br/>
            Super active: very hard exercise, physical job, or training twice a day
            </div>
            }
         <br/>

        <label>climate environment: </label>
        <select  disabled={enableEdit}  className="inputBox"  required={true} onChange={handleClimateChange}>
            <option value="">select an option</option>
            <option value="Hot">Hot and Dry</option>
            <option value="Normal">Normal</option>
            <option value="Cold">Cold</option>
        </select> 
        <br/>
        <button className="button" type="submit"> 
            <img src={vi_icon} alt="done"/> 
        
        </button>  
        <br/>

        your recommended daily water intake: <br/>
        {enableEdit ? (
        <EditWaterAmount editRes={editRes}/>) : (
          <div>
            <input className='inputBox' type="number" min="0" step="0.01" value={waterRes} readOnly={true}/>
            ml
          </div>
      )} 
        <button className='button' onClick={handleEdit} >
           adjust amount 

          <img src={edit_amount_icon} alt="adjust amount" style={{ marginLeft: '8px' }} /> 
            <br/>
        </button>

        <div className='SetFormFooter'>
          <button className='nextButton' onClick={handleNext}>
            save and continue      
            <img src={continue_icon} alt="next"></img> <br/> 
          </button>

        </div>
    </form>
  )
}
