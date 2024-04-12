import useAppStore from '@/store/appStore.ts';
import { logout } from '@/utils/auth.ts';
import {
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

export default function AppSidebar() {
  const { isOpenSidebar, setIsOpenSidebar } = useAppStore();
  const navigate = useNavigate();
  return (
    <header className={`header`}>
      <i className="icon icon_menu" onClick={() => setIsOpenSidebar(!isOpenSidebar)}>
        {isOpenSidebar ? <MenuFoldOutlined /> : <MenuUnfoldOutlined />}
      </i>

      <div className="header__right">
        <div className="header__right-user">
          <UserOutlined className="d-block text-white" />
        </div>

        <ul className="header__right-menuList">
          <li onClick={() => navigate('/user')}>
            <UserOutlined className="d-inline-block text-white mr-10" />
            <span>My Profile</span>
          </li>
          <li onClick={() => logout()}>
            <LogoutOutlined className="d-inline-block text-white mr-10" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
    </header>
  );
}
