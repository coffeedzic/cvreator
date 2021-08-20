import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setExperiences } from '../../../redux/reducers/cv-reducer'

import startYearArray from '../../../helpers/start-years'
import endYearArray from '../../../helpers/end-years'

import closeImage from '../images/close.svg'

const Experiences = () => {
  const [position, setPosition] = useState('')
  const [company, setCompany] = useState('')
  const [startYear, setStartYear] = useState('2021')
  const [endYear, setEndYear] = useState('Today')
  const [reRender, setReRender] = useState(false)

  const experiences = useSelector(state => state.cv.experiences)

  const dispatch = useDispatch()

  useEffect(() => {

  }, [reRender])

  const handleDelete = index => {
    let oldExperiences = experiences
    delete oldExperiences[index]

    let oldExperiencesFiltered = oldExperiences.filter(el => {
      return el != null;
    })

    dispatch(setExperiences(oldExperiencesFiltered))
    localStorage.setItem('experiences', JSON.stringify(oldExperiencesFiltered))
    setReRender(!reRender)
  }

  const renderExperiences = () => {
    return(
      <div className="list">
        {experiences.map((item, index) => {
          return(
          <div 
            className="item"
            key={index}
          >
            <div className="info">
              <div className="info-prim">
                {item.position + ' at ' + item.company}
              </div>
              <div className="info-sec">
                {item.startYear + ' - ' + item.endYear}
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
      case 'position':
        setPosition(event.target.value)
        break
      case 'company':
        setCompany(event.target.value)
        break
      case 'startYear':
        setStartYear(event.target.value)
        break
      case 'endYear':
        setEndYear(event.target.value)
        break
      default:
        return
    }
  }

  const handleSubmit = () => {
    let oldExperiences = experiences
    let experience = {
      position: position,
      company: company,
      startYear: startYear,
      endYear: endYear
    }

    setPosition('')
    setCompany('')
    setStartYear('2021')
    setEndYear('Today')

    oldExperiences.push(experience)
    dispatch(setExperiences(oldExperiences))
    localStorage.setItem('experiences', JSON.stringify(oldExperiences))
    setReRender(!reRender)   
  }

  return(
    <div className="form">
      <div className="heading">
        Your experiences
      </div>
      {renderExperiences()}
      <div className="input-field">
        <label>Position</label>
        <input 
          type="text"
          name="position"
          value={position}
          onChange={handleInput}
        />
      </div>
      <div className="input-field">
        <label>Company</label>
        <input 
          type="text"
          name="company"
          value={company}
          onChange={handleInput}
        />
      </div>
      <div className="input-field">
        <label>Start year</label>
        <select
          name="startYear"
          onChange={handleInput}
        >
          {startYearArray.map((item, index) => {
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
      <div className="input-field">
        <label>End year</label>
        <select
          name="endYear"
          onChange={handleInput}          
        >
          {endYearArray.map((item, index) => {
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
        Add experience
      </div>  
    </div>
  )
}

export default Experiences