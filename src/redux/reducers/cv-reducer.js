export const setExperiences = experiences => (
  {
    type: 'CV.SET_EXPERIENCES',
    payload: experiences
  }
)

export const setEducations = educations => (
  {
    type: 'CV.SET_EDUCATIONS',
    payload: educations
  }
)

export const setCertificates = certificates => (
  {
    type: 'CV.SET_CERTIFICATES',
    payload: certificates
  }
)

export const setLanguages = languages => (
  {
    type: 'CV.SET_LANGUAGES',
    payload: languages
  }
)

export const setSkills = skills => (
  {
    type: 'CV.SET_SKILLS',
    payload: skills
  }
)

export const setHobbies = hobbies => (
  {
    type: 'CV.SET_HOBBIES',
    payload: hobbies
  }
)



const initialState = {
  experiences: localStorage.getItem('experiences') ? JSON.parse(localStorage.getItem('experiences')) : [],
  educations: localStorage.getItem('educations') ? JSON.parse(localStorage.getItem('educations')) : [],
  certificates: localStorage.getItem('certificates') ? JSON.parse(localStorage.getItem('certificates')) : [],
  languages: localStorage.getItem('languages') ? JSON.parse(localStorage.getItem('languages')) : [],
  skills: localStorage.getItem('skills') ? JSON.parse(localStorage.getItem('skills')) : [],
  hobbies: localStorage.getItem('hobbies') ? JSON.parse(localStorage.getItem('hobbies')) : []  
}

const cvReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'CV.SET_EXPERIENCES':
      return {
        ...state,
        experiences: action.payload,
      }
    case 'CV.SET_EDUCATIONS':
      return {
        ...state,
        educations: action.payload,
      }
    case 'CV.SET_CERTIFICATES':
      return {
        ...state,
        certificates: action.payload,
      }
    case 'CV.SET_LANGUAGES':
      return {
        ...state,
        languages: action.payload,
      }
    case 'CV.SET_SKILLS':
      return {
        ...state,
        skills: action.payload,
      }
    case 'CV.SET_HOBBIES':
      return {
        ...state,
        hobbies: action.payload,
      }    
    default:
      return state
  }
}

export default cvReducer