import React from 'react';
import './button.css';

const Button = ( { text, color, icon, href } ) => {
  return (
    <div className="port__button">
        <button className={color} type="button" href={href}>
          {text} {icon}
        </button>
      </div>
  )
}

export default Button