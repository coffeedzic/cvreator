import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setCertificates } from '../../../redux/reducers/cv-reducer'

import startYearArray from '../../../helpers/start-years'

import closeImage from '../images/close.svg'

const Certificates = () => {
  const [certificate, setCertificate] = useState('')
  const [year, setYear] = useState('2021')
  const [reRender, setReRender] = useState(false)

  const certificates = useSelector(state => state.cv.certificates)

  const dispatch = useDispatch()

  useEffect(() => {

  }, [reRender])

  const handleDelete = index => {
    let oldCertificates = certificates
    delete oldCertificates[index]

    let oldCertificatesFiltered = oldCertificates.filter(el => {
      return el != null;
    })

    dispatch(setCertificates(oldCertificatesFiltered))
    localStorage.setItem('certificates', JSON.stringify(oldCertificatesFiltered))
    setReRender(!reRender)
  }

  const renderCertificates = () => {
    return(
      <div className="list">
        {certificates.map((item, index) => {
          return(
          <div 
            className="item"
            key={index}
          >
            <div className="info">
              <div className="info-prim">
                {item.certificate}
              </div>
              <div className="info-sec">
                {item.year}
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
      case 'certificate':
        setCertificate(event.target.value)
        break
      case 'year':
        setYear(event.target.value)
        break
      default:
        return
    }
  }

  const handleSubmit = () => {
    let oldCertificates = certificates
    let newCertificate = {
      certificate: certificate,
      year: year
    }

    setCertificate('')
    setYear('2021')

    oldCertificates.push(newCertificate)
    dispatch(setCertificates(oldCertificates))
    localStorage.setItem('certificates', JSON.stringify(oldCertificates))
    setReRender(!reRender)   
  }

  return(
    <div className="form">
      <div className="heading">
        Your certificates
      </div>
      {renderCertificates()}
      <div className="input-field">
        <label>Certificate</label>
        <input 
          type="text"
          name="certificate"
          placeholder="Name of your certificate goes here.."
          value={certificate}
          onChange={handleInput}
        />
      </div>
      <div className="input-field">
        <label>Year</label>
        <select
          name="year"
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
      <div 
        className="btn"
        onClick={handleSubmit}
      >
        Add certificate
      </div>  
    </div>
  )
}

export default Certificates