import React from 'react'

const Side = (props) => {
  return (
    <div>
      { props.sides.join(", ") }
    </div>
  )
}

export default Side
