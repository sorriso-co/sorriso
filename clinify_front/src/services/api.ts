import axiosInstance from '../utils/axios';

interface RegisterData {
  name: string;
  email: string;
  age: string;
  phone: string;
  country: string;
  city: string;
  password: string;
}

interface LoginData {
  email: string;
  password: string;
}

interface PasswordChangeData {
  old_password: string;
  new_password: string;
}

// Login function
export const login = async (credentials: LoginData) => {
  try {
    const response = await axiosInstance.post('/api/login', credentials);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.detail || 'Login failed');
  }
};

// Register function
export const register = async (userData: RegisterData) => {
  try {
    const response = await axiosInstance.post('/api/register', {
      user: {
        name: userData.name,
        email: userData.email,
        age: userData.age,
        phone: userData.phone,
        country: userData.country,
        city: userData.city
      },
      password: userData.password
    });
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.detail || 'Registration failed');
  }
};

// Get current user function
export const getUser = async (token: string) => {
  try {
    const response = await axiosInstance.get('/api/users/me', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.detail || 'Failed to fetch user data');
  }
};

// Change password function
export const changePassword = async (token: string, data: PasswordChangeData) => {
  try {
    const response = await axiosInstance.post('/api/change-password', data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.detail || 'Password change failed');
  }
};
