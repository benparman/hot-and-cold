import React from 'react';

export default function ResultMessage(props) {
  return(
    <div className="ResultMessage">
      <h2>{props.resultMessage}</h2>
    </div>
  )
}