import React from 'react';

export default function ResultMessage(props) {
  return(
    <div className="ResultMessage">
      <h1>{props.resultMessage}</h1>
    </div>
  )
}