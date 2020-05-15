import { unix } from "moment";
const API_KEY = process.env.REACT_APP_API_KEY;

const API_ROOT = `http://localhost:3000/api/v1`;
const heroku_root = 'https://mod4-stellar-backend.herokuapp.com/api/v1'

const token = () => localStorage.getItem("token");

const headers = () => {
  return {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: token()
  };
};

const getConstellations = () => {
  return fetch(`${heroku_root}/constellations/`, { headers: headers() }).then(res =>
    res.json()
  );
};

const getCalendars = () => {
  return fetch(`${heroku_root}/calendars`, { headers: headers() })
  .then(res =>
    res.json())
};

const getPhenomena = () => {
    return fetch(`${heroku_root}/sky_events`, {headers: headers() })
    .then(res => res.json())
}

const getMoonPhase = (unixTimestamp) => {
    return fetch(`http://api.farmsense.net/v1/moonphases/?d=${unixTimestamp}`)
    .then(res => res.json())
}

const login = data => {
  return fetch(`${heroku_root}/login`, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify(data)
  }).then(res => res.json());
};

const getCurrentUser = () => {
  return fetch(`${heroku_root}/current_user`, {
    headers: headers()
  }).then(res => {
    return res.json();
  });
};

const getEvents = () => {
  return fetch(`${heroku_root}/events`, {
    headers: headers()
  }).then(res => {
    return res.json()
    })
}

const createUser = data => {
  return fetch(`${heroku_root}/signup`, {
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