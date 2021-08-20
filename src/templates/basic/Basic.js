import React from 'react'
import { useSelector } from 'react-redux'

import './Basic.css'

const Basic = () => {
  const personal = useSelector(state => state.personal)
  const cv = useSelector(state => state.cv)

  const renderPicture = () => {
    if(personal.picture) {
      return(
        <img src={personal.picture} alt='photo' />
      )
    }
  }

  const renderDate = () => {
    if(personal.dateOfBirth) {
      const dateArray = personal.dateOfBirth.split('-')
      const displayDate = new Date(dateArray[0], dateArray[1], dateArray[2])
      let year = displayDate.getFullYear()
      let month = displayDate.getMonth()
      let day = displayDate.getUTCDate() + 1
      return day + '/' + month + '/' + year
    } else {
      return null
    }
  }

  const renderAddress = () => {
    const renderZipCity = () => {
      if(personal.zip && personal.city) {
        return personal.zip + ' ' + personal.city
      } else if(personal.zip) {
        return personal.zip
      } else if(personal.city) {
        return personal.city
      } else {
        return null
      }
    }

    const renderCountry = () => {
      if(renderZipCity && personal.country) {
        return ', ' + personal.country
      } else {
        return personal.country
      }
    }

    return(
      <p>
        {renderZipCity()}
        {renderCountry()}
      </p>
    )
  }

  const renderHeading = () => {
    return(
      <div className="cv-heading">
        <div className="cv-heading-image">
          {renderPicture()}
        </div>
        <div className="cv-heading-info">
          <h2>{personal.fullname}</h2>
          {renderDate()}
          <p>{personal.email}</p>
          <p>{personal.phone}</p>
          <p>{personal.address}</p>
          {renderAddress()}            
        </div>
      </div>
    )
  }

  const renderExperiences = () => {
    if(cv.experiences.length > 0) {
      return(
        <div className="cv-main-list">
          <div className="heading">Experiences</div>
          {cv.experiences.map((item, index) => {
            return(
              <div 
                className="item"
                key={index}
              >
                <div className="main">{item.position + ' at ' + item.company}</div>
                <div className="second">{item.startYear + ' - ' + item.endYear}</div>
              </div>
            )
          })}
        </div>
      )
    }    
  }

  const renderEducations = () => {
    if(cv.educations.length > 0) {
      return(
        <div className="cv-main-list">
          <div className="heading">Educations</div>
          {cv.educations.map((item, index) => {
            return(
              <div 
                className="item"
                key={index}
              >
                <div className="main">{item.degree + ' at ' + item.school}</div>
                <div className="second">{item.startYear + ' - ' + item.endYear}</div>
              </div>
            )
          })}
        </div>
      )
    }
  }

  const renderCertificates = () => {
    if(cv.certificates.length > 0) {
      return(
        <div className="cv-main-list">
          <div className="heading">Certificates</div>
          {cv.certificates.map((item, index) => {
            return(
              <div 
                className="item"
                key={index}
              >
                <div className="main">{item.certificate}</div>
                <div className="second">{item.year}</div>
              </div>
            )
          })}
        </div>
      )
    }
  }

  const renderLanguages = () => {
    if(cv.languages.length > 0) {
      return(
        <div className="cv-main-list">
          <div className="heading">Languages</div>
          {cv.languages.map((item, index) => {
            return(
              <div 
                className="item"
                key={index}
              >
                <div className="main">{item.language}</div>
                <div className="second">{item.level}</div>
              </div>
            )
          })}
        </div>
      )
    }
  }

  const renderSkills = () => {
    if(cv.skills.length > 0) {
      return(
        <div className="cv-main-list">
          <div className="heading">Skills</div>
          {cv.skills.map((item, index) => {
            return(
              <div 
                className="item"
                key={index}
              >
                <div className="main">{item.skill}</div>
              </div>
            )
          })}
        </div>
      )
    }
  }

  const renderHobbies = () => {
    if(cv.hobbies.length > 0) {
      return(
        <div className="cv-main-list">
          <div className="heading">Hobbies</div>
          {cv.hobbies.map((item, index) => {
            return(
              <div 
                className="item"
                key={index}
              >
                <div className="main">{item.hobby}</div>
              </div>
            )
          })}
        </div>
      )
    }
  }
  
  const renderFirst = () => {
    if(cv.experiences.length > 0 || cv.educations.length > 0) {
      return(
        <div className="side-by-side">
          {renderExperiences()}
          {renderEducations()}
        </div>
      )
    }
  }

  const renderSecond = () => {
    if(cv.certificates.length > 0 || cv.languages.length > 0) {
      return(
        <div className="side-by-side">
          {renderCertificates()}
          {renderLanguages()}
        </div>
      )
    }
  }

  const renderThird = () => {
    if(cv.skills.length > 0 || cv.hobbies.length > 0) {
      return(
        <div className="side-by-side">
          {renderSkills()}
          {renderHobbies()}
        </div>
      )
    }
  }

  return(
    <div className="paper">
      <div className="cv">
        {renderHeading()}
        {renderFirst()}
        {renderSecond()}
        {renderThird()}
      </div>
    </div>
  )
}

export default Basic