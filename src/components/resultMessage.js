import React from 'react';

export default function ResultMessage(props) {
  return(
    <div>
      <h1>{props.resultMessage}</h1>
      <h3>{props.resultColor}</h3>
    </div>
  )
}