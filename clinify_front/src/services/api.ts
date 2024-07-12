import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const registerUser = async (userData: { username: string; email: string; password: string }) => {
    try {
        const response = await axios.post(`${API_URL}/auth/register`, userData);
        return response.data;
    } catch (error: any) {
        throw error.response.data;
    }
};

export const loginUser = async (credentials: { username: string; password: string; remember_me: boolean }) => {
    try {
        const response = await axios.post(`${API_URL}/auth/login`, credentials);
        return response.data;
    } catch (error:any) {
        throw error.response.data;
    }
};

export const refreshToken = async (token: string) => {
    try {
        const response = await axios.post(`${API_URL}/auth/refresh`, { refresh_token: token });
        return response.data;
    } catch (error : any) {
        throw error.response.data;
    }
};

export const logoutUser = async () => {
    try {
        const response = await axios.post(`${API_URL}/auth/logout`);
        return response.data;
    } catch (error : any) {
        throw error.response.data;
    }
};

export const requestPasswordReset = async (email: string) => {
    try {
        const response = await axios.post(`${API_URL}/auth/password-reset-request`, { email });
        return response.data;
    } catch (error : any) {
        throw error.response.data;
    }
};

export const confirmPasswordReset = async (data: { email: string; reset_code: string; new_password: string }) => {
    try {
        const response = await axios.post(`${API_URL}/auth/password-reset-confirm`, data);
        return response.data;
    } catch (error : any) {
        throw error.response.data;
    }
};

export const googleLogin = async () => {
    try {
        const response = await axios.get(`${API_URL}/auth/auth/google`);
        return response.data;
    } catch (error : any) {
        throw error.response.data;
    }
};

export const facebookLogin = async () => {
    try {
        const response = await axios.get(`${API_URL}/auth/auth/facebook`);
        return response.data;
    } catch (error : any) {
        throw error.response.data;
    }
};
