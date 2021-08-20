export const setFullname = fullname => (
  {
    type: 'PERSONAL.SET_FULLNAME',
    payload: fullname
  }
)

export const setEmail = email => (
  {
    type: 'PERSONAL.SET_EMAIL',
    payload: email
  }
)

export const setDateOfBirth = dob => (
  {
    type: 'PERSONAL.SET_DATE_OF_BIRTH',
    payload: dob
  }
)

export const setPhone = phone => (
  {
    type: 'PERSONAL.SET_PHONE',
    payload: phone
  }
)

export const setAddress = address => (
  {
    type: 'PERSONAL.SET_ADDRESS',
    payload: address
  }
)

export const setCity = city => (
  {
    type: 'PERSONAL.SET_CITY',
    payload: city
  }
)

export const setCountry = country => (
  {
    type: 'PERSONAL.SET_COUNTRY',
    payload: country
  }
)

export const setZip = zip => (
  {
    type: 'PERSONAL.SET_ZIP',
    payload: zip
  }
)

export const setPicture = picture => (
  {
    type: 'PERSONAL.SET_PICTURE',
    payload: picture
  }
)

const initialState = {
  fullname: localStorage.getItem('fullname') ? localStorage.getItem('fullname') : '',
  email: localStorage.getItem('email') ? localStorage.getItem('email') : '',
  dateOfBirth: localStorage.getItem('dateOfBirth') ? localStorage.getItem('dateOfBirth') : '',
  phone: localStorage.getItem('phone') ? localStorage.getItem('phone') : '',
  address: localStorage.getItem('address') ? localStorage.getItem('address') : '',
  city: localStorage.getItem('city') ? localStorage.getItem('city') : '',
  country: localStorage.getItem('country') ? localStorage.getItem('country') : '',
  zip: localStorage.getItem('zip') ? localStorage.getItem('zip') : '',
  picture: localStorage.getItem('picture') ? localStorage.getItem('picture') : ''
}

const personalReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'PERSONAL.SET_FULLNAME':
      return {
        ...state,
        fullname: action.payload
      }
    case 'PERSONAL.SET_EMAIL':
      return {
        ...state,
        email: action.payload
      }
    case 'PERSONAL.SET_DATE_OF_BIRTH':
      return {
        ...state,
        dateOfBirth: action.payload
      }
    case 'PERSONAL.SET_PHONE':
      return {
        ...state,
        phone: action.payload
      }
    case 'PERSONAL.SET_ADDRESS':
      return {
        ...state,
        address: action.payload
      }
    case 'PERSONAL.SET_CITY':
      return {
        ...state,
        city: action.payload
      }
    case 'PERSONAL.SET_COUNTRY':
      return {
        ...state,
        country: action.payload
      }
    case 'PERSONAL.SET_ZIP':
      return {
        ...state,
        zip: action.payload
      }
    case 'PERSONAL.SET_PICTURE':
      return {
        ...state,
        picture: action.payload
      }
    default:
      return state
  }
}

export default personalReducer