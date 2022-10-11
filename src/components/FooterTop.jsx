import React from "react";
import classes from './footerTop.module.css'
import {GoFile} from 'react-icons/go'
import {GiReturnArrow} from 'react-icons/gi'
import {GrSupport} from 'react-icons/gr'
import {MdOutlinePrivacyTip} from 'react-icons/md'

export const FooterTop = () => {
  return <div className={classes.container}>   
   <div>
    <div><GoFile color="red" size='30px'/></div>
    <div>Terms & Conditions</div>    
    </div>
      <div>
        <span><GiReturnArrow color="red" size='30px'/></span>
    <div>Return Policy </div>    
    </div>
      <div>
        <span><GrSupport color="red" size='30px'/></span>
    <div>Support Policy</div>    
    </div>
      <div>
        <span><MdOutlinePrivacyTip color="red" size='30px'/></span>
    <div>Privacy Policy</div>    
    </div>
    </div>;
};
