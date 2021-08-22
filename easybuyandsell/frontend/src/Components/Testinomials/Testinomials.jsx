import React from 'react'
import './Testinomials.css'
import gurashish from '../../assets/Gurashish.png';
import parmeet from '../../assets/Parmeet.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import LinkedInIcon from '@material-ui/icons/LinkedIn';


function Testinomials() {
    return (
    <div class="wrapper">
        <div class="box">
            <FontAwesomeIcon icon={faQuoteLeft} className="icon_left_quote"/>
            <p>Gurashish Gill is a 3rd year student of CSE at Thapar Institute Of Engineering and Technology. </p>
            
            <div class="content">
                <div class="info">
                    <div class="name">Gurashish Gill</div>
                    <div class="job">Full Stack Developer</div>
                    <div>
                        <a href="https://www.linkedin.com/in/gurashish-gill-6516b41b6" target="_blank">
                             <LinkedInIcon className="icon"/>
                         </a>
                    </div>
        </div>
        <div class="image">
          <img src={gurashish} alt="" />
        </div>
      </div>
    </div>
    <div class="box">
      <FontAwesomeIcon icon={faQuoteLeft} className="icon_left_quote"/>
      <p>Parmeet Singh is a 3rd year student of CSE at Thapar Institute Of Engineering and Technology. </p>
      <div class="content">
        <div class="info">
          <div class="name">Parmeet Singh</div>
          <div class="job">Full Stack Developer</div>
          <div>
              <a href="https://www.linkedin.com/in/gurashish-gill-6516b41b6" target="_blank">
                <LinkedInIcon className="icon"/>
              </a>
          </div>
        </div>
        <div class="image">
          <img src={parmeet} alt="" />
        </div>
      </div>
    </div>
  </div>

    )
}

export default Testinomials
