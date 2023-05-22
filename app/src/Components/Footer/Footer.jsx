import React from 'react'
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";

import './Footer.css'

function Footer() {
  return (
    <div className="footer">
      <div className="port_footer">
        <ul className="port_footer-about">
          <p>Delícias irresistíveis para adoçar seu dia.</p>
        </ul>

        <ul className="port_footer-social">
          <li><a href="#footer"><FiFacebook color='#4F0909' size={32}/></a></li>
          <li><a href="#footer"><FiInstagram color='#4F0909' size={32}/></a></li>
          <li><a href="#footer"><FiTwitter color='#4F0909' size={32} /></a></li>
        </ul>

      </div>
    </div>
  )
}

export default Footer