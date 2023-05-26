import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter';

import './Footer.css'

function Footer() {
  return (
    <div className="footer">
      <div className="port_footer">
        <ul className="port_footer-about">
          <p>Delícias irresistíveis para adoçar seu dia.</p>
        </ul>

        <ul className="port_footer-social">
          <li><a href="#footer"><FacebookIcon color='#4F0909' size={32}/></a></li>
          <li><a href="#footer"><InstagramIcon color='#4F0909' size={32}/></a></li>
          <li><a href="#footer"><TwitterIcon color='#4F0909' size={32} /></a></li>
        </ul>

      </div>
    </div>
  )
}

export default Footer