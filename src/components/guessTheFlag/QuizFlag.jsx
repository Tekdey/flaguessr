import React from 'react'
import propTypes from "prop-types"

const QuizFlag = ({flag}) => {
  return (
    <img
        className="object-cover h-100 w-[500px] rounded-md border" 
        alt="you need to find it"
        src={flag}
      />
  )
}

QuizFlag.propTypes = {
  flag: propTypes.string
}


export default QuizFlag