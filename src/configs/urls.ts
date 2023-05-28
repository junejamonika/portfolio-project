// const DOMAIN = 'http://localhost:8082/';
const DOMAIN = 'https://smeet-makwana.onrender.com/';

const BASE = `${DOMAIN}api/`;

// URLS
const URLS = {
  // USERS
  USERS: {
    GET_USERS : `${BASE}users`,
    DELETE_USER: `${BASE}users/`,
    GET_USER_DETAIL: `${BASE}users/`,
    UPDATE_USER: `${BASE}users/updateProfile/`
  },
   // AUTH
   AUTH: {
    SIGNIN : `${BASE}auth/signin`,
  },
  // FAQ
  FAQ: {
    GET_FAQS : `${BASE}faqs`,
    DELETE_FAQ: `${BASE}delete-faq`,
    FAQ: `${BASE}faq`,
  },
  // VALUES
  VALUES: {
    GET_VALUES : `${BASE}values`,
    DELETE_VALUE: `${BASE}delete-value`,
    VALUE: `${BASE}value`,
  },
}

export default URLS;