import LogoMini from '@/assets/images/icon-hyang.png';
import Logo from '@/assets/images/logo-hyang.png';

import { apiMenu } from '@/services/menu';
import useAppStore from '@/store/appStore.ts';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { MenuItemType } from '@/types';
import treeConvertData from '@/utils/tree-convert-data';

export default function AppSidebar() {
  const { isOpenSidebar } = useAppStore();
  const [menuList, setMenuList] = useState<MenuItemType[]>([]);
  const location = useLocation();
  console.log(location);

  const convertParam = {
    data: menuList,
    hasRoot: false,
    parent_key: 'parent_menu_id',
    options: {},
  };

  const handleLoadMenuList = async () => {
    const { data } = await apiMenu.get();
    console.log('result: ', data);

    convertMenuList(data);
  };

  const convertMenuList = (data: MenuItemType[]) => {
    const param = Object.assign(convertParam, { data });
    const converted = treeConvertData(param) || [];
    console.log('메뉴 리스트: ', converted);

    setMenuList(converted);
  };

  useEffect(() => {
    handleLoadMenuList();
  }, []);

  return (
    <div className={`sidebar ${isOpenSidebar ? 'open' : ''}`}>
      <div className="sidebar__title">
        <Link className="sidebar__logo" to="/main">
          {isOpenSidebar ? (
            <img src={Logo} className="large" alt="HYANG Big Logo" />
          ) : (
            <img src={LogoMini} alt="HYANG Small Logo" />
          )}
        </Link>
      </div>

      {isOpenSidebar && (
        <nav className="sidebar__menu">
          <ul className="sidebar__menu-list">
            {menuList.map((menu) => (
              <li className="sidebar__menu-item" key={menu.menu_id}>
                <span className="menu__title">{menu.menu_name}</span>

                {/* Child Menu */}
                {menu.children?.length !== 0 && (
                  <ul className="sidebar__subMenu-list">
                    {menu.children?.map((child_menu) => (
                      <li
                        className={`sidebar__subMenu-item ${location.pathname === menu.menu_path + child_menu.menu_path ? 'selected' : ''}`}
                        key={child_menu.menu_id}
                      >
                        <Link to={menu.menu_path + child_menu.menu_path}>
                          {child_menu.menu_name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}
