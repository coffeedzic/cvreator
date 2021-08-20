import React from 'react'
import { useSelector } from 'react-redux'

import Header from '../../../features/header/components/Header'
import SelectTemplate from '../../../features/select-template/components/SelectTemplate'
import CreatorInput from '../../../features/creator-input/components/CreatorInput'

import '../styles/Creator.css'

const Creator = () => {
  const templateIsSelected = useSelector(state => state.creator.templateIsSelected)

  const renderCreator = () => {
    if(templateIsSelected) {
      return(
        <CreatorInput />
      )
    } else {
      return(
        <SelectTemplate />
      )
    }
  }
  
  return(
    <div className="creator">
      <Header />
      {renderCreator()}
    </div>
  )
}

export default Creator