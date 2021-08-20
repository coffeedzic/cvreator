import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setLanguages } from '../../../redux/reducers/cv-reducer'

import languageLevelArray from '../../../helpers/language-level'

import closeImage from '../images/close.svg'

const Languages = () => {
  const [language, setLanguage] = useState('')
  const [level, setLevel] = useState('Native')
  const [reRender, setReRender] = useState(false)

  const languages = useSelector(state => state.cv.languages)

  const dispatch = useDispatch()

  useEffect(() => {

  }, [reRender])

  const handleDelete = index => {
    let oldLanguages = languages
    delete oldLanguages[index]

    let oldLanguagesFiltered = oldLanguages.filter(el => {
      return el != null;
    })

    dispatch(setLanguages(oldLanguagesFiltered))
    localStorage.setItem('languages', JSON.stringify(oldLanguagesFiltered))
    setReRender(!reRender)
  }

  const renderLanguages = () => {
    return(
      <div className="list">
        {languages.map((item, index) => {
          return(
          <div 
            className="item"
            key={index}
          >
            <div className="info">
              <div className="info-prim">
                {item.language}
              </div>
              <div className="info-sec">
                {item.level}
              </div>
            </div>
            <div className="actions">
              <img 
                src={closeImage}
                alt="close"
                onClick={() => handleDelete(index)} />
            </div>
          </div>
        )})}
      </div>
    )
  } 

  const handleInput = event => {
    switch(event.target.name) {
      case 'language':
        setLanguage(event.target.value)
        break
      case 'level':
        setLevel(event.target.value)
        break
      default:
        return
    }
  }

  const handleSubmit = () => {
    let oldLanguages = languages
    let newLanguage = {
      language: language,
      level: level
    }

    setLanguage('')

    oldLanguages.push(newLanguage)
    dispatch(setLanguages(oldLanguages))
    localStorage.setItem('languages', JSON.stringify(oldLanguages))
    setReRender(!reRender)   
  }

  return(
    <div className="form">
      <div className="heading">
        Your languages
      </div>
      {renderLanguages()}
      <div className="input-field">
        <label>Language</label>
        <input 
          type="text"
          name="language"
          placeholder="Name of your language goes here.."
          value={language}
          onChange={handleInput}
        />
      </div>
      <div className="input-field">
        <label>Level</label>
        <select
          name="level"
          onChange={handleInput}
        >
          {languageLevelArray.map((item, index) => {
            return(
              <option
                id={index}
                value={item.value}
              >
              {item.value}
              </option>
            )
          })}
        </select>
      </div>
      <div 
        className="btn"
        onClick={handleSubmit}
      >
        Add language
      </div>  
    </div>
  )
}

export default Languages