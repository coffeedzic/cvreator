export const setActiveMenu = activeMenu => (
  {
    type: 'CREATOR.SET_ACTIVE_MENU',
    payload: activeMenu
  }
)

export const setActiveTemplate = bool => (
  {
    type: 'CREATOR.SET_ACTIVE_TEMPLATE',
    payload: bool
  }
)

export const setTemplateIsSelected = bool => (
  {
    type: 'CREATOR.SET_TEMPLATE_IS_SELECTED',
    payload: bool
  }
)

const initialState = {
  activeMenu: 'personal',
  activeTemplate: false,
  templateIsSelected: false
}

const creatorReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'CREATOR.SET_ACTIVE_MENU':
      return {
        ...state,
        activeMenu: action.payload
      }
    case 'CREATOR.SET_ACTIVE_TEMPLATE':
      return {
        ...state,
        activeTemplate: action.payload
      }
    case 'CREATOR.SET_TEMPLATE_IS_SELECTED':
      return {
        ...state,
        templateIsSelected: action.payload
      }
    default:
      return state
  }
}

export default creatorReducer