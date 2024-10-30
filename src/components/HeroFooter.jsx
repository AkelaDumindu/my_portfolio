import React from 'react'
import PrimaryButton from './Primary_button'
import OutlineButton from './Outline_button'

const HeroFooter = () => {
  return (
    <>
       
      <div className='container lg:grid md:grid-cols-1 lg:grid-cols-2 flex items-center lg:gap-10 relative'>
        
      <div className='flex items-start gap-3 mt-10 mb-5'> 
            <PrimaryButton 
              label={"Download CV"}
              icon={"download"}
            />
            <OutlineButton 
              href={"#about"}
              label={"Scroll Down"}
              icon={"arrow_downward"}
            />
          </div>
        
        <div className="flex items-start gap-3 mt-10 mb-5">
          
          <h1>linkdn</h1>
          <h1>github</h1>
          <h1>instagram</h1>
        </div>
        </div>
        
      
    </>
  )
}

export default HeroFooter