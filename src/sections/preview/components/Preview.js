import React from 'react'
import { useSelector } from 'react-redux'

import Basic from '../../../templates/basic/Basic'

import '../styles/Preview.css'

const Preview = () => {
  const templateIsSelected = useSelector(state => state.creator.templateIsSelected)
  const activeTemplate = useSelector(state => state.creator.activeTemplate)

  const renderTemplate = () => {
    if(templateIsSelected) {
      switch(activeTemplate) {
        case 'Basic':
          return <Basic />
        default:
          return
      }
    } else {
      return
    }
  }

  return(
    <div className="preview">
      {renderTemplate()}
    </div>
  )
}

export default Preview