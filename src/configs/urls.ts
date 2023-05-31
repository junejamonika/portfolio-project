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
    GET_VALUES : `api/values`,
    DELETE_VALUE: `api/delete-value`,
    VALUE: `api/value`,
  },
}

export default URLS;