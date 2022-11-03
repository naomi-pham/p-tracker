import React from 'react'
import Circle from "react-circle"

const Progress = (props) => {
  return (
    <div>
        <Circle 
            progress={props.value} 
            size="100"
            progressColor='teal'
            bgColor='#d4d4d4'
            textColor='#d4d4d8'
        />
    </div>
  )
}

export default Progress