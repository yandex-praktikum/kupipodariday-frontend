import { URL } from "./constants";

const checkResponse = (res) => {
  if (res.ok || res.created) {
    return res.json();
  }
  return res.json().then((err) => Promise.reject(err));
};
;
const headersWithContentType = { "Content-Type": "application/json" };

export const registerUser = (userData) => {
  return fetch(`${URL}/signup/`, {
    method: "POST",
    headers: headersWithContentType,
    body: JSON.stringify(userData),
  }).then(checkResponse);
};

export const loginUser = (username, password) => {
  return fetch(`${URL}/signin/`, {
    method: "POST",
    headers: headersWithContentType,
    body: JSON.stringify({ username, password }),
  })
    .then(checkResponse)
    .then((data) => {
      if (data.auth_token) {
        localStorage.setItem("auth_token", data.auth_token);
        return data;
      } else {
        return;
      }
    });
};

export const logoutUser = () => {
  return fetch(`${URL}/api/token/logout/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Token ${localStorage.getItem("auth_token")}`,
    },
  }).then((res) => {
    if (res.status === 204) {
      localStorage.removeItem("auth_token");
      return res;
    } else {
      return;
    }
  });
};

export const getUser = () => {
  return fetch(`${URL}/api/users/me/`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Token ${localStorage.getItem("auth_token")}`,
    },
  }).then(checkResponse);
};

export const getCards = (page = 1) => {
  return fetch(`${URL}/api/cats/?page=${page}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Token ${localStorage.getItem("auth_token")}`,
    },
  }).then(checkResponse);
};

export const getCard = (id) => {
  return fetch(`${URL}/api/cats/${id}/`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Token ${localStorage.getItem("auth_token")}`,
    },
  }).then(checkResponse);
};

export const getAchievements = () => {
  return fetch(`${URL}/api/achievements/`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Token ${localStorage.getItem("auth_token")}`,
    },
  }).then(checkResponse);
};

export const setAchievements = (achievement_name) => {
  return fetch(`${URL}/api/achievements/`, {
    method: "POST",
    body: JSON.stringify({ achievement_name }),
    headers: {
      "Content-Type": "application/json",
      authorization: `Token ${localStorage.getItem("auth_token")}`,
    },
  }).then(checkResponse);
};

export const sendCard = (card) => {
  return fetch(`${URL}/api/cats/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Token ${localStorage.getItem("auth_token")}`,
    },
    body: JSON.stringify(card),
  }).then(checkResponse);
};

export const updateCard = (card, id) => {
  return fetch(`${URL}/api/cats/${id}/`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      authorization: `Token ${localStorage.getItem("auth_token")}`,
    },
    body: JSON.stringify(card),
  }).then(checkResponse);
};
