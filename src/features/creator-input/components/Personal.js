import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  setFullname,
  setEmail,
  setDateOfBirth,
  setPhone,
  setAddress,
  setCity,
  setCountry,
  setZip
} from '../../../redux/reducers/personal-reducer'

import '../styles/CreatorForm.css'

const Personal = () => {
  const personal = useSelector(state => state.personal)

  const dispatch = useDispatch()

  const handleInput = event => {
    const {name, value} = event.target
    switch(name) {
      case 'fullname':
        dispatch(setFullname(value))
        localStorage.setItem('fullname', value)
        break
      case 'email':
        dispatch(setEmail(value))
        localStorage.setItem('email', value)
        break
      case 'dateOfBirth':
        dispatch(setDateOfBirth(value))
        localStorage.setItem('dateOfBirth', value)
        break
      case 'phone':
        dispatch(setPhone(value))
        localStorage.setItem('phone', value)
        break
      case 'address':
        dispatch(setAddress(value))
        localStorage.setItem('address', value)
        break
      case 'city':
        dispatch(setCity(value))
        localStorage.setItem('city', value)
        break
      case 'country':
        dispatch(setCountry(value))
        localStorage.setItem('country', value)
        break
      case 'zip':
        dispatch(setZip(value))
        localStorage.setItem('zip', value)
        break
      default:
        return
    }
  }

  return(
    <div className="form">
      <div className="heading">
        Personal informations
      </div>
      <div className="input-field">
        <label>Full name</label>
        <input 
          type="text"
          name="fullname"
          value={personal.fullname}
          onChange={handleInput}
        />
      </div>
      <div className="input-field">
        <label>Email</label>
        <input 
          type="text"
          name="email"
          value={personal.email}
          onChange={handleInput}
        />
      </div>
      <div className="input-field">
        <label>Date of birth</label>
        <input 
          type="date"
          name="dateOfBirth"
          value={personal.dateOfBirth}
          onChange={handleInput}
        />
      </div>
      <div className="input-field">
        <label>Phone</label>
        <input 
          type="text"
          name="phone"
          value={personal.phone}
          onChange={handleInput}
        />
      </div>
      <div className="input-field">
        <label>Address</label>
        <input 
          type="text"
          name="address"
          value={personal.address}
          onChange={handleInput}
        />
      </div>
      <div className="input-field">
        <label>City</label>
        <input 
          type="text"
          name="city"
          value={personal.city}
          onChange={handleInput}
        />
      </div>
      <div className="input-field">
        <label>Country</label>
        <input 
          type="text"
          name="country"
          value={personal.country}
          onChange={handleInput}
        />
      </div>
      <div className="input-field">
        <label>Zip code</label>
        <input 
          type="text"
          name="zip"
          value={personal.zip}
          onChange={handleInput}
        />
      </div>
    </div>
  )
}

export default Personal