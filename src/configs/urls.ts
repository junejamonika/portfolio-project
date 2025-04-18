// URLS
const URLS = {
  // USERS
  USERS: {
    GET_USERS : `api/users`,
    DELETE_USER: `api/users/`,
    GET_USER_DETAIL: `api/users/`,
    UPDATE_USER: `api/users/updateProfile/`
  },
   // AUTH
   AUTH: {
    SIGNIN : `api/auth/signin`,
  },
  // FAQ
  FAQ: {
    GET_FAQS : `/api/faqs`,
    DELETE_FAQ: `/api/delete-faq`,
    FAQ: `/api/faq`,
  },
  // VALUES
  VALUES: {
    GET_VALUES : `/api/values`,
    DELETE_VALUE: `/api/delete-value`,
    VALUE: `/api/value`,
  },
  // ABOUT
  ABOUT: {
    ABOUT_ME : `/api/about-me`,
  },
  // TOOLS
  TOOLS: {
    GET_TOOLS : `/api/tools`,
    DELETE_TOOL: `/api/delete-tool`,
    TOOL: `/api/tool`,
  },

  // PASSION PROJECTS
  PROJECTS: {
    GET_PROJECTS : `/api/projects`,
    DELETE_PROJECT: `/api/delete-project`,
    PROJECT: `/api/project`,
  },

  // WORK EXPERIENCE
  EXPERIENCE: {
    GET_EXPERIENCE : `/api/experiences`,
    DELETE_EXPERIENCE: `/api/delete-experience`,
    EXPERIENCE: `/api/experience`,
  },
  // WORK
  WORK: {
    GET_WORK : `/api/work`,
    DELETE_WORK: `/api/delete-work`,
    WORK: `/api/work`,
  },
  CONTACT : {
    GET_CONTACT : `/api/contact`,
    CONTACT: `/api/contact`,
    DELETE_CONTACT: `/api/delete-contact`,
  },
  //SERVICE
  SERVICE : {
    GET_SERVICES : `/api/services`,
    SERVICE: `/api/service`,
    DELETE_SERVICE: `/api/delete-service`,
  }
}

export default URLS;