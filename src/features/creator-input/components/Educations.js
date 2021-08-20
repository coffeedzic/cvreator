import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setEducations } from '../../../redux/reducers/cv-reducer'

import startYearArray from '../../../helpers/start-years'
import endYearArray from '../../../helpers/end-years'

import closeImage from '../images/close.svg'

const Educations = () => {
  const [school, setSchool] = useState('')
  const [degree, setDegree] = useState('')
  const [startYear, setStartYear] = useState('2021')
  const [endYear, setEndYear] = useState('Today')
  const [reRender, setReRender] = useState(false)

  const educations = useSelector(state => state.cv.educations)

  const dispatch = useDispatch()

  useEffect(() => {

  }, [reRender])

  const handleDelete = index => {
    let oldEducations = educations
    delete oldEducations[index]

    let oldEducationsFiltered = oldEducations.filter(el => {
      return el != null;
    })

    dispatch(setEducations(oldEducationsFiltered))
    localStorage.setItem('educations', JSON.stringify(oldEducationsFiltered))
    setReRender(!reRender)
  }

  const renderEducations = () => {
    return(
      <div className="list">
        {educations.map((item, index) => {
          return(
          <div 
            className="item"
            key={index}
          >
            <div className="info">
              <div className="info-prim">
                {item.school + ', ' + item.degree}
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
      case 'degree':
        setDegree(event.target.value)
        break
      case 'school':
        setSchool(event.target.value)
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
    let oldEducations = educations
    let education = {
      degree: degree,
      school: school,
      startYear: startYear,
      endYear: endYear
    }

    setDegree('')
    setSchool('')
    setStartYear('2021')
    setEndYear('Today')

    oldEducations.push(education)
    dispatch(setEducations(oldEducations))
    localStorage.setItem('educations', JSON.stringify(oldEducations))
    setReRender(!reRender)   
  }

  return(
    <div className="form">
      <div className="heading">
        Your educations
      </div>
      {renderEducations()}
      <div className="input-field">
        <label>Degree / Course</label>
        <input 
          type="text"
          name="degree"
          value={degree}
          onChange={handleInput}
        />
      </div>
      <div className="input-field">
        <label>School / University</label>
        <input 
          type="text"
          name="school"
          value={school}
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
        Add education
      </div>  
    </div>
  )
}

export default Educations