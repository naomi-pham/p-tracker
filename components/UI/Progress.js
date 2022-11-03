import React from 'react'
import {CircularProgressbar} from "react-circular-progressbar"

const Progress = ({value}) => {
  return (
    <div>
        <CircularProgressbar
          value={value}
          text={`${value}%`}
        />
    </div>
  )
}

export default Progress