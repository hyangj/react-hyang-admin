import service from '@/services';
import { apiAuth } from '@/services/auth';

interface AuthType {
  user_id: string;
  password: string;
}

export async function login(form: AuthType) {
  try {
    const { data } = await apiAuth.login(form);
    const { accessToken } = data;

    service.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

    return data;
  } catch (e) {
    console.log('Login error');
    return false;
  }
}

export async function logout() {
  try {
    localStorage.removeItem('userStore');
    window.location.href = '/';
  } catch (e) {
    console.log('Logout error');
    return false;
  }
}

export const isLogin =
  localStorage.userStore && JSON.parse(localStorage.userStore).state.user;
