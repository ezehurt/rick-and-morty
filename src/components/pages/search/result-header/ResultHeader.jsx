import React from 'react'
import PropTypes from 'prop-types'

function ResultHeader({amount = 0}) {
  return (
    <div className='result-header'>
        <h4>Result(s): {amount}</h4>
    </div>
  )
}

ResultHeader.propTypes = {
    amount: PropTypes.number
}

export default ResultHeader
