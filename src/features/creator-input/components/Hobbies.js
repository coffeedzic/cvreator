import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setHobbies } from '../../../redux/reducers/cv-reducer'

import closeImage from '../images/close.svg'

const Hobbies = () => {
  const [hobby, setHobby] = useState('')
  const [reRender, setReRender] = useState(false)

  const hobbies = useSelector(state => state.cv.hobbies)

  const dispatch = useDispatch()

  useEffect(() => {

  }, [reRender])

  const handleDelete = index => {
    let oldHobbies = hobbies
    delete oldHobbies[index]

    let oldHobbiesFiltered = oldHobbies.filter(el => {
      return el != null;
    })

    dispatch(setHobbies(oldHobbiesFiltered))
    localStorage.setItem('hobbies', JSON.stringify(oldHobbiesFiltered))
    setReRender(!reRender)
  }

  const renderHobbies = () => {
    return(
      <div className="list">
        {hobbies.map((item, index) => {
          return(
          <div 
            className="item"
            key={index}
          >
            <div className="info">
              <div className="info-prim">
                {item.hobby}
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
      case 'hobby':
        setHobby(event.target.value)
        break
      default:
        return
    }
  }

  const handleSubmit = () => {
    let oldHobbies = hobbies
    let newHobbies = {
      hobby: hobby
    }

    setHobby('')

    oldHobbies.push(newHobbies)
    dispatch(setHobbies(oldHobbies))
    localStorage.setItem('hobbies', JSON.stringify(oldHobbies))
    setReRender(!reRender)   
  }

  return(
    <div className="form">
      <div className="heading">
        Your hobbies
      </div>
      {renderHobbies()}
      <div className="input-field">
        <label>Hobby</label>
        <input 
          type="text"
          name="hobby"
          value={hobby}
          onChange={handleInput}
        />
      </div>
      <div 
        className="btn"
        onClick={handleSubmit}
      >
        Add hobby
      </div>  
    </div>
  )
}

export default Hobbies