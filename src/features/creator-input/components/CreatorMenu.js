import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setActiveMenu } from '../../../redux/reducers/creator-reducer'

import '../styles/CreatorMenu.css'

const CreatorMenu = () => {
  const activeMenu = useSelector(state => state.creator.activeMenu)
  const dispatch = useDispatch()

  const renderMenu = () => {
    const menu = [
      {
        name: 'personal',
        onClick: () => {
          dispatch(setActiveMenu('personal'))
        }
      },
      {
        name: 'picture',
        onClick: () => {
          dispatch(setActiveMenu('picture'))
        }
      },
      {
        name: 'experiences',
        onClick: () => {
          dispatch(setActiveMenu('experiences'))
        }
      },
      {
        name: 'educations',
        onClick: () => {
          dispatch(setActiveMenu('educations'))
        }
      },
      {
        name: 'certificates',
        onClick: () => {
          dispatch(setActiveMenu('certificates'))
        }
      },
      {
        name: 'languages',
        onClick: () => {
          dispatch(setActiveMenu('languages'))
        }
      },
      {
        name: 'skills',
        onClick: () => {
          dispatch(setActiveMenu('skills'))
        }
      },
      {
        name: 'hobbies',
        onClick: () => {
          dispatch(setActiveMenu('hobbies'))
        }
      },
      {
        name: 'settings',
        onClick: () => {
          dispatch(setActiveMenu('settings'))
        }
      }
    ]

    return menu.map((item, index) => {
      if(activeMenu === item.name) {
        return(
          <div
            className="item active"
            key={index}
            onClick={item.onClick}
          >
            {item.name}
          </div>
        )
      } else {
        return(
          <div
            className="item"
            key={index}
            onClick={item.onClick}
          >
            {item.name}
          </div>
        )
      }      
    })
  }
  
  return(
    <div className="creator-menu">
      {renderMenu()}
    </div>
  )
}

export default CreatorMenu