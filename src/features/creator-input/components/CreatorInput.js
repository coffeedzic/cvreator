import React from 'react'
import { useSelector } from 'react-redux'

import CreatorMenu from './CreatorMenu'
import Personal from './Personal'
import Picture from './Picture'
import Experiences from './Experiences'
import Educations from './Educations'
import Certificates from './Certificates'
import Languages from './Languages'
import Skills from './Skills'
import Hobbies from './Hobbies'
import Settings from './Settings'

import '../styles/CreatorInput.css'

const CreatorInput = () => {
  const activeMenu = useSelector(state => state.creator.activeMenu)
  
  const renderInputComponents = () => {
    switch(activeMenu) {
      case 'personal':
        return <Personal />
      case 'picture':
        return <Picture />
      case 'experiences':
        return <Experiences />
      case 'educations':
        return <Educations />
      case 'certificates':
        return <Certificates />
      case 'languages':
        return <Languages />
      case 'skills':
        return <Skills />
      case 'hobbies':
        return <Hobbies />
      case 'settings':
        return <Settings />
      default:
        return <Personal />      
    }
  }

  return(
    <div className="creator-input">
      <CreatorMenu />
      {renderInputComponents()}
    </div>
  )
}

export default CreatorInput