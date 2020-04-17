import { unix } from "moment";
const API_KEY = process.env.REACT_APP_API_KEY;

const API_ROOT = 'https://warm-earth-33239.herokuapp.com/api/v1';

const token = () => localStorage.getItem("token");

const headers = () => {
  return {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: token()
  };
};

const getConstellations = () => {
  return fetch('https://warm-earth-33239.herokuapp.com/api/v1/constellations', { headers: headers() }).then(res =>
    res.json()
  );
};

const getCalendars = () => {
  return fetch(`${API_ROOT}/calendars`, { headers: headers() })
  .then(res =>
    res.json())
};

const getPhenomena = () => {
    return fetch(`${API_ROOT}/sky_events`, {headers: headers() })
    .then(res => res.json())
}

const getMoonPhase = (unixTimestamp) => {
    return fetch(`http://api.farmsense.net/v1/moonphases/?d=${unixTimestamp}`)
    .then(res => res.json())
}

const login = data => {
  return fetch(`${API_ROOT}/login`, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify( {auth: data})
  }).then(res => res.json());
};

const getCurrentUser = () => {
  return fetch(`${API_ROOT}/current_user`, {
    headers: headers()
  }).then(res => {
    return res.json();
  });
};

const getEvents = () => {
  return fetch(`${API_ROOT}/events`, {
    headers: headers()
  }).then(res => {
    return res.json()
    })
}

const createUser = data => {
  return fetch(`${API_ROOT}/signup`, {
    method: "POST",
    headers: {      
      "Content-Type": "application/json",
      Accept: "application/json"
      },
    body: JSON.stringify({user: data})
  }).then(res => res.json());
};

// const getPhotos = (search) => {
//     return fetch(`https://api.unsplash.com/search/photos?query=${search}&client_id=qj3dfpSydcMDVv4cmGnE6bxKn_1PYW3-JLvt_IJCLJs`, 
//     {headers: headers()})
//     .then(res => {
//         return res.json()
//     })
// }

const getPhotos = (search) => {
  return fetch(`https://api.unsplash.com/search/photos?query=${search}&client_id=${API_KEY}`, 
  {headers: headers()})
  .then(res => {
      return res.json()
  })
}

export const api = {
  auth: {
    login,
    getCurrentUser,
    getCalendars,
    createUser
  },
  constellations: {
    getConstellations
  },
  photos: {
    getPhotos
  },
  phenomena: {
      getPhenomena
  },
  moonPhase: {
    getMoonPhase
  },
  events: {
    getEvents
  }
};