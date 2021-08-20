import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setSkills } from '../../../redux/reducers/cv-reducer'

import closeImage from '../images/close.svg'

const Skills = () => {
  const [skill, setSkill] = useState('')
  const [reRender, setReRender] = useState(false)

  const skills = useSelector(state => state.cv.skills)

  const dispatch = useDispatch()

  useEffect(() => {

  }, [reRender])

  const handleDelete = index => {
    let oldSkills = skills
    delete oldSkills[index]

    let oldSkillsFiltered = oldSkills.filter(el => {
      return el != null;
    })

    dispatch(setSkills(oldSkillsFiltered))
    localStorage.setItem('skills', JSON.stringify(oldSkillsFiltered))
    setReRender(!reRender)
  }

  const renderSkills = () => {
    return(
      <div className="list">
        {skills.map((item, index) => {
          return(
          <div 
            className="item"
            key={index}
          >
            <div className="info">
              <div className="info-prim">
                {item.skill}
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
      case 'skill':
        setSkill(event.target.value)
        break
      default:
        return
    }
  }

  const handleSubmit = () => {
    let oldSkills = skills
    let newSkills = {
      skill: skill
    }

    setSkill('')

    oldSkills.push(newSkills)
    dispatch(setSkills(oldSkills))
    localStorage.setItem('skills', JSON.stringify(oldSkills))
    setReRender(!reRender)   
  }

  return(
    <div className="form">
      <div className="heading">
        Your skills
      </div>
      {renderSkills()}
      <div className="input-field">
        <label>Skill</label>
        <input 
          type="text"
          name="skill"
          value={skill}
          onChange={handleInput}
        />
      </div>
      <div 
        className="btn"
        onClick={handleSubmit}
      >
        Add skill
      </div>  
    </div>
  )
}

export default Skills