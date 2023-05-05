import React from "react";
import './CartWidget.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'


export const CartWidget = () => {

  return(
    <div className="CartWidget">
      <FontAwesomeIcon className="CartWidget--icon" icon={faCartShopping} />
      <span>0</span>
    </div>
  )
} 