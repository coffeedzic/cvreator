import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  setFontFamily,
  setFontColor,
  setBorderColor,
  setBackgroundColor
} from '../../../redux/reducers/settings-reducer'

import fontFamilyArray from '../../../helpers/font-family'

const Settings = () => {
  const settings = useSelector(state => state.settings)
  const dispatch = useDispatch()

  const handleInput = event => {
    switch(event.target.name) {
      case 'fontFamily':
        dispatch(setFontFamily(event.target.value))
        document.getElementById('root').style.setProperty('--cv-font-family', event.target.value)
        break
      case 'fontColor':
        dispatch(setFontColor(event.target.value))
        document.getElementById('root').style.setProperty('--cv-font-color', event.target.value)
        break
      case 'borderColor':
        dispatch(setBorderColor(event.target.value))
        document.getElementById('root').style.setProperty('--cv-border-color', event.target.value)
        break
      case 'backgroundColor':
        dispatch(setBackgroundColor(event.target.value))
        document.getElementById('root').style.setProperty('--cv-background-color', event.target.value)
        break
      default:
        return
    }
  }

  return(
    <div className="form">
      <div className="heading">
        Settings
      </div>
      <div className="input-field">
        <label>Font family</label>
        <select
          name="fontFamily"
          onChange={handleInput}
        >
          {fontFamilyArray.map((item, index) => {
            return(
              <option
                id={index}
                value={item.value}
              >
              {item.name}
              </option>
            )
          })}
        </select>
      </div>
      <div className="input-field">
        <label>Font color</label>
        <input
          type="color"
          name="fontColor"
          value={settings.fontColor}
          onChange={handleInput}
        />
      </div>
      <div className="input-field">
        <label>Border color</label>
        <input
          type="color"
          name="borderColor"
          value={settings.borderColor}
          onChange={handleInput}
        />
      </div>
      <div className="input-field">
        <label>Background color</label>
        <input
          type="color"
          name="backgroundColor"
          value={settings.backgroundColor}
          onChange={handleInput}
        />
      </div>
    </div>
  )
}

export default Settings