import LogoMini from '@/assets/images/icon-hyang.png';
import Logo from '@/assets/images/logo-hyang.png';

import useAppStore from '@/store/appStore.ts';
import { Link, useLocation } from 'react-router-dom';

export default function AppSidebar() {
  const { isOpenSidebar } = useAppStore();
  const location = useLocation();
  console.log(location);

  return (
    <div className={`sidebar ${isOpenSidebar ? 'open' : ''}`}>
      <div className="sidebar__title">
        <Link className="sidebar__logo" to="/main">
          {isOpenSidebar ? (
            <img src={Logo} className="large" alt="GS ITM Big Logo" />
          ) : (
            <img src={LogoMini} alt="GS ITM Small Logo" />
          )}
        </Link>
      </div>

      {isOpenSidebar && (
        <nav className="sidebar__menu">
          <ul className="sidebar__menu-list">
            <li className="sidebar__menu-item">
              <span className="menu__title">Guide</span>

              <ul className="sidebar__subMenu-list">
                <li className="sidebar__subMenu-item">
                  <Link to="/guide/used">Used</Link>
                </li>
                <li className="sidebar__subMenu-item">
                  <Link to="/guide/debug">Debug</Link>
                </li>
              </ul>
            </li>

            <li className="sidebar__menu-item">
              <span className="menu__title">Development</span>

              <ul className="sidebar__subMenu-list">
                <li className="sidebar__subMenu-item">
                  <Link to="/dev/team">팀장님</Link>
                </li>
                <li className="sidebar__subMenu-item">
                  <Link to="/dev/store">Store Test</Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}
