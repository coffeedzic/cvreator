export const setFontFamily = font => (
  {
    type: 'SETTINGS.SET_FONT_FAMILY',
    payload: font
  }
)

export const setFontColor = color => (
  {
    type: 'SETTINGS.SET_FONT_COLOR',
    payload: color
  }
)

export const setBorderColor = color => (
  {
    type: 'SETTINGS.SET_BORDER_COLOR',
    payload: color
  }
)

export const setBackgroundColor = color => (
  {
    type: 'SETTINGS.SET_BACKGROUND_COLOR',
    payload: color
  }
)

const initialState = {
  fontFamily: '',
  fontColor: '#3b4d56',
  borderColor: '#333333',
  backgroundColor: '#f4f4f4'
}

const settingsReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'SETTINGS.SET_FONT_FAMILY':
      return {
        ...state,
        fontFamily: action.payload
      }
    case 'SETTINGS.SET_FONT_COLOR':
      return {
        ...state,
        fontColor: action.payload
      }
    case 'SETTINGS.SET_BORDER_COLOR':
      return {
        ...state,
        borderColor: action.payload
      }
    case 'SETTINGS.SET_BACKGROUND_COLOR':
      return {
        ...state,
        backgroundColor: action.payload
      }
    default:
      return state
  }
}

export default settingsReducer