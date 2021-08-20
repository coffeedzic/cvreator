import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { setPicture } from '../../../redux/reducers/personal-reducer'

import defaultPicture from '../images/default.jpg'
import uploadIcon from '../images/camera.svg'
import '../styles/CreatorForm.css'

const Picture = () => {
  const picture = useSelector(state => state.personal.picture)

  const dispatch = useDispatch()

  const handleImageUploadClick = () => {
    document.getElementById('hidden-upload').click()
  }

  const handleImageUpload = event => {    
    let reader = new FileReader()
    reader.readAsDataURL(event.target.files[0])

    reader.addEventListener('load', () => {
      dispatch(setPicture(reader.result))
      localStorage.setItem('picture', reader.result)
    })
  } 

  return(
    <div className="form">
      <div className="heading">
        Upload your picture
      </div>
      <div className="picture-wrapper">
        <div className="picture-preview-wrapper">
          <img 
            src={picture ? picture : defaultPicture}
            alt="preview"
            className="picture-preview"
          />
          <div className="upload-icon">
            <img
              src={uploadIcon}
              alt="upload"
              onClick={handleImageUploadClick}
            />
          </div>          
        </div>
        <div className="picture-upload">
          <input
            id="hidden-upload"
            type="file"
            onChange={handleImageUpload}
          />
        </div>
      </div>
    </div>
  )
}

export default Picture