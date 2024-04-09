import { apiAuth } from '@/services/auth';

interface AuthType {
  user_id: string;
  password: string;
}

const login = async (form: AuthType) => {
  try {
    const result = await apiAuth.login(form);

    return result;
  } catch (e) {
    console.log('login error');
    return false;
  }
};

export default login;
