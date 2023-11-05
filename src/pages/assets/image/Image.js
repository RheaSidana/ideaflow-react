import React from 'react'
import useConstants from "./../../../useConstants";

const Image = () => {
    const {CompanyLogoSrc} =  useConstants();
  return (
    <div>
      <img src={CompanyLogoSrc} alt="company logo" 
        width="100%" height="260em"  
      />
    </div>
  )
}

export default Image