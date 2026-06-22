// src/utils/acl.js

const LS_TOKEN = "fx_token";
const LS_ROLES = "fx_roles";

export function setAuth(token, roles = []) {
  localStorage.setItem(LS_TOKEN, token);
  localStorage.setItem(LS_ROLES, JSON.stringify(roles));
}

export function clearAuth() {
  localStorage.removeItem(LS_TOKEN);
  localStorage.removeItem(LS_ROLES);
}

export function getToken() {
  return localStorage.getItem(LS_TOKEN) || "";
}

export function getRoles() {
  try {
    return JSON.parse(localStorage.getItem(LS_ROLES) || "[]");
  } catch {
    return [];
  }
}

// role based access
export function hasRole(role) {
  return getRoles().includes(role);
}