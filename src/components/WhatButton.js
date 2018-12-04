import React from 'react';

export default function WhatButton(props) {
  return (
    <h3 className="whatButton white" type="click" onClick={e => {
      e.preventDefault();
      props.showInfo()}}>WHAT?
    </h3>
  )
}