import api from './api';

export const getAllCroquetas = () => {
  return api.get('/croquetas');
};

export const getCroquetaByNombre = (nombre) => {
  return api.get(`/croquetas/${nombre}`);
};

export const createCroqueta = (croqueta) => {
  return api.post('/croquetas', croqueta);
};

export const deleteCroqueta = (nombre) => {
  return api.delete(`/croquetas/${nombre}`);
};

export const updateCroqueta = (nombre, data) => {
  return api.put(`/croquetas/${nombre}`, data);
};