import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export const ProgressBar = ({totalWater,curWater}) => {
    const percentage = totalWater!==0 ? Math.min(((curWater/totalWater)*100).toFixed(2),100): 0;
  
    const left=(totalWater-curWater).toFixed(2);

    const ProgressbarStyles = {
        root:{
            width: '200',
            height: '200'
        },
        path: {
          stroke: `rgba(17, 27, 80)`,
          strokeLinecap: 'round',
          transition: 'stroke-dashoffset 0.5s ease 0s',
        },
        trail: {
          stroke: '#d6d6d6',
          strokeLinecap: 'butt',
        },
        text: {
          fill: 'rgba(125, 159, 174, 1)',
          fontSize: '20px',
          textAnchor: 'middle',
          dominantBaseline: 'middle',
          textShadow: '1px 1px 4px rgba(0, 0, 0, 0.2)'
        },
        background: {
          fill: '#3e98c7',
        },
      };


  return (
    <div id='ProgressBar'>
        <CircularProgressbar  
            value={percentage} 
            text={`${percentage}%`}
            styles={ProgressbarStyles} />
        <br/><br/>
        <div className='leftML'>
            {left>=0 ? <div>just {left} ml left!</div> : <div>congrats you reached your goal!</div>}
            {/* just {left} ml left! */}
        </div>
        <br/>

    </div>
  )
}

