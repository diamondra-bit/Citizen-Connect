import React from 'react'
import style from './CubeAnimated.module.css'

const CubeAnimated = () => {
  return (
    <div className={style.black}>
   <div className={style.cube}>
        <div className={style.top}></div>
       <div>
      <span style={{'--i':0}}></span>
      <span style={{'--i':1}}></span>
      <span style={{'--i':2}}></span>
      <span style={{'--i':3}}></span>
       </div>
    </div>
    </div>
 
  )
}

export default CubeAnimated
