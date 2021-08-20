import React from 'react'
import { useDispatch } from 'react-redux'
import { setTemplateIsSelected } from '../../../redux/reducers/creator-reducer'

import '../styles/FloatMenu.css'

const FloatMenu = () => {
  const dispatch = useDispatch()
  const save = () => {
    window.print()
  }

  return(
    <div className="float-menu">
      <div 
        className="float-menu-btn"
        onClick={save}
      >
        Save PDF
      </div>
      <div 
        className="float-menu-btn"
        onClick={() => dispatch(setTemplateIsSelected(false))}
      >
        Change template
      </div>
    </div>
  )  
}

export default FloatMenu