import axios from 'axios';

// Crear una instancia de axios con configuración global
const instance = {
    baseURL: 'https://2xgxyh-4000.csb.app/'
};

// Función genérica para manejar errores
const handleError = error => {
    console.error('Error:', error);
    throw error;
};

const Post = async (route, data, config = {}) => {
    const url = instance.baseURL + `${route}`
    try {
        const response = await axios.post(url, data, config);
        return response;
    } catch (error) {
        handleError(error);
    }
};

const Get = async (route, config = {}) => {
    const url = instance.baseURL + `${route}`
    try {
        const response = await axios.get(url, config);
        return response;
    } catch (error) {
        handleError(error);
    }
};

const Put = async (route, data, config = {}) => {
    const url = instance.baseURL + `${route}`
    try {
        const response = await axios.put(url, data, config);
        return response;
    } catch (error) {
        handleError(error);
    }
};

const Delete = async (route, config = {}) => {
    const url = instance.baseURL + `${route}`
    try {
        const response = await axios.delete(url, config);
        return response;
    } catch (error) {
        handleError(error);
    }
};

export const DefaultAxios = {
    Post,
    Get,
    Put,
    Delete
};
