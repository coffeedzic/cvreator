import React from 'react'
import { useDispatch } from 'react-redux'
import { setActiveTemplate, setTemplateIsSelected } from '../../../redux/reducers/creator-reducer'

import basicPreview from '../../../templates/basic/basic.png'

import '../styles/SelectTemplate.css'

const SelectTemplate = () => {
  const dispatch = useDispatch()

  const setTemplate = templateName => {
    dispatch(setTemplateIsSelected(true))
    dispatch(setActiveTemplate(templateName))
  }

  return(
    <div className="creator-main">
      <h2 className="heading">Select your template</h2>
      <div className="selector">
        <div className="item">
          <img src={basicPreview} alt="cv" />
          <div className="select-btn" onClick={() => setTemplate('Basic')}>Select</div>
        </div>
      </div>
    </div>
  )
}

export default SelectTemplate