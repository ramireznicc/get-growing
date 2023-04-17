import React from "react";
import './CartWidget.css'

export const CartWidget = ({counter}) => {
  return(
    <div className="CartWidget">
      <span>🛒</span>
      <span>{counter}</span>
    </div>
  )
} 