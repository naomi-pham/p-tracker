import React from 'react'
import {CircularProgressbar} from "react-circular-progressbar"

const Progress = ({value}) => {
  return (
    <div>
        <CircularProgressbar
          value={value}
          text={`${value}%`}
          styles={({
            height: 200, 
            width: 200,
            fontSize: 12,
            textColor: '#d4d4d8',
            backgroundColor: '#d4d4d4',
            pathColor: `rgba(0, 128, 128, ${value /100})`

          })}
        />
    </div>
  )
}

export default Progress