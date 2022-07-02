import React from 'react'
import propTypes from "prop-types"
 
const QuizButton = ({children, index, check}) => {

  return (
    <button className='py-3 px-6 w-full h-full sm:h-auto sm:w-1/2 border text-black'
      onClick={() => check(children)}>
        {children}
    </button>
  )
}

QuizButton.propTypes = {
    children: propTypes.string,
    index: propTypes.number,
    check: propTypes.func
}


export default QuizButton