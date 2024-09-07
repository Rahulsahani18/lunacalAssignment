import React from 'react'
import LeftBox from './LeftBox'
import RightBox from './RightBox'


const MainContainer = () => {
  return (
    <>
    <div className='container-fluid'>
    <div className='row mt-1'>
      <LeftBox></LeftBox>
      <RightBox></RightBox>
      
    </div>
    </div>
    </>
  )
}

export default MainContainer